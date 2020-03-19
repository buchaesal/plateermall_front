import axios from 'axios';

export const GOODS_URL = process.env.VUE_APP_BASE_URL + '/api/goods';
export const COMMENTS_URL = process.env.COMMENTS_APP_BASE_URL + '/api/comments';
export const CART_URL = process.env.CART_APP_BASE_URL + '/api/cart';


const instance = axios.create({
    withCredentials: true
});

export default instance;
