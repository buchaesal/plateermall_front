// import GoodsModel from "../components/goods/model/GoodsModel";

const state = {
    goodsModels: [],
    goodsModel: {},
}

const getters = {

}

const mutations = {
    getGoodsModel(state, goodsCode) {
        let goodsApi = new GoodsApi();

        state.goodsModel = goodsApi.getGoods(goodsCode);
    },
    getCardList(state, goodsSet) {
        let goodsApi = new GoodsApi();

        state.goodsModels = goodsApi.getGoodsList(goodsSet);
    },

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

import GoodsApi from "../api/GoodsApi";