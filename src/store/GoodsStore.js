const state = {
    goodsModels: [],
    goodsCount: 0
}

const getters = {

}

const mutations = {
    getGoodsList(state){
        state.goodsCount = 3;
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