import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from "../components/share/page/MainPage";
import LoginForm from '../components/my/page/LoginForm';
import MyPage from '../components/my/page/MyPageIndex';

Vue.use(VueRouter);

const routes = [
    {path: '/', component: MainPage},
    {path: '/login', component: LoginForm},
    {path: '/faq', component: MyPage, props:{selectedComponent : 'FaqContent'}}
]

export default new VueRouter({
    routes,
})
