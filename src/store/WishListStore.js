import WishListApi from "../api/WishListApi"

const state = {
    wishList: [],
}

const getters = {

}

const mutations = {
    getWishListFromApi(state){
        const wishListApi = new WishListApi();
        state.wishList = wishListApi.getWishList();
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