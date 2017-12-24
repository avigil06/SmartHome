import React, { Component } from 'react'
import styled from 'styled-components'
import { palette, font } from 'styled-theme'
import { Redirect } from 'react-router-dom'

import { HueBridge } from 'services/firebase/utilities/hue'

import {
  AdminTemplate,
  Heading,
  Group,
  GroupHeading,
  GroupEntry,
  BridgeModal,
  Button } from 'components'

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

class LightsPage extends Component {

  state = {
    activeEntry: null,
    hasBridge: true,
    bridge: null,
    entries: { lights: [], groups: [] },
  }

  setActiveEntry = (path, index) => this.setState({ activeEntry: { path, index } });

  renderPath = (path) => this.props.bridges.hue[path].map(
    (entry, i) => <GroupEntry
                      onClick={() => this.setActiveEntry(path, i)}
                      key={`${path}.${i}`}>{ entry.name }</GroupEntry>)

  render() {
    const has = Object.prototype.hasOwnProperty
    const { state, props } = this
    const activeEntry = props.bridges && state.activeEntry
      ? props.bridges.hue[state.activeEntry.path][state.activeEntry.index] : null

    return (
      <AdminTemplate title="Lights">
        <PaneContainer>
          <LeftPane>
            <Group>
              <GroupHeading>Lights</GroupHeading>
              { props.bridges && has.call(props.bridges, 'hue') && this.renderPath('lights') }
              <GroupHeading>Groups</GroupHeading>
              { props.bridges && has.call(props.bridges, 'hue') && this.renderPath('groups') }
            </Group>
          </LeftPane>
          { activeEntry && state.hasBridge
            ? <RightPane>
                <Heading>{ activeEntry.name }</Heading>
                <ul>
                  <li>Status: <Button>{ activeEntry.state.on ? 'On' : 'Off' }</Button></li>
                  <li>Brightness: { Math.ceil(activeEntry.state.bri / 254 * 100) }%</li>
                </ul>
              </RightPane>
            : <RightPane><Heading>No Entry Selected</Heading></RightPane>
          }
        </PaneContainer>
      </AdminTemplate>
    )
  }
}

export default LightsPage
