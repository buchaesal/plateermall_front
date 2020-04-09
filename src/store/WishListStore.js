import WishListApi from "../api/WishListApi";

const state = {
    wishList: [],
}

const getters = {

}

const mutations = {
    getWishList(state, wishList) {
        state.wishList = wishList;
    }
}

const actions = {
    async getWishList(context, userId) {
        let wishListApi = new WishListApi();
        let wishList = await wishListApi.getWishListGoodsCodes(userId);

        context.commit('getWishList', wishList);
    },
}

export default {
    namespace: false,
    state,
    getters,
    mutations,
    actions
};