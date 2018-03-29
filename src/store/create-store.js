import Vue from "vue"
import Vuex from "vuex"
import { router } from "vuex-router"

Vue.use(Vuex)

const createStore = () => {
  const store = new Vuex.Store({
    modules: {
      router
    },
    strict: true
  })

  return store
}

export default createStore
