import Vue from 'vue';
import App from './App.vue';
import SemanticUI from 'semantic-ui-vue';
import router from './router';
import store from './store';
import VueDaumPostCode from 'vue-daum-postcode';
// import vuetify from './plugin/vuetify' // path to vuetify export

Vue.use(SemanticUI);
Vue.use(VueDaumPostCode);

Vue.config.productionTip = false;

router.beforeEach(function (to, from, next) {
    if (to.matched.some(function (routeInfo) {
        return routeInfo.meta.authRequired;
    })) {
        if (!store.getters.isAuthenticated) {
            // 이동할 페이지에 인증 정보가 필요하면 경고 창을 띄우고 페이지 전환은 하지 않음
            alert('로그인 해주세요.');
            router.push('/');
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
