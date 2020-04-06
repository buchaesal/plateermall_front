import request, {USER_URL} from './axios';
import store from '../store';


export const login = function (user) {
    return request.post(USER_URL + '/login', user)
        .then((response) => {
            return response.data
        })
        .catch((err) => console.log(err))
}

export const duplicateCheck = function (email) {
    return request.get(USER_URL + `/duplicateCheck/${email}`)
        .then((response) => {
            return response.data
        })
        .catch((err) => console.log(err));
}

export const signUp = function (user) {
    request.post(USER_URL + '/signUp', user)
        .then((response) => {
            response.data
        })
        .catch((err) => console.log(err));
}

export const getCurrentUserInfo = function () {
    return request.get(USER_URL + '/getCurrentUserInfo')
        .then((response) => {
             if (response.data) {
                return response.data;
            } else {
                alert('로그인이 만료되었습니다. 로그아웃 됩니다.');
                store.commit('LOGOUT');
             }
        })
        .catch((error) => console.log(error));

}

export const modifyUser = function (user) {
    return request.put(USER_URL + '/updateUserInfo', user)

}

class UserApi {

}

export default UserApi;