import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { IconButton, Field, Button, Form } from 'components'
import { Modal } from 'containers'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: 0.5rem;
  }
`

const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: 0.5rem;
    width: 100%;
    background-color: red;
  }
`

class LoginModal extends Component {
  static propTypes = {
    user: PropTypes.object,
    onFacebookLogin: PropTypes.func.isRequired,
    onGoogleLogin: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
  }

  state = { submitting: false }

  componentWillReceiveProps(nextProps) {
    if (!this.props.user && nextProps.user) {
      this.props.onClose()
    }
  }

  submitLogin = (event) => {
    event.preventDefault();
    this.setState({submitting: true})

    const fields = Array.from(event.target.querySelectorAll('input, select'))
      .map(field => ({ name: field.name, value: field.value }))
      
    setTimeout(() => { this.setState({submitting: false}) }, 5000)
  }

  render() {
    const { onFacebookLogin, onGoogleLogin, ...props } = this.props
    return (
      <Modal title="Login" name="login" closeable {...props}>
        <FormWrapper
          submitting={props.submitting}
          handleSubmit={this.submitLogin}
          submitText="Login">
          <Field name="username" type="email" label="Email Address" />
          <Field name="password" type="password" label="Password" />
        </FormWrapper>
      </Modal>
    )
  }
}

export default LoginModal
