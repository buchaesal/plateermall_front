import CartListApi from '../api/CartListApi'

const state = {
    cartList: [],
}

const getters = {

}

const mutations = {
    getCartList(state) {
        const cartListApi = new CartListApi();

        state.cartList = cartListApi.getCartList();
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