import projects from "../../data/projects.js"

const state = {
  projects
}

const featuredIds = ["vuex-router", "count", "tiny-heap", "yocode"]

const getters = {
  featured () {
    return state.projects.filter((project) => {
      return featuredIds.includes(project.id)
    })
  }
}

export default {
  state,
  getters,
  namespaced: true
}
