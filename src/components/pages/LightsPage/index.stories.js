import React from 'react'
import { storiesOf } from '@storybook/react'
import { LightsPage } from 'components'

storiesOf('LightsPage', module)
  .add('default', () => (
    <LightsPage />
  ))
