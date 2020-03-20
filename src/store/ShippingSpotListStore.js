import ShippingSpotListApi from "../api/ShippingSpotListApi"

const state = {
    shippingSpotList: [],
    isOpenShippingSpotForm: false,
}

const getters = {
    getIsOpenShippingSpotForm(){
        return state.isOpenShippingSpotForm;
    },
    getShippingSpotList() {
        return state.shippingSpotList;
    }
}

const mutations = {
    setShippingSpotList(state){
        state.shippingSpotList = new ShippingSpotListApi().shippingSpotList;
    },
    openShippingSpotForm(state){
        state.isOpenShippingSpotForm = true;
    },
    closeShippingSpotForm(state){
        state.isOpenShippingSpotForm = false;
    },
    setNewShippingSpotList(state, list){
        state.shippingSpotList = list;
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