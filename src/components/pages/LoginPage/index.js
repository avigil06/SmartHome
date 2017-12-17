import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

import { IconButton, Field, Button, Form } from 'components'

import { auth } from 'services/auth'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`

const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 400px;
  max-width: 400px;
`

class LoginPage extends Component {

  state = {
    email: 'avigil06@gmail.com',
    password: 'Tester123',
    redirectToReferrer: false,
    submitting: false,
  }

  handleSubmit = (event) => {
    const { email, password } = this.state
    event.preventDefault()
    this.setState({submitting: true})
    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({redirectToReferrer: true})
      })
  }

  render() {
    const {
      email,
      password,
      redirectToReferrer,
      submitting
    } = this.state
    const { from } = this.props.location.state

    const userField = {
      name: "email",
      label: "Email Address",
      value: email,
      onChange: event => {
        this.setState({email: event.target.value})
      }
    }

    const passwordField = {
      name: "password",
      label: "Password",
      type: "password",
      value: password,
      onChange: event => {
        this.setState({password: event.target.value})
      }
    }

    return (
      <Wrapper>
        {redirectToReferrer && <Redirect to={from || '/home'} />}
        <FormContainer
          handleSubmit={this.handleSubmit}
          submitting={submitting}
          submitText="Login">
          <Field {...userField} />
          <Field {...passwordField} />
        </FormContainer>
      </Wrapper>
    )
  }
}

export default LoginPage
