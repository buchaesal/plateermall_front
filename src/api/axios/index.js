import axios from 'axios';

export const GOODS_URL = process.env.GOODS_APP_BASE_URL + '/api/goods';
export const COMMENTS_URL = process.env.COMMENTS_APP_BASE_URL + '/api/comments';
export const CART_URL = process.env.CART_APP_BASE_URL + '/api/cart';

export const FAQ_URL = process.env.VUE_APP_BASE_URL+'/api/faq';
export const ORDER_URL = process.env.VUE_APP_BASE_URL+'/api/order';

export const USER_URL = process.env.VUE_APP_BASE_URL+'/api/user';


const instance = axios.create({
    withCredentials: true
});

export default instance;
