import {login, signUp} from "../api/UserApi";
import {setTokenInSessionStorage, deleteTokenInSessionStorage} from "../utils/tokenStorage";
import router from "../router/index";

const state = {
    accessToken: sessionStorage.getItem('access_token'),
    targetPagePath: '/',
    prevPagePath:'/'
};

const getters = {
    isAuthenticated(state) {
        return !!state.accessToken;
    },
};

function resetToken(state) {
    deleteTokenInSessionStorage();
    state.accessToken = null;
}

const mutations = {
    LOGIN(state) {
        state.accessToken = sessionStorage.getItem('access_token');
        router.push(state.targetPagePath);
    },
    LOGOUT(state) {
        resetToken(state);
        router.push('/');
    },
    SET_TARGET_PAGE(state, data){
        state.targetPagePath = data;
    },
    SET_PREV_PAGE(state, data){
        state.prevPagePath = data;
    },
    CHANGE_PAGE_PATH(state){
        state.targetPagePath = state.prevPagePath;
    }
};

const actions = {
    async SIGN_UP(context, user) {
        await signUp(user);
    },
    async REQUEST_LOGIN(context, payload) {
        try {
            let msg = '';
            const result = await login(payload.user);
            if (result === 'noExist') {
                msg = '아이디가 존재하지 않습니다';
            } else if (result === 'incorrect') {
                msg = '패스워드가 올바르지 않습니다.';
            } else if (result === 'failed' || !result) {
                msg = '로그인에 실패했습니다. 아이디와 비밀번호를 다시 확인해주세요.'
            } else {
                if(payload.isSaveId){
                    localStorage.setItem('saveId', payload.user.email);
                }else{
                    localStorage.removeItem('saveId');
                }
                setTokenInSessionStorage(result);
                context.commit('LOGIN');
            }

            return msg;
        } catch (e) {
            alert('Error!');
        }
    }
};


export default {mutations, state, actions, getters};