import homeData from '../assets/levels/home.json'
import { level } from './level.js'

export const levels = ({ store }) => {
  const home = level({ store, data: homeData })

  return {
    home
  }
}
