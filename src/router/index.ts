import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import TaskList from '../views/TaskList.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'TaskList',
    component: TaskList
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
