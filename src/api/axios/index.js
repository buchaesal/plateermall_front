import axios from 'axios';

export const COMMENTS_URL = 'http://localhost:9999/api/comments';
export const GOODS_URL_TEST= 'http://localhost:9999/api/goods';

export const CART_URL = 'http://localhost:8081/api/cart';

export const FAQ_URL = process.env.VUE_APP_BASE_URL+'/api/faq';
export const ORDER_URL = 'http://localhost:9999/api/order';
export const PURCHASEHISTORY_URL = process.env.PURCHASEHISTORY_APP_BASE_URL+'api/purchasehistory';

export const USER_URL = process.env.VUE_APP_BASE_URL+'/api/user';
export const SHIPPINGSPOT_URL = process.env.VUE_APP_BASE_URL+'/api/shippingspot';


const instance = axios.create({
    withCredentials: true
});

export default instance;
