// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {Button,Icon,Input,Layout,Menu,List,Card,Checkbox,Col,Row,Avatar} from 'ant-design-vue'

Vue.config.productionTip = false
Vue.use(Button);
Vue.use(Icon);
Vue.use(Input);
Vue.use(Layout);
Vue.use(Menu);
Vue.use(List);
Vue.use(Card);
Vue.use(Checkbox);
Vue.use(Col);
Vue.use(Row);
Vue.use(Avatar);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});
