import "regenerator-runtime/runtime"
import App from "./components/app.vue"
import createStore from "./store/create-store.js"
import pageRoutes from "./page-routes.js"
import Vue from "vue"

var rootEl = document.createElement("DIV")
rootEl.id = "root"
document.body.appendChild(rootEl)

const store = createStore()

new Vue({
  el: "#root",
  store,
  render: h => h(App),
})

store.dispatch("router/init", {pageRoutes})
