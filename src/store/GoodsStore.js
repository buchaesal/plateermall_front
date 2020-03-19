// import GoodsModel from "../components/goods/model/GoodsModel";

const state = {
    goodsModels: [],
    goodsModel: {},
    goodsCount: 0
}

const getters = {

}

const mutations = {
    getGoodsModel(state, goodsCode) {
        let goodsApi = new GoodsApi();
        state.goodsModel = goodsApi.getGoods(goodsCode);
    },
    getCardList(state) {
        let goodsApi = new GoodsApi();
        state.goodsModels = goodsApi.getGoodsList();
    },
    getGoodsList(state){
        state.goodsCount = this.$store.getters.setListLength();
    },
}

export default {
    namespace: false,
    state,
    getters,
    mutations,
  };

import GoodsApi from "../api/GoodsApi";