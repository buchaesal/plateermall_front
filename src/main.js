import Vue from 'vue'
import App from './App.vue'
import SemanticUI from 'semantic-ui-vue';
import router from './router';

Vue.use(SemanticUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
