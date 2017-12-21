import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

import { IconButton, Field, Button, Form, Heading } from 'components'

import { auth } from 'services/firebase'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`

const FormContainer = styled.div`
  width: 100%;
  max-width: 320px;
  padding: 1rem;
  border: 2px solid transparent;
  border-color: ${props => props.error ? 'red' : '#2196f3'};
  border-radius: 3px;
  transition: border-color 300ms ease-in-out;
`

const H = styled(Heading)`
  color: ${props => props.error ? 'red' : '#2196f3'};
  transition: color 300ms ease-in-out;
`

const ErrorMessage = styled.h4`
  color: red;
  text-align: center;
  background-color: white;
  display: block;
`

class LoginPage extends Component {

  state = {
    email: '',
    password: '',
    last_octet: '',
    redirectToReferrer: false,
    submitting: false,
    error: null
  }

  handleSubmit = (event) => {
    const { email, password, last_octet } = this.state
    event.preventDefault()
    this.setState({submitting: true})
    auth.signInWithEmailAndPassword(email, password)
      .then(response => {
        this.setState({redirectToReferrer: true})
      })
      .catch(error => {
        this.setState({submitting: false, error})
      })
  }

  render() {
    const {
      email,
      password,
      last_octet,
      redirectToReferrer,
      submitting,
      error
    } = this.state
    const { from } = this.props.location.state || '/home'

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

    const Error = <ErrorMessage>{error}</ErrorMessage>

    return (
      <Wrapper>
        {redirectToReferrer && <Redirect to={from} />}
        <FormContainer error={error}>
          <H error={error} align="center">SmartHome</H>
          {error && <ErrorMessage>{error.message}</ErrorMessage>}
          <Form
            handleSubmit={this.handleSubmit}
            submitting={submitting}
            submitText="Login">
            <Field {...userField} />
            <Field {...passwordField} />
          </Form>
        </FormContainer>
      </Wrapper>
    )
  }
}

export default LoginPage
