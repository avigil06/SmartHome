
export const initialState = {
  bridges: {}
}

export const HUE_BRIDGE_LISTENER = 'HUE_BRIDGE_LISTENER'

export const getResourceState = (state = initialState, resource) =>
state[resource] || initialResourceState
