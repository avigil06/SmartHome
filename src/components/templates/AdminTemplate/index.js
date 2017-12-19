import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Heading, Menu } from 'components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  min-height: 100vh;
  box-sizing: border-box;
`

const Content = styled.section`
  width: 100%;
  box-sizing: border-box;
  margin: 2rem auto;
  max-width: 920px;
`

const TitleBar = styled.section`
  height: 36px;
  border-bottom: 1px solid #9b9b8d;
  padding: 0 24px;
  > * {
    color: #9b9b8d;
  }
`

const AdminTemplate = ({ children, title, ...props }) => {
  const pageWrapId = 'page-wrap'
  const outerContainerId = 'outer-container'
  return (
    <Wrapper {...props} id={outerContainerId}>
      <Menu
        outerContainerId={outerContainerId}
        pageWrapId={pageWrapId}>
        <a>Home</a>
        <a>Lights</a>
        <a>Calendar</a>
      </Menu>
      <Content id={pageWrapId}>
        <TitleBar>
          <Heading>{title}</Heading>
        </TitleBar>
        {children}
      </Content>
    </Wrapper>
  )
}

AdminTemplate.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired
}

export default AdminTemplate
