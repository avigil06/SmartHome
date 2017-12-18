import React from 'react'
import { storiesOf } from '@storybook/react'
import { AdminPage } from 'components'

storiesOf('AdminPage', module)
  .add('default', () => (
    <AdminPage />
  ))
