import { firebaseApp, auth } from './'

const db = firebaseApp.database()

export const addHueBridge = async (ip_address, username) => {
  const appName = 'SmartHome/Web'
  const userId = auth.currentUser.uid

  try {
    await addHueUser(ip_address, username)
    await addBridgeToUser(ip_address)
  }
  catch (error) {
    console.log(error)
  }
}

const convertIPtoDBPath = ip_address => ip_address.replace(/\./g, '-')

export const getUsersHueBridge = () => new Promise(async (resolve, reject) => {
  const ip_address = await db.ref(`/users/${auth.currentUser.uid}/bridges/philips/`)
    .once('value')
    .then(snapshot => snapshot.val())
    .catch(console.log)

  if (ip_address) {
    return db.ref(`/bridges/${convertIPtoDBPath(ip_address)}/`)
      .once('value')
      .then(snapshot => resolve({ username: snapshot.val(), ip_address }))
      .catch(() => reject(null))
  }

  reject(null)
})

const addHueUser = (ip_address, username) => new Promise((resolve, reject) => {
  const updates = {}
  updates[`/bridges/${convertIPtoDBPath(ip_address)}/`] = username
  return db.ref().update(updates)
    .then(response => resolve(response))
    .catch(error => reject(error))
})

const addBridgeToUser = ip_address => new Promise((resolve, reject) => {
  const updates = {}
  updates[`/users/${auth.currentUser.uid}/bridges/`] = { philips: ip_address }
  return db.ref().update(updates)
    .then(response => resolve(response))
    .catch(error => reject(error))
})
