import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from "../components/share/page/MainPage";
import LoginForm from '../components/my/page/LoginFormPage';
import SignUpPage from '../components/my/page/SignUpPage' ;
import MyPage from '../components/my/page/MyPageIndex';
import GoodsDetailPage from '../components/goods/page/GoodsDetailPage';
import MyCart from "../components/my/page/MyCartPage";

Vue.use(VueRouter);

const routes = [
    {path: '/', component: MainPage},
    {path: '/login', component: LoginForm},
    {path: '/signup', component: SignUpPage},
    {path: '/faq', component: MyPage, props:{selectedComponent : 'FaqContent', userInfo:false}},
    {path: '/inquiryForm', component: MyPage, props:{selectedComponent:'InquiryForm'}},
    {path: '/inquiryAnswer', component: MyPage, props:{selectedComponent:'InquiryAnswer'}},
    {path: '/myreview', component: MyPage, props:{selectedComponent: 'MyReview'}},
    {path: '/goodsDetail/:goodsCode', component: GoodsDetailPage},
    {path: '/cart', component: MyCart},
    {path: '/deliveryanduserinfomanagement' ,component: MyPage, props:{selectedComponent: 'DeliveryAndUserInfoManagementTaps'}},
    {path: '/board' ,component: MyPage, props:{selectedComponent: 'Board'}},
    {path: '/wishlist', component: MyPage, props:{selectedComponent: 'Wishlist'}},
    {path: '/orderList', component: MyPage, props:{selectedComponent: 'OrderList'}},
    {path: '/cancelSearch', component: MyPage, props:{selectedComponent: 'CancelSearch'}},
    {path: '/answer/:postId', component: MyPage, props:{selectedComponent:'InquiryAnswerPost'}},
    {path: '/myPageMain', component: MyPage, props:{selectedComponent:'MyPageMain'}},

]

export default new VueRouter({
    routes,
    scrollBehavior () {
        return { x: 0, y: 0 }
    }
})
