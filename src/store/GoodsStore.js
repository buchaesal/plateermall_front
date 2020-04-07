import GoodsApi from "../api/GoodsApi";
import GoodsModel from "../components/goods/model/GoodsModel";

const state = {
    goodsModelsCol3: [],
    goodsModelsCol4: [],
    goodsModelsCol5: [],
    goodsModel: {GoodsModel},
    categoryGoodsModels: [{GoodsModel}],
    searchResultGoodsModels: [{GoodsModel}],
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
    async getCategoryGoodsModelList(state, categoryGoodsSet) {
        state.categoryGoodsModels = [{GoodsModel}];
        state.categoryGoodsModels = await goodsApi.getCategoryGoodsList(categoryGoodsSet.categoryCode, categoryGoodsSet.sort);
    },
    async getSearchResultList(state, query) {
        state.searchResultGoodsModels = [{GoodsModel}];
        state.searchResultGoodsModels = await goodsApi.getSearchResultGoodsList(query.query, query.sort, query.categoryCode);
    },

}

const actions = {}


export default {
    namespace: false,
    state,
    mutations,
    actions
};
