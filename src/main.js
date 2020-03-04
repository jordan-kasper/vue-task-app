import Vue from 'vue';
import './plugins/bootstrap-vue';
import { BootstrapVue } from 'bootstrap-vue';
import { ValidationObserver, ValidationProvider } from 'vee-validate';

import * as VeeValidate from 'vee-validate';

import App from './App.vue';


Vue.use(VeeValidate, {
  fieldsBagName: 'vvFields',
});

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

Vue.use(VeeValidate);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
