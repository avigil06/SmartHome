import React, { Component } from 'react'
import styled from 'styled-components'
import { palette, font } from 'styled-theme'
import { Redirect } from 'react-router-dom'

import { getUsersHueBridge } from 'services/firebase/database'
import { setupHueQueryBridge } from 'services/bridges/hue'

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

  componentWillMount() {
    const philipsUsername = getUsersHueBridge()
      .then(response => {
        if (response) {
          const bridge = new setupHueQueryBridge(response.ip_address, response.username)
          this.setState({ hasBridge: true, bridge })
          bridge.getAll()
          .then(responses => {
            const entries = {
              lights: responses[0],
              groups: responses[1]
            }
            this.setState({entries})
          })
        }
      })
      .catch(error => {
        console.log(error)
        this.setState({ hasBridge: false })
      })
  }

  triggerRefresh = () => {
    this.state.bridge.getAll()
    .then(responses => {
      const entries = {
        lights: responses[0],
        groups: responses[1]
      }
      this.setState({entries})
    })
  }

  toggleLight = (id, nextState) => {
    const { bridge } = this.state
    bridge.toggleLightOnOff(id, nextState)
    .then(() => this.triggerRefresh())
  }

  setActiveEntry = (path, index) => this.setState({ activeEntry: { path, index } });

  renderPath = (path) => this.state.entries[path].map(
    (entry, i) => <GroupEntry
                      onClick={() => this.setActiveEntry(path, i)}
                      key={`${path}.${i}`}>{ entry.name }</GroupEntry>)

  render() {
    const {...state} = this.state
    const activeEntry = state.entries && state.activeEntry
      ? state.entries[state.activeEntry.path][state.activeEntry.index] : null

    const modal = {
      isOpen: !state.hasBridge,
      onClose() {
        console.log('closing modal')
      }
    }

    return (
      <AdminTemplate title="Lights">
        <BridgeModal {...modal} />
        <PaneContainer>
          <LeftPane>
            <Group>
              <GroupHeading>Lights</GroupHeading>
              { this.renderPath('lights') }
              <GroupHeading>Groups</GroupHeading>
              { this.renderPath('groups') }
            </Group>
          </LeftPane>
          { activeEntry && state.hasBridge
            ? <RightPane>
                <Heading>{ activeEntry.name } <Button onClick={this.triggerRefresh}>Refresh</Button></Heading>
                <ul>
                  <li>Status: <Button onClick={() => this.toggleLight(activeEntry.id, !activeEntry.state.on)}>{ activeEntry.state.on ? 'On' : 'Off' }</Button></li>
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
