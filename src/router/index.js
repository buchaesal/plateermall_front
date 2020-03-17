import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from "../components/share/page/MainPage";
import LoginForm from '../components/my/page/LoginFormPage';
import SignUpPage from '../components/my/page/SignUpPage' ;
import MyPage from '../components/my/page/MyPageIndex';


Vue.use(VueRouter);

const routes = [
    {path: '/', component: MainPage},
    {path: '/login', component: LoginForm},
    {path: '/signup', component: SignUpPage},
    {path: '/faq', component: MyPage, props:{selectedComponent : 'FaqContent'}},
    {path: '/myreview', component: MyPage, props:{selectedComponent: 'MyReview'}},
]

export default new VueRouter({
    routes,
})
