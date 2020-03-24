import GoodsApi from "../api/GoodsApi";
// import GoodsModel from "../components/goods/model/GoodsModel";

const state = {
    goodsModels: [],
    goodsModel: {},
    goodsCount: 0
}

const mutations = {
    async getGoodsModel(state, goodsCode) {
        let goodsApi = new GoodsApi();

        state.goodsModel = await goodsApi.getGoods(goodsCode);
    },
    async getGoodsModelList(state, goodsSet) {
        let goodsApi = new GoodsApi();

        state.goodsModels = await goodsApi.getGoodsList(goodsSet);
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
