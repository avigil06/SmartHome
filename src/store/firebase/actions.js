import { HueBridge } from 'services/firebase/utilities/hue'

import { HUE_BRIDGE_LISTENER } from './selectors'

export const ListenForHueBridge = dispatch => {
  const bridge = new HueBridge()
  const updateFirebaseReducer = snapshot => {
    snapshot = snapshot.val()
    console.log('updating snapshot', snapshot, HUE_BRIDGE_LISTENER)
    return dispatch({
      type: HUE_BRIDGE_LISTENER,
      payload: snapshot,
      meta: {
        resource: 'bridges'
      }
    })
  }
  bridge.listen(updateFirebaseReducer)
}
