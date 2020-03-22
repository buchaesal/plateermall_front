import WishListApi from "../api/WishListApi"

const state = {
    wishList: [],
}

const getters = {

}

const mutations = {
    getWishListFromApi(state){
        let wishListApi = new WishListApi();
        // console.log('WishListApi' + wishListApi)
        state.wishList = wishListApi.getWishList();
        // console.log('WishListStore' + state.wishList);
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