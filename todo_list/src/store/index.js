import Vue from 'vue'
import Vuex from 'vuex'
import modulesTodo from './moduleTodos'
import users from './moduleUser'

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    todos: modulesTodo,
    users: users
  }
});
