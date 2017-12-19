import React from 'react'
import { storiesOf } from '@storybook/react'
import { Menu } from 'components'

storiesOf('Menu', module)
  .add('default', () => (
    <Menu>
      Ullamco et reprehenderit magna cillum ullamco consectetur et enim aliqua.
    </Menu>
  ))
  .add('reverse', () => (
    <Menu reverse>
      Ullamco et reprehenderit magna cillum ullamco consectetur et enim aliqua.
    </Menu>
  ))
  .add('with cite', () => (
    <Menu cite="Foo">
      Ullamco et reprehenderit magna cillum ullamco consectetur et enim aliqua.
    </Menu>
  ))
