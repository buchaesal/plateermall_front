import GoodsApi from "../api/GoodsApi";
// import GoodsModel from "../components/goods/model/GoodsModel";

const state = {
    goodsModels: [],
    goodsModel: {},
    goodsCount: 0
}

const mutations = {
    getGoodsModel(state, goodsCode) {
        let goodsApi = new GoodsApi();

        state.goodsModel = goodsApi.getGoods(goodsCode);
    },
    getCardList(state, goodsSet) {
        let goodsApi = new GoodsApi();

        state.goodsModels = goodsApi.getGoodsList(goodsSet);
        state.goodsModels = goodsApi.getGoodsList();
    },

}

const actions = {

}



export default {
    namespace: false,
    state,
    mutations,
    actions
  };
