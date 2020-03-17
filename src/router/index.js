import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from "../components/share/page/MainPage";
import LoginForm from '../components/my/page/LoginForm';
import MyPage from '../components/my/page/MyPageIndex';
import SignUp from "../components/my/page/SignUp";

Vue.use(VueRouter);

const routes = [
    {path: '/', component: MainPage},
    {path: '/login', component: LoginForm},
    {path: '/faq', component: MyPage, props:{selectedComponent : 'FaqContent'}},
    {path: '/myreview', component: MyPage, props:{selectedComponent: 'MyReview'}},
    {path: '/signup', component: SignUp},
]

export default new VueRouter({
    routes,
})
