import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { AdminTemplate } from 'components'

const PaneContainer = styled.section`
  display: flex;
  flex-direction: row;
  > * {
    flex-basis: 300px;
    flex-grow: 0;
    flex-shrink: 0;
  }
`

const LeftPane = styled.div`
  height: calc(100vh - 37px);
  border-right: 1px solid ${props => palette('grayscale', 4)};
`

const RightPane = styled.div`
  flex-grow: 1;
`

const LightsPage = () => {
  return (
    <AdminTemplate title="Lights">
      <PaneContainer>
        <LeftPane>Left Side</LeftPane>
        <RightPane>Right Side</RightPane>
      </PaneContainer>
    </AdminTemplate>
  )
}

export default LightsPage
