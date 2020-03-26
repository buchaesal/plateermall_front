import request,{USER_URL} from './axios';


export const login = function (user) {
    return request.post(`http://127.0.0.1:9999/api/user/login`, user)
        .then((response) => {return response.data})
        .catch((err) => console.log(err))
}

export const duplicateCheck = function(user) {
    request.get(USER_URL + `/isduplicate/${user}`)
        .then((response) => {return response.data})
        .catch((err) => console.log(err));
}

export const signUp = function(user) {
    request.post(`http://localhost:9999/api/user/signUp`, user)
        .then((response) => {response.data})
        .catch((err) => console.log(err));
}

export const getUser = function (email) {
    return request.get(`http://localhost:9999/api/user/${email}`)
        .then((response)=>{return response.data})
        .catch((err)=>console.log(err));

}

// export const requestLogin = function (member) {
//     let form = new FormData();
//     member.email = member.email.toLowerCase();
//     form.append('username', member.email);
//     form.append('password', member.password);
//     form.append("grant_type", "password");
//     const requestData = {
//         url: `${process.env.VUE_APP_BASEURL}/oauth/token`,
//         method: "POST",
//         auth: {
//             username: process.env.VUE_APP_CLIENTID,
//             password: process.env.VUE_APP_CLIENTSECRET,
//         },
//         data: form
//     };
//     return axios(requestData);
// }

// export const queryMember = function () {
//     return axios.get(`${process.env.VUE_APP_BASEURL}/api/members`);
// }

class UserApi {

}

export default UserApi;