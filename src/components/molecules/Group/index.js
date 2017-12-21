import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Group = styled.ul`
  width: 100%;
  background-color: ${props => palette('grayscale', 3)};
  padding: 0;
  margin: 0;
  list-style: none;
  font-family: ${props => font('pre')};
`

export default Group
