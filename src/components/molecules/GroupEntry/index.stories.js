import React from 'react'
import { storiesOf } from '@storybook/react'
import GroupEntry from '.'

storiesOf('GroupEntry', module)
  .add('default', () => (
    <GroupEntry>Hello</GroupEntry>
  ))
  .add('reverse', () => (
    <GroupEntry reverse>Hello</GroupEntry>
  ))
