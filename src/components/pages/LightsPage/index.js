import React, { Component } from 'react'
import styled from 'styled-components'
import { palette, font } from 'styled-theme'

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
// ----- Start Group Stuff
const Group = styled.ul`
  width: 100%;
  background-color: ${props => palette('grayscale', 3)};
  padding: 0;
  margin: 0;
  list-style: none;
  font-family: ${props => font('pre')};
`

const GroupHeading = styled.li`
  font-size: 1.2rem;
  font-weight: bold;
  border-bottom: 2px solid ${props => palette('white', 0)};
  padding: .5rem 5px;
`

const GroupEntry = styled.li`
  font-size: 1rem;
  border-bottom: 1px solid ${props => palette('white', 0)};
  padding: .5rem 5px;
  cursor: pointer;
`

// ----- End Group Stuff
class LightsPage extends Component {

  state = {
    activeEntry: null,
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

    return (
      <AdminTemplate title="Lights">
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
            { activeEntry
              ? state.entries[activeEntry.path][activeEntry.index]
              : 'No Entry Selected' }
          </RightPane>
        </PaneContainer>
      </AdminTemplate>
    )
  }
}

export default LightsPage
