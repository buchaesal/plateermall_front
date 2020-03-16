import Vue from 'vue'
import App from './App.vue'
import SemanticUI from 'semantic-ui-vue';
// import 'semantic-ui-css/semantic.min.css';
// import '../semantic/dist/semantic.min.css';

Vue.use(SemanticUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
