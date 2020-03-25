import ShippingSpotListApi from "../api/ShippingSpotListApi"

const state = {
    shippingSpotList: new ShippingSpotListApi().getShippingSpotList(),
    roadAddress: '',
    zipcodeAddress: '',

    newShippingSpotForm: {},
    modifyShippingSPotForm: {},
}

const getters = {

}

const mutations = {
    updateShippingSpotList(state, list){
        state.shippingSpotList = list;
    },
    getShippingSpotListFromApi(state){
        state.shippingSpotList = new ShippingSpotListApi().getShippingSpotList();
        // state.shippingSpotList = ShippingSpotListApi.getShippingSpotList();
    },
    addShippingSpotList(state, shippingSpot) {
        state.shippingSpotList.push(shippingSpot);
    },
    setAddress(state, payload){
        state.roadAddress = payload.roadAddress;
        state.zipcodeAddress = payload.zipcodeAddress;
    },
    cleanAddress(state){
        state.roadAddress = '';
        state.zipcodeAddress = '';
    }
}

const actions = {
    getShippingSpotListFromApi(context){
        context.commit('getShippingSpotListFromApi')
        return new Promise(() => {
            context.commit('getShippingSpotListFromApi');
        })
    },
}

export default {
    namespace: false,
    state,
    getters,
    mutations,
    actions
};