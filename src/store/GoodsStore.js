// import GoodsModel from "../components/goods/model/GoodsModel";

const state = {
    goodsModels: [],
    goodsCount: 0
}

const getters = {

}

const mutations = {
    getGoodsList(state){
        state.goodsCount = 3;
    },
    getCardList(state) {
        return state.goodsModels;
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