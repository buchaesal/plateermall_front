import ShippingSpotListApi from "../api/ShippingSpotListApi"

const state = {
    shippingSpotList: [],
    isOpenShippingSpotForm: false,
}

const getters = {

}

const mutations = {
    setDefaultShippingSpotList(state){
        state.shippingSpotList = new ShippingSpotListApi().shippingSpotList;
    },
    setNewShippingSpotList(state, list){
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