import firebase from 'firebase'

let config = {
  apiKey: "AIzaSyAVl9S4OIigOzDXIdUt2Aikv6a3HWYGBdU",
  authDomain: "smarthome-99b37.firebaseapp.com",
  databaseURL: "https://smarthome-99b37.firebaseio.com",
  projectId: "smarthome-99b37",
  storageBucket: "smarthome-99b37.appspot.com",
  messagingSenderId: "1048680457573"
}

export const firebaseApp = firebase.initializeApp(config)

export const auth = firebaseApp.auth()

export const storageKey = 'auth_storage_container'

export const isAuthenticated = () => {
  console.log(Object.assign({}, auth))
  return !!auth.currentUser || !!localStorage.getItem(storageKey)
}
