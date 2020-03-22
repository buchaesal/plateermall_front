import CancelExchangeReturnApi from '../../src/api/CancelExchangeReturnApi';

const state = {
    cancelInfo:{},
    exchangeInfo:{},
    returnInfo:{},
}

const getters = {

}

//state를 바꿀 때
const mutations = {

    loadCancelGoodsInfo(state, userId){

        let cancelExchangeReturnApi = new CancelExchangeReturnApi();
        state.cancelInfo = cancelExchangeReturnApi.getCancelInfo(userId);
    },

    loadExchangeGoodsInfo(state, userId){

        let cancelExchangeReturnApi = new CancelExchangeReturnApi();
        state.exchangeInfo = cancelExchangeReturnApi.getExchangeInfo(userId);

    },

    loadReturnGoodsInfo(state, userId){

        let cancelExchangeReturnApi = new CancelExchangeReturnApi();
        state.returnInfo = cancelExchangeReturnApi.getReturnInfo(userId);
    }
    
}

//비동기 통신
const actions = {
    
}

export default {
    namespace: false,
    state,
    getters,
    mutations,
    actions
  };
