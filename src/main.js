import { createApp } from 'vue'
import App from './App.vue'
import { Store } from './state/store.js'
const store = new Store()

store.init().then(() => {
  const app = createApp(App)
  app.provide('store', store)
  app.mount('#app')
})


