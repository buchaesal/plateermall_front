import request,{USER_URL} from './axios';


export const login = function (user) {
    return request.post(USER_URL+'/login', user)
        .then((response) => {return response.data})
        .catch((err) => console.log(err))
}

export const duplicateCheck = function(user) {
    request.get(USER_URL + `/isduplicate/${user}`)
        .then((response) => {return response.data})
        .catch((err) => console.log(err));
}

export const signUp = function(user) {
    request.post(USER_URL+'/signUp', user)
        .then((response) => {response.data})
        .catch((err) => console.log(err));
}

export const getUser = function (email) {
    return request.get(USER_URL+`/${email}`)
        .then((response)=>{return response.data})
        .catch((err)=>console.log(err));

}

export const getUserInfo = function(email){
    return request.get(USER_URL+`/getuserinfo/${email}`)
        .then((response)=> {response.data})
        .catch((err)=> console.log(err));
}

class UserApi {

}

export default UserApi;