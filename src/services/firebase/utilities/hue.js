import { database } from '../database'

const path = '/bridges/hue'

export function HueBridge() {
  this.listen = (fn) => database.ref(path).on('value', fn)
  this.getAll = () => database.ref('/bridges/hue').once('value')
    .then(snapshot => snapshot.val())
}
