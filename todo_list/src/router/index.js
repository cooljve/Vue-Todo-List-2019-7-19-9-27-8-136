import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '../components/TodoList'
import Main from '../components/Main'
import Home from '../components/Home'
import Profile from '../components/Profile'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/home',
      redirect: '/home/todos',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'todos',
          name: 'todos',
          component: TodoList
        }, {
          path: 'profile',
          name: 'profile',
          component: Profile
        }
      ]
    }
  ]
})
