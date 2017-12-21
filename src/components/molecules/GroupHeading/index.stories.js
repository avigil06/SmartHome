import React from 'react'
import { storiesOf } from '@storybook/react'
import GroupHeading from '.'

storiesOf('GroupHeading', module)
  .add('default', () => (
    <GroupHeading>Hello</GroupHeading>
  ))
  .add('reverse', () => (
    <GroupHeading reverse>Hello</GroupHeading>
  ))
