import axios from 'axios';

export const GOODS_URL = process.env.VUE_APP_BASE_URL + '/api/goods';

const instance = axios.create({
    withCredentials: true
});

export default instance;
