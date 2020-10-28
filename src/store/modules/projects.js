import projects from "../../data/projects.js"

const state = {
  projects
}

const featuredIds = ["portals", "slots", "levis", "lightboard", "privacy-armor"]

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
