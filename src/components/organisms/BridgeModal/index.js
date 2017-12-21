import React, { Component } from 'react'
import axios from 'axios'

import { auth } from 'services/firebase'
import { addHueBridge} from 'services/firebase/database'

import { Modal, Form, Field } from 'components'


class BridgeModal extends Component {
  state = {
    submitting: false,
    ip_address: ''
  }

  handleSubmit = event => {
    event.preventDefault()
    const url = `http://${this.state.ip_address}/api`
    const username = 'mKw8Bu8TabdoAB2QiB1-4JnyONnXPCAM42nRTM7g'
    addHueBridge(this.state.ip_address, username)

    // axios.post(url, {
    //   devicetype: `smarthome#web ${auth.currentUser.email}`
    // })
    // .then(response => {
    //   console.log(response)
    // })
    // .catch(error => {
    //   console.log(error)
    // })
  }

  render() {
    const { submitting, ...state } = this.state

    const ip_address = {
      name: 'ip_address',
      label: 'Philips Hude Bridge',
      value: state.ip_address,
      onChange: (event) => {
        this.setState({ip_address: event.target.value})
      }
    }

    return (
      <Modal {...this.props} title="Connect your Philips Hue Bridge" closeable={false}>
        <Form submitText="Connect" submitting={submitting} handleSubmit={this.handleSubmit}>
          <Field {...ip_address} />
        </Form>
      </Modal>
    )
  }
}

export default BridgeModal
