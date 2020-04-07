import axios from 'axios';
// import store from "../../store";
// import router from "../../router";

export const COMMENTS_URL = 'http://192.168.0.66:9999/api/comments';
export const GOODS_URL = 'http://192.168.0.65:9999/api/goods';
export const CATEGORY_URL = 'http://192.168.0.65:9999/api/category';
export const CART_URL = 'http://192.168.0.199:9999/api/cart';

export const FAQ_URL = 'http://192.168.0.17:9999/api/faq';
export const ORDER_URL = 'http://192.168.0.228:9999/api/order';
export const PURCHASEHISTORY_URL = process.env.PURCHASEHISTORY_APP_BASE_URL + 'api/purchasehistory';

export const USER_URL =  'http://192.168.0.95:9999/api/user';
export const SHIPPINGSPOT_URL = 'http://192.168.0.95:9999/api/address';
export const WISHLIST_URL = 'http://192.168.0.199:9999/api/wishlist';

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
