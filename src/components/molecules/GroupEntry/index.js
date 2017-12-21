import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const GroupEntry = styled.li`
  font-size: 1rem;
  border-bottom: 1px solid ${props => palette('white', 0)};
  padding: .5rem 5px;
  cursor: pointer;
`

export default GroupEntry
