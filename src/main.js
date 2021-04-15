import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import AppHeader from '@/components/AppHeader.vue';
import AppInput from '@/components/inputs/AppInput.vue';
import './config/FontAwesomeConfig';
import './config/MomentConfig';
import './config/BuefyConfig';

import Cleave from '@/directives/Cleave';

Vue.use(Cleave);
Vue.config.productionTip = false
Vue.component('app-header', AppHeader);
Vue.component('app-input', AppInput);
import VueMask from 'v-mask'
Vue.use(VueMask);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
