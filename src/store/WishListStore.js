import WishListApi from "../api/WishListApi"

const state = {
    wishListGoodsCodes: [],
}

const getters = {

}

const mutations = {
    getWishListFromApi(state){
        let wishListApi = new WishListApi();
        state.wishListGoodsCodes = wishListApi.getWishListGoodsCodes();
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
};