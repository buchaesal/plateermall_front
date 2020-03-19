import axios from 'axios';

export const GOODS_URL = process.env.VUE_APP_BASE_URL + '/api/goods';
export const COMMENTS_URL = process.env.COMMENTS_APP_BASE_URL + '/api/comments';
export const FAQ_URL = process.env.VUE_APP_BASE_URL+'/api/faq';


const instance = axios.create({
    withCredentials: true
});

export default instance;
