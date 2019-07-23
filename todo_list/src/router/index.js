import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '../components/TodoList'
import Main from '../components/Main'
import Home from '../components/Home'

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
      component: Home,
      children: [
        {
          path: 'todos',
          component: TodoList
        }, {
          path: 'profile',
          component: TodoList
        }
      ]
    }
  ]
})
