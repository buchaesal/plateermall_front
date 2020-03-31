import request,{USER_URL} from './axios';


export const login = function (user) {
    return request.post('http://localhost:9999/api/user/login', user)
        .then((response) => {return response.data})
        .catch((err) => console.log(err))
}

export const duplicateCheck = function(user) {
    request.get(USER_URL + `/isduplicate/${user}`)
        .then((response) => {return response.data})
        .catch((err) => console.log(err));
}

export const signUp = function(user) {
    request.post('http://localhost:9999/api/user/signUp', user)
        .then((response) => {response.data})
        .catch((err) => console.log(err));
}

export const getUser = function (email) {
    return request.get(USER_URL+`/${email}`)
        .then((response)=>{return response.data})
        .catch((err)=>console.log(err));

}

export const getCurrentUserInfo = function () {
    return request.get('http://localhost:9999/api/user/getCurrentUserInfo')
        .then((response) => {return response.data})
        .catch((error)=>console.log(error));
}

class UserApi {

}

export default UserApi;