import CancelExchangeReturnApi from '../../src/api/CancelExchangeReturnApi';

const state = {
    cancelInfo:{},
}

const getters = {

}

//state를 바꿀 때
const mutations = {
    
    loadCancelGoodsInfo(state, userId){

        console.log(userId);
        let cancelExchangeReturnApi = new CancelExchangeReturnApi();
        state.cancelInfo = cancelExchangeReturnApi.getCancelInfo(userId);
    },
    
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
