import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

import { pushRotate as M } from 'react-burger-menu'

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

const Menu = ({children, ...props }) => {
  return (
    <M {...menuProps} {...props}>{children}</M>
  )
}

Menu.propTypes = {
  children: PropTypes.node,
}

export default Menu
