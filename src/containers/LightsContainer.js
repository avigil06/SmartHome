import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { isPending, hasFailed } from 'redux-saga-thunk'
import { ListenForHueBridge } from 'store/actions'

import { LightsPage } from 'components'

class LightsContainer extends Component {
  static propTypes = {
    watchHueBridge: PropTypes.func.isRequired
  }

  componentWillMount() {
    this.props.watchHueBridge()
  }

  render() {
    return <LightsPage {...this.props} />
  }
}

const mapStateToProps = state => ({
  bridges: {
    hue: state.firebase.bridges.hue || { lights: [], groups: [] }
  }
})

const mapDispatchToProps = (dispatch, { limit }) => ({
  watchHueBridge: () => ListenForHueBridge(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(LightsContainer)
