import {login, signUp} from "../api/UserApi";
import {setTokenInLocalStorage, deleteTokenInLocalStorage} from "../utils/tokenStorage";
import router from "../router/index";

const state = {
    accessToken: localStorage.getItem('access_token'),
};

const getters = {
    isAuthenticated(state) {
        return !!state.accessToken;
    },
};

function resetToken(state) {
    deleteTokenInLocalStorage();
    state.accessToken = null;
}

const mutations = {
    LOGIN(state) {
        state.accessToken = localStorage.getItem('access_token');
        router.push('/');
    },
    LOGOUT(state) {
        resetToken(state);
    }
};

const actions = {
    async SIGN_UP(context, user) {
        await signUp(user);
    },
    async REQUEST_LOGIN(context, user) {
        try {
            let msg = '';
            const result = await login(user);
            setTokenInLocalStorage(result);
            if(result === 'noExist'){
                msg = '아이디가 존재하지 않습니다';
            }else if(result === 'incorrect'){
                msg = '패스워드가 올바르지 않습니다.';
            }else{
                context.commit('LOGIN');
            }
            return msg;
        } catch (e) {
            alert('Error!');
        }
    },
};


export default {mutations, state, actions, getters};