import {getStateCount} from "../api/OrderApi";



const state = {
    orderCompleteCount: 0,
    paymentCompleteCount: 0,
    shippingReadyCount: 0,
    shippingCount: 0,
    shippingCompleteCount: 0,
}

const getters = {}

const mutations = {
    setNormalOrderStateCounts(state, data){
      state.orderCompleteCount = data.ORDER_COMPLETE;
      state.paymentCompleteCount = data.PAYMENT_COMPLETE;
      state.shippingReadyCount = data.SHIPPING_READY;
      state.shippingCount = data.SHIPPING;
      state.shippingCompleteCount = data.SHIPPING_COMPLETE;
    },
}

const actions = {
    updateOrderCount: async function (context, userData) {
        getStateCount("normal", userData.email)
            .then(data => {
                context.commit('setNormalOrderStateCounts', data);
            });
    }
}

export default {
    namespace: false,
    state,
    getters,
    mutations,
    actions
}