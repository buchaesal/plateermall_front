import {login, signUp} from "../api/UserApi";
import {deleteTokenInLocalStorage, setTokenInLocalStorage} from "../utils/oauth";
//import {deleteAccessTokenInHeader, setSnackBarInfo} from "../api/common_api";
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
    //deleteAccessTokenInHeader();
    state.accessToken = null;
}

const mutations = {
    LOGIN(state) {
        state.accessToken = localStorage.getItem('access_token');
        router.push('/');
    },
    LOGOUT(state) {
        resetToken(state);
        //this.commit('SET_SNACKBAR', setSnackBarInfo('로그아웃 완료', 'success', 'top'));

    },
    LOGOUT_WITH_TOKEN_INVALIDE(state) {
        resetToken(state);
        if (router.currentRoute.name !== 'boards') {
            router.push('/');
        }
    }
};

const actions = {
    async SIGN_UP(context, user){
        await signUp(user);
    },
    async REQUEST_LOGIN(context, user) {
        try {
            let msg = '';
            const result = await login(user);
            if(result === 'noExist'){
                msg = '아이디가 존재하지 않습니다';
            }else if(result === 'incorrect'){
                msg = '패스워드가 올바르지 않습니다.';
            }else{
                setTokenInLocalStorage(result);
                context.commit('LOGIN');
            }
            return msg;
        } catch (e) {
            alert('Error!');
        }
    },
};



export default {mutations, state, actions, getters};