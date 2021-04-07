import Vue from 'vue'
import { wrapFunctional } from './index'

const components = {
  Logo: () => import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  Moviecard: () => import('../..\\components\\Moviecard.vue' /* webpackChunkName: "components/moviecard" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
