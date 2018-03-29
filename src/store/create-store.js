import projects from "./modules/projects.js"
import { router } from "vuex-router"
import Vue from "vue"
import Vuex from "vuex"


Vue.use(Vuex)

const createStore = () => {
  const store = new Vuex.Store({
    modules: {
      projects,
      router
    },
    strict: true
  })

  return store
}

export default createStore
