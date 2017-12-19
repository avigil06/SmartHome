import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { pushRotate as Menu } from 'react-burger-menu'
import { Heading } from 'components'

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
  const menuProps = {
    pageWrapId: 'page-wrap',
    outerContainerId: 'outer-container',
    width: '280px',
    left: true,
    styles: {
      bmBurgerButton: {
        position: 'absolute',
        width: '24px',
        height: '22px',
        left: '24px',
        top: '24px'
      },
      bmBurgerBars: {
        background: '#373a47'
      },
      bmCrossButton: {
        height: '24px',
        width: '24px'
      },
      bmCross: {
        background: '#bdc3c7'
      },
      bmMenu: {
        background: '#373a47',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
      },
      bmMorphShape: {
        fill: '#373a47'
      },
      bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
      },
      bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
      }
    }
  }

  return (
    <Wrapper {...props} id="outer-container">
      <Menu {...menuProps}>
        <a>Home</a>
        <a>Lights</a>
        <a>Calendar</a>
      </Menu>
      <Content id="page-wrap">
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
