// import ShippingSpotListApi from "../api/ShippingSpotListApi"
import {addDeliveryAddress, getShippingSpotList} from "../api/ShippingSpotListApi";

const state = {
    shippingSpotList: [],
    roadAddress: '',
    zipcodeAddress: '',

    newShippingSpotForm: {},
    modifyShippingSPotForm: {},
}

const getters = {}

const mutations = {
    updateShippingSpotList(state, list) {
        state.shippingSpotList = list;
    },
    getShippingSpotListFromApi(state, list) {
        //state.shippingSpotList = new ShippingSpotListApi().getShippingSpotList();
        state.shippingSpotList = list;
    },
    addShippingSpotList(state, shippingSpot) {
        state.shippingSpotList.push(shippingSpot);
    },
    setAddress(state, payload) {
        state.roadAddress = payload.roadAddress;
        state.zipcodeAddress = payload.zipcodeAddress;
    },
    cleanAddress(state) {
        state.roadAddress = '';
        state.zipcodeAddress = '';
    }
}

const actions = {
    async getShippingSpotListFromApi(context) {
        let list = await getShippingSpotList()
            .then((response) => {
                    context.commit('getShippingSpotListFromApi', response.data);
                    return response.data
                }
            ).catch(function (error) {
                console.log(error);
            });

        console.log(list);
        return list;
    },
    async addShippingSpotListFromApi(context, address) {
        await addDeliveryAddress(address);
        context.commit('addShippingSpotList', address);
    }
}

export default {
    namespace: false,
    state,
    getters,
    mutations,
    actions
};