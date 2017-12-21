import React from 'react'
import { storiesOf } from '@storybook/react'
import Group from '.'

storiesOf('Group', module)
  .add('default', () => (
    <Group>Hello</Group>
  ))
  .add('reverse', () => (
    <Group reverse>Hello</Group>
  ))
