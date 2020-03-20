import ShippingSpotListApi from "../api/ShippingSpotListApi"

const state = {
    shippingSpotList: [],
}

const getters = {

}

const mutations = {
    updateShippingSpotList(state, list){
        state.shippingSpotList = list;
    },
    getShippingSpotListFromApi(state){
        state.shippingSpotList = new ShippingSpotListApi().getShippingSpotList();
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