import request,{USER_URL} from './axios';


export const login = function (formData) {
    return request.post(`http://localhost:9999/login`, formData, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
        .then((response) => {return response.data})
        .catch((err) => console.log(err))
}

export const duplicateCheck = function(user) {
    request.get(USER_URL + `/isduplicate/${user}`)
        .then((response) => {return response.data})
        .catch((err) => console.log(err));
}

export const signUp = function(user) {
    request.post(USER_URL + '/signup', user)
        .then((response) => {response.data})
        .catch((err) => console.log(err));
}

export const getUser = function (email) {
    return request.get(`http://localhost:9999/api/user/${email}`)
        .then((response)=>{return response.data})
        .catch((err)=>console.log(err));

}

class UserApi {

}

export default UserApi;