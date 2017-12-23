import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { ListenForHueBridge } from 'store/actions'

import { AdminTemplate } from 'components'

class AdminContainer extends Component {
  static propTypes = {
    hue: PropTypes.object,
    getHueBridge: PropTypes.func.isRequired
  }

  componentWillMount() {
    this.props.getHueBridge()
  }

  render() {
    const {...props} = this.props
    return <AdminTemplate {...props} />
  }
}

const mapStateToProps = state => ({
  hue: state.firebase['hue'] || {}
})

const mapDispatchToProps = (dispatch) => ({
  getHueBridge: () => ListenForHueBridge(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer)
