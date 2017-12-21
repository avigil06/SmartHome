import { firebaseApp, auth } from './'

const db = firebaseApp.database()

export const addHueBridge = async (ip_address, username) => {
  const appName = 'SmartHome/Web'
  const userId = auth.currentUser.uid

  let key = await getHueBridge(ip_address)
        .then(r => r)
        .catch(e => e)

  try {
    if (!key) {
      console.log('key not found')
      await createHueBridge(ip_address)
    }

    await addHueUser(ip_address, username)
  }
  catch (error) {
    console.log(error)
  }
}

const convertIPtoDBPath = ip_address => ip_address.replace(/./g, '_')

export const getHueBridge = (ip_address) => {
  return new Promise((resolve, reject) => {
      return db.ref().child(`bridges/${convertIPtoDBPath(ip_address)}`).once('value')
        .then(snapshot => snapshot.val())
        .then(data => {
          console.log(data)
          if (!data) return reject(null)
          return resolve(data)
        })
        .catch(error => {
          reject(null)
        })
  })
}

const createHueBridge = (ip_address) => {
  return new Promise((resolve, reject) => {
    return db.ref(`bridges/${convertIPtoDBPath(ip_address)}`)
      .set({
        users: {},
      })
      .then((response) => resolve(response))
      .catch(e => reject(e))
  })
}

const addHueUser = (ip_address, username) => {
  return new Promise((resolve, reject) => {
    return db.ref(`bridges/${convertIPtoDBPath(ip_address)}/users/${auth.currentUser.uid}`).set(username)
      .then(response => resolve(response))
      .catch(error => reject(error))
  })
}

export const getUserProfile = () => {
  const userId = auth.currentUser.uid
}
