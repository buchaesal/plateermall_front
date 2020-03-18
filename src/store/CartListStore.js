//import cartListApi from '../api/CartListApi'

const state = {
    cartList: [],
    cartListCount: 0,
}

const getters = {

}

const mutations = {
    getCartList(state) {
        //state.cartList = cartListApi.getCartList();
        //state.cartListCount = state.cartList.length;
        state.cartListCount = 3;
    }
}

const actions = {

}

export default {
    namespace: false,
    state,
    getters,
    mutations,
    actions
}