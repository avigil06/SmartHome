const axios = require('axios')

const config = {
  username: 'mKw8Bu8TabdoAB2QiB1-4JnyONnXPCAM42nRTM7g',
  ip_address: '192.168.179.231'
}

const getAllLights = (ip_address, username) => axios
  .get(`http://${ip_address}/api/${username}/lights`)
  .then(response => response.data)
  .then(lights => Object.keys(lights).map(key => {
    const light = Object.assign({}, lights[key])
    light.id = key
    return light
  }))
  .then(response => {
    return response
  })
  .catch(error => {
    throw error
  })

const getAllGroups = (ip_address, username) => axios
  .get(`http://${ip_address}/api/${username}/groups`)
  .then(response => response.data)
  .then(groups => Object.keys(groups).map(key => {
    const group = Object.assign({}, groups[key])
    group.id = key
    return group
  }))
  .then(response => {
    return response
  })
  .catch(error => {
    throw error
  })

const toggleLightOnOff = (ip_address, username, lightId, nextState) => axios
  .put(`http://${ip_address}/api/${username}/lights/${lightId}/state`, { on: nextState})
  .then(response => response.data)

function setupHueQueryBridge () {
  this.ip_address = config.ip_address
  this.username = config.username
  this.timer = null

  this.getAllLights = () => getAllLights(this.ip_address, this.username)
  this.getAllGroups = () => getAllGroups(this.ip_address, this.username)
  this.toggleLightOnOff = (lightId, nextState) => toggleLightOnOff(this.ip_address, this.username, lightId, nextState)
  this.getAll = () => Promise.all([
    this.getAllLights(),
    this.getAllGroups()
  ])
}

module.exports = setupHueQueryBridge;
