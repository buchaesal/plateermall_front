import Vue from 'vue'
import App from './App.vue'
import SemanticUI from 'semantic-ui-vue';
import router from './router';
import store from './store';
import VueDaumPostCode from 'vue-daum-postcode';

Vue.use(SemanticUI);
Vue.use(VueDaumPostCode);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
