import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const GroupHeading = styled.li`
  font-size: 1.2rem;
  font-weight: bold;
  border-bottom: 2px solid ${props => palette('white', 0)};
  padding: .5rem 5px;
`

export default GroupHeading
