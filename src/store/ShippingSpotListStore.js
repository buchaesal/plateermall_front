import ShippingSpotListApi from "../api/ShippingSpotListApi"

const state = {
    shippingSpotList: []
}

const getters = {

}

const mutations = {
    setShippingSpotList(state){
        state.shippingSpotList = new ShippingSpotListApi().shippingSpotList;
    },
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