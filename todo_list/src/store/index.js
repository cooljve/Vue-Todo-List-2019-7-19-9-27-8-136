import Vue from 'vue'
import Vuex from 'vuex'
import modulesTodo from './moduleTodos'

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    todos: modulesTodo
  }
});
