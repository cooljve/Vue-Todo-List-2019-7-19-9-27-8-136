import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '../components/TodoList'
import Main from '../views/Main'
import Home from '../views/Home'
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
