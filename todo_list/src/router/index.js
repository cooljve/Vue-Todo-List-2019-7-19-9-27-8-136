import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '../components/TodoList'
import Main from '../components/Main'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    }
  ]
})
