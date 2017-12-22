const firebase = require('firebase')

let config = {
  apiKey: "AIzaSyAVl9S4OIigOzDXIdUt2Aikv6a3HWYGBdU",
  authDomain: "smarthome-99b37.firebaseapp.com",
  databaseURL: "https://smarthome-99b37.firebaseio.com",
  projectId: "smarthome-99b37",
  storageBucket: "smarthome-99b37.appspot.com",
  messagingSenderId: "1048680457573"
}

const authConfig = {
  email: 'avigil06+rpi@gmail.com',
  password: 'km2!z43kaNwqOgc2'
}

const app = firebase.initializeApp(config)

firebase.auth().signInWithEmailAndPassword(authConfig.email, authConfig.password)

const db = app.database()

function hue(firebaseDB) {
  this.db = firebaseDB
  this.saveLightsAndGroups = (polling_response) => {
    const url = '/bridges/hue/'
    this.db.ref(url).set({ lights: polling_response[0], groups: polling_response[1] })
    .catch(error => {
      console.log('No firebase auth')
    })
  }
}

function firebaseApp(d) {
  this.hue = new hue(d)
}

module.exports = new firebaseApp(db)
