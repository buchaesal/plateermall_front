import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '../components/share/page/MainPage';
import LoginForm from '../components/my/page/LoginFormPage';
import SignUpPage from '../components/my/page/SignUpPage' ;
import MyPage from '../components/my/page/MyPageIndex';
import GoodsDetailPage from '../components/goods/page/GoodsDetailPage';
import MyCart from '../components/my/page/MyCartPage';
import Error from '../components/share/page/Error';
import OrderCompletePage from '../components/order/page/OrderCompletePage';
import CategoryPage from '../components/category/page/CategoryPage';
import RightCategoryPage from '../components/category/page/RightCategoryPage';
import PageNotFound from '../components/share/page/PageNotFound';
import OrderPage from '../components/order/page/OrderPage';
import SearchResultPage from '../components/search/page/SearchResultPage'

Vue.use(VueRouter);

const routes = [
    {path: '/', component: MainPage},
    {path: '/login', component: LoginForm},
    {path: '/signup', component: SignUpPage},
    {path: '/faq', component: MyPage, props: {selectedComponent: 'FaqContent', userInfo: false}},
    {path: '/inquiryForm', component: MyPage, props: {selectedComponent: 'InquiryForm'}, meta: {authRequired: true}},
    {
        path: '/inquiryAnswer',
        component: MyPage,
        props: {selectedComponent: 'InquiryAnswer'},
        meta: {authRequired: true}
    },
    {path: '/myreview', component: MyPage, props: {selectedComponent: 'MyReview'}, meta: {authRequired: true}},
    {path: '/goodsDetail/:goodsCode', component: GoodsDetailPage},
    {path: '/cart', component: MyCart, meta: {authRequired: true}},
    {
        path: '/deliveryanduserinfomanagement',
        component: MyPage,
        props: {selectedComponent: 'DeliveryAndUserInfoManagementTaps'},
        meta: {authRequired: true}
    },
    {path: '/board', component: MyPage, props: {selectedComponent: 'Board'}, meta: {authRequired: true}},
    {path: '/wishlist', component: MyPage, props: {selectedComponent: 'Wishlist'}, meta: {authRequired: true}},
    {path: '/orderList', component: MyPage, props: {selectedComponent: 'OrderList'}, meta: {authRequired: true}},
    {path: '/cancelSearch', component: MyPage, props: {selectedComponent: 'CancelSearch'}, meta: {authRequired: true}},
    {
        path: '/answer/:postId',
        component: MyPage,
        props: {selectedComponent: 'InquiryAnswerPost'},
        meta: {authRequired: true}
    },
    {path: '/myPageMain', component: MyPage, props: {selectedComponent: 'MyPageMain'}, meta: {authRequired: true}},
    {path: '/error', component: Error},
    {path: '/category/:categoryCode', component: CategoryPage},
    {path: '/order/ordercomplete', name: 'ordercomplete', component: OrderCompletePage, props: true},
    {path: '/order', name:'order', component: OrderPage},
    {path: '/rightcategory/:categoryCode', component: RightCategoryPage},
    {path: '/search/searchResult', name: 'searchResult', component: SearchResultPage },
    {path: '/404', component: PageNotFound},
    {path: '*', redirect: '/404'},
    {
        path: '/order/orderDetail',
        component: MyPage,
        props: {selectedComponent: 'OrderDetail'},
        meta: {authRequired: true}
    }
]

export default new VueRouter({
    routes,
    scrollBehavior() {
        return {x: 0, y: 0}
    }
})
