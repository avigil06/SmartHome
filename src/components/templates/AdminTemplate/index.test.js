import React from 'react'
import { mount, shallow } from 'enzyme'
import AdminTemplate from '.'

const wrap = (props = {}) => shallow(<AdminTemplate {...props}>test</AdminTemplate>)

it('mounts', () => {
  mount(<AdminTemplate>test</AdminTemplate>)
})

it('renders children when passed in', () => {
  const wrapper = wrap()
  expect(wrapper.contains('test')).toBe(true)
})
