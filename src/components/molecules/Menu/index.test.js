import React from 'react'
import { shallow } from 'enzyme'
import Menu from '.'

const wrap = (props = {}) => shallow(<Menu {...props} />).dive()

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('renders cite when passed in', () => {
  const wrapper = wrap({ cite: 'foo' })
  expect(wrapper.contains('foo')).toBe(true)
})
