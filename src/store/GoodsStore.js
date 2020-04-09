import GoodsApi from "../api/GoodsApi";
import GoodsModel from "../components/goods/model/GoodsModel";

const state = {
    goodsModelsCol3: [],
    goodsModelsCol4: [],
    goodsModelsCol5: [],
    goodsModel: {GoodsModel},
    pageGoodsModels: [{}],
    goodsCount: 0
}

let goodsApi = new GoodsApi();

const mutations = {
    async getGoodsModel(state, goodsCode) {
        state.categoryGoodsModels = {GoodsModel};
        state.goodsModel = await goodsApi.getGoods(goodsCode);
    },
    async getGoodsModelListCol3(state, goodsSet) {
        state.goodsModelsCol3 = await goodsApi.getGoodsList(goodsSet.categoryCode, goodsSet.quantity);
    },
    async getGoodsModelListCol4(state, goodsSet) {
        state.goodsModelsCol4 = await goodsApi.getGoodsList(goodsSet.categoryCode, goodsSet.quantity);
    },
    async getGoodsModelListCol5(state, goodsSet) {
        state.goodsModelsCol5 = await goodsApi.getGoodsList(goodsSet.categoryCode, goodsSet.quantity);
    },
    async getCartGoodsModelList(state, goodsCodeList) {
        state.goodsModels = await goodsApi.getCartGoodsList(goodsCodeList);
    },
    async getPageGoodsModelList(state, query) {
        state.pageGoodsModels = [{}];
        state.pageGoodsModels = await goodsApi.getPageGoodsList(query);
    },
}

const actions = {}


export default {
    namespace: false,
    state,
    mutations,
    actions
};
