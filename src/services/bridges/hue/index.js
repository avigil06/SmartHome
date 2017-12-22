import axios from 'axios'

export const getAllLights = (ip_address, username) => axios
  .get(`http://${ip_address}/api/${username}/lights`)
  .then(response => response.data)
  .then(lights => Object.keys(lights).map(key => {
    const light = Object.assign({}, lights[key])
    light.id = key
    return light
  }))
  .then(response => {
    console.log(response)
    return response
  })
  .catch(error => {
    console.log(error)
    throw error
  })

  export const getAllGroups = (ip_address, username) => axios
    .get(`http://${ip_address}/api/${username}/groups`)
    .then(response => response.data)
    .then(groups => Object.keys(groups).map(key => {
      const group = Object.assign({}, groups[key])
      group.id = key
      return group
    }))
    .then(response => {
      console.log(response)
      return response
    })
    .catch(error => {
      console.log(error)
      throw error
    })
