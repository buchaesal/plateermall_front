import {login} from "../api/UserApi";
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
    async REQUEST_LOGIN(context, user) {
        try {
            const token = await login(user);
            console.log(token,'토큰');
            setTokenInLocalStorage(token);
            context.commit('LOGIN');
            return token;
        } catch (e) {
            alert('아이디 혹은 비밀번호를 확인해주세요.');
        }
    },
};



export default {mutations, state, actions, getters};