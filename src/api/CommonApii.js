import axios from "axios";
import {router} from "../routes/route";

/*
    모든 요청 전 header에 access_token을 담아 전송한다.
 */
axios.interceptors.request.use(
    config => {
        let accessToken = localStorage.getItem('access_token');
        if (accessToken !== null) {
            config.headers.Authorization = accessToken;
        }
        // console.log('Interceptors Request is', config, new Date());
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
axios.interceptors.response.use(
    response => {
        console.log('Interceptors Response is ', response, new Date());
        if(response.status === 401){
            alert('로그인 유지가 만료되었습니다. 로그아웃됩니다.');
        }

        return response;
    },
    function (error) {
         console.log('Interceptors Response Error is ', error.response, new Date());

        if (!error.response) {
            router.push('/error');
        }

        let status = error.response.status;
        console.log(status, '==>error.response.status');

        return Promise.reject(error);
    }
);


const deleteAccessTokenInHeader = () => {
    axios.defaults.headers.common['Authorization'] = null;
};

export {
    deleteAccessTokenInHeader,
}