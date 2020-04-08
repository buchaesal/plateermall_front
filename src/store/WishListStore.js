import {getCurrentUserInfo} from "../api/UserApi";

const state = {
    userInfo: {}
}

const getters = {

}

const mutations = {
    getLoginUserInfo(state, userInfo) {
        state.userInfo = userInfo;
    }
}

const actions = {
    async getLoginUserInfo(context) {
        let userInfo = await getCurrentUserInfo();

        context.commit('getLoginUserInfo', userInfo);
    }
}

export default {
    namespace: false,
    state,
    getters,
    mutations,
    actions
};