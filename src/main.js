import Vue from 'vue';
import App from './App.vue';
// import Vuetify from "vuetify";
// import 'vuetify/dist/vuetify.min.css';
import SemanticUI from 'semantic-ui-vue';
import router from './router';
import store from './store';

Vue.use(SemanticUI);
// Vue.use(Vuetify);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
