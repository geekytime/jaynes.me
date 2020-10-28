import { createWebHistory, createRouter } from 'vue-router'

export class Router {
  constructor (store) {
    this.store = store
    this.history = createWebHistory()
  }

  init ({ routes }) {
    this.router = createRouter()
  }
}
