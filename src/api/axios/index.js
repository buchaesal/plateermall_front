import axios from 'axios';
// import store from "../../store";
// import router from "../../router";

export const COMMENTS_URL = 'https://shoppingmall-comment.herokuapp.com/api/comments';
export const GOODS_URL = 'https://shoppingmall-goods.herokuapp.com/api/goods';
export const CATEGORY_URL = 'https://shoppingmall-goods.herokuapp.com/api/category';
export const CART_URL = 'https://shoppingmall-cart-wishlist.herokuapp.com/api/cart';

export const FAQ_URL = 'https://shoppingmall-board.herokuapp.com/api/faq';
export const ORDER_URL = 'https://shoppingmall-order.herokuapp.com/api/order';

export const USER_URL =  'https://shoppingmall-auth.herokuapp.com/api/user';
export const SHIPPINGSPOT_URL = 'https://shoppingmall-auth.herokuapp.com/api/address';
export const WISHLIST_URL = 'https://shoppingmall-cart-wishlist.herokuapp.com/api/wishlist';

const instance = axios.create({
    withCredentials: true
});

/*
    모든 요청 전 header에 access_token을 담아 전송한다.
 */

instance.interceptors.request.use(
    config => {
        let accessToken = sessionStorage.getItem('access_token');
        if (accessToken !== null) {
            config.headers.Authorization = accessToken;
        }
        // console.log('Interceptors Request is', config);
        return config
    },
    error => {
        // console.log('Interceptors Request Error is', error.response, new Date());
        return Promise.reject(error);
    }
);


/*
    만료된 access_token으로 요청시 Access token exprited가 발생하면 refresh 토큰으로 새로운 토큰을 받는다.
 */
// instance.interceptors.response.use(
//     response => {
//         if(response.config.headers.Authorization){
//             console.log(response.config.headers.Authorization,'api에서 response에 토큰을 담아서 넘겨줬다.')
//             sessionStorage.clear();
//             sessionStorage.setItem("access_token", 'Bearer ' + response.config.headers.Authorization);
//         }
//
//         return response;
//     },
//     // function (error) {
//     //     console.log('Interceptors Response Error is ', error);
//     //     alert('로그인 유지가 만료되었습니다. 로그아웃됩니다.');
//     //     store.commit('LOGOUT');
//     //     router.push('/');
//     //
//     //     return Promise.reject(error);
//     // }
// );

export default instance;
