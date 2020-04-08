import Vue from 'vue';
import App from './App.vue';
import SemanticUI from 'semantic-ui-vue';
import router from './router';
import store from './store';
import VueDaumPostCode from 'vue-daum-postcode';
import BootstrapVue from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(SemanticUI);
Vue.use(VueDaumPostCode);
Vue.config.productionTip = false;

router.beforeEach(function (to, from, next) {
    if (to.matched.some(function (routeInfo) {
        return routeInfo.meta.authRequired;
    })) {
        if (!store.getters.isAuthenticated) {
            // 이동할 페이지에 인증 정보가 필요하면 경고 창을 띄우고 페이지 전환은 하지 않음
            router.push('/login');
        }else {
            next(); // 페이지 전환
        }
    }else{
        next(); // 페이지 전환
    }
});

new Vue({
    router,
    store,
    // vuetify,
    render: h => h(App),
}).$mount('#app')
