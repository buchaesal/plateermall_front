import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from "../components/share/page/MainPage";
import LoginForm from '../components/my/page/LoginFormPage';
import SignUpPage from '../components/my/page/SignUpPage' ;
import MyPage from '../components/my/page/MyPageIndex';
import GoodsDetail from '../components/goods/GoodsDetail';
import MyCart from "../components/my/page/MyCartPage";


Vue.use(VueRouter);

const routes = [
    {path: '/', component: MainPage},
    {path: '/login', component: LoginForm},
    {path: '/signup', component: SignUpPage},
    {path: '/faq', component: MyPage, props:{selectedComponent : 'FaqCategoryList'}},
    {path: '/inquiryForm', component: MyPage, props:{selectedComponent:'InquiryForm'}},
    {path: '/myreview', component: MyPage, props:{selectedComponent: 'MyReview'}},
    {path: '/goodsDetail/:goodsCode', component: GoodsDetail},
    {path: '/cart', component: MyCart},
    {path: '/deliveryanduserinfomanagement' ,component: MyPage, props:{selectedComponent: 'DeliveryAndUserInfoManagementTaps'}}
]

export default new VueRouter({
    routes,
    scrollBehavior () {
        return { x: 0, y: 0 }
    }
})
