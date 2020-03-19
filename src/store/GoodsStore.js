// import GoodsModel from "../components/goods/model/GoodsModel";

const state = {
    goodsModels: [],
    goodsModel: {},
    goodsCount: 0
}

const getters = {

}

const mutations = {
    getGoodsModel(state) {
        var goodsApi = new GoodsApi();
        state.goodsModel = goodsApi.getGoods();
    },
    getCardList(state) {
        var goodsApi = new GoodsApi();
        state.goodsModels = goodsApi.getGoodsList();
    },



    getGoodsList(state){
        state.goodsCount = 3;
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