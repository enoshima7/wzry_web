import Vue from 'vue'
import VueRouter from 'vue-router'
import CategoryEdit from './components/views/CategoryEdit'
import CategoryList from './components/views/CategoryList'

Vue.use(VueRouter)

const routes = [
  { path: '/categoryEdit', component: CategoryEdit },
  { path: '/categoryList', component: CategoryList }
]

const router = new VueRouter({
  routes
})

export default router