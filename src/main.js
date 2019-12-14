import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Vue from 'vue';
import LodashForVue from 'lodash-for-vue';
import App from './App.vue';

Vue.use(LodashForVue);

Vue.config.productionTip = false;

window._ = require('lodash');

new Vue({
  render: (h) => h(App),
}).$mount('#app');
