import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Heading, Menu, Link } from 'components'

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
  border-bottom: 1px solid ${props => palette('grayscale', 1)};
  padding: 0 24px;
  > * {
    color: ${props => palette('grayscale', 1)};
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
        <Link to="/">Home</Link>
        <Link to="/lights">Lights</Link>
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
