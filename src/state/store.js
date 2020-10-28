import { levels } from './levels.js'
import tinyWorldData from '../assets/tiny.ogmo'
import { world } from './world.js'

export class Store {
  constructor () {
    this.levels = levels({ store: this })
    this.world = world({ store: this, data: tinyWorldData })
  }

  async init () {

  }
}

