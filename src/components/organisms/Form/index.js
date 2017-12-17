import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'

import { ReduxField, Heading, Button } from 'components'

const F = styled.form`
  width: 100%;
  box-sizing: border-box;
  padding-bottom: 1rem;
`

const B = styled(Button)`
  width: 100%;
`

const Form = ({ handleSubmit, submitting, submitText, children }) => {
  return (
    <F onSubmit={handleSubmit}>
      {children}
      <B type="submit" disabled={submitting}>{ submitText }</B>
    </F>
  )
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
  submitText: PropTypes.string
}

Form.defaultProps = {
  handleSubmit(event) { console.log(event) },
  submitting: false,
  submitText: 'Click'
}

export default Form
