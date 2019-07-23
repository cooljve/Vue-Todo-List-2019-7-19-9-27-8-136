// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

Vue.use(Vuex);
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    allList: [],
    currIndex: 0,
    buttonGroup: [{
      type: 'All',
      filters(items) {
        return items;
      }
    }, {
      type: 'Active',
      filters(items) {
        return items.filter(item => item.status == 0);
      }
    }, {
      type: 'Complete',
      filters(items) {
        return items.filter(item => item.status == 1);
      }
    }],
  },
  getters:{
    list:state=>{
      return state.buttonGroup[state.currIndex].filters(state.allList);
    }
  },
  mutations: {
    addItem(state, item) {
      state.allList.push(item);
    },
    changeButton(state, index) {
      state.currIndex = index;
    },
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});
