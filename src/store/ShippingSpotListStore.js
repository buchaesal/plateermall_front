// import ShippingSpotListApi from "../api/ShippingSpotListApi"
import {
    addDeliveryAddress,
    getShippingSpotList,
    deleteDeliveryAddress,
    setDefaultAddress,
    modifyAddress
} from "../api/ShippingSpotListApi";

const state = {
    shippingSpotList: [],
    roadAddress: '',
    zipcodeAddress: '',
    newShippingSpotForm: {},
    modifyShippingSPotForm: {},
    selectedDefaultId: null,
    defaultAddress: {},
}

const getters = {}

const mutations = {
    updateShippingSpotList(state, list) {
        state.shippingSpotList = list;
    },
    getShippingSpotListFromApi(state, list) {
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
    },
    setDefaultId(state, defaultAddress) {
        state.selectedDefaultId = defaultAddress.id + '';
    }
}

const actions = {
    async ADDRESS_LIST(context) {
        await getShippingSpotList()
            .then((response) => {
                    let addressList = response.data;
                    let defalutAddress = addressList.filter((item) => {
                        return item.isDefault === 1;
                    })[0];
                    if (defalutAddress) {
                        context.commit('setDefaultId', defalutAddress);
                    }
                    context.commit('getShippingSpotListFromApi', addressList);
                }
            ).catch(function (error) {
                console.log(error);
            });
    },
    async addShippingSpotListFromApi(context, address) {
        await addDeliveryAddress(address)
            .then(() => {
                context.dispatch('ADDRESS_LIST');
            })
            .catch(function (err) {
                console.log(err);
            });
    },
    async deleteShippingSpot(context, id) {
        await deleteDeliveryAddress(id)
            .then(() => {
                context.dispatch('ADDRESS_LIST');
            });
    },
    async setDefaultShippingSpot(context, id) {
        let target = id?id:context.state.selectedDefaultId;

        await setDefaultAddress(target)
            .then(() => {
                context.dispatch('ADDRESS_LIST');
            });
    }
    ,
    async MODIFY_ADDRESS(context, address) {
        await modifyAddress(address)
            .then(() => {
                context.dispatch('ADDRESS_LIST');
            });
    },
}

export default {
    namespace: false,
    state,
    getters,
    mutations,
    actions
};