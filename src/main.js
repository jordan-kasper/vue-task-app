import Vue from 'vue';
import './plugins/bootstrap-vue';
import { BootstrapVue } from 'bootstrap-vue';
import App from './App.vue';

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
