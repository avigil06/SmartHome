import findIndex from 'lodash/findIndex'
import get from 'lodash/get'

import { initialState, getResourceState } from './selectors'

import { HUE_BRIDGE_LISTENER } from './selectors'

export default (state = initialState, { type, payload, meta }) => {
  const resource = get(meta, 'resource')

  if (!resource) {
    return state
  }

  switch (type) {
    case HUE_BRIDGE_LISTENER:
      return {
        ...state,
        [resource]: {
          ...getResourceState(state, resource),
          hue: payload,
        },
      }

    default:
      return state
  }
}
