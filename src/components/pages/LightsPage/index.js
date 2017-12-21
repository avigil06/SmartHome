import React, { Component } from 'react'
import styled from 'styled-components'
import { palette, font } from 'styled-theme'
import { Redirect } from 'react-router-dom'

import { AdminTemplate, Group, GroupHeading, GroupEntry, BridgeModal } from 'components'

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
    hasBridge: false,
    entries: { lights: [], groups: [] },
  }

  componentWillMount() {
    this.setState({
      entries: {
        lights: [
          'Kitchen 1A',
          'Kitchen 1B',
          'Kitchen 2A',
          'Kitchen 2B',
          'Living Room',
          'Rylee Lamp',
          'Outside 1',
          'Outside 2'
        ],
        groups: [
          'Kitchen 1',
          'Kitchen 2',
          'Living Room',
          'Rylee Room',
          'Outside'
        ]
      },
      activeEntry: { path: 'lights', index: 0 }
    });
  }

  setActiveEntry = (path, index) => this.setState({ activeEntry: { path, index } });

  renderPath = (path) => this.state.entries[path].map(
    (entry, i) => <GroupEntry
                      onClick={() => this.setActiveEntry(path, i)}
                      key={`${path}.${i}`}>{ entry }</GroupEntry>)

  render() {
    const {activeEntry, ...state} = this.state

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
          <RightPane>
            { activeEntry && state.hasBridge
              ? state.entries[activeEntry.path][activeEntry.index]
              : 'No Entry Selected' }
            <ul>
              <li>On/Off</li>
              <li>Color</li>
              <li>Brightness</li>
              <li>Timers</li>
              <li>Groups</li>
            </ul>
          </RightPane>
        </PaneContainer>
      </AdminTemplate>
    )
  }
}

export default LightsPage
