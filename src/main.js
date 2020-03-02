import Vue from 'vue';
import './plugins/bootstrap-vue';
import { BootstrapVue } from 'bootstrap-vue';
import VeeValidate from 'vee-validate';
import App from './App.vue';


Vue.use(VeeValidate, {
  fieldsBagName: 'vvFields',
});

Vue.use(VeeValidate);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
