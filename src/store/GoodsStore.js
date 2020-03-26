import GoodsApi from "../api/GoodsApi";
// import GoodsModel from "../components/goods/model/GoodsModel";

const state = {
    goodsModelsCol3: [],
    goodsModelsCol4: [],
    goodsModelsCol5: [],
    goodsModel: {},
    goodsCount: 0
}

let goodsApi = new GoodsApi();

const mutations = {
    async goodsModel(state, goodsCode) {
        state.goodsModel = await goodsApi.getGoods(goodsCode);
    },
    async goodsModelListCol3(state, goodsSet) {
        state.goodsModelsCol3 = await goodsApi.getGoodsList(goodsSet.categoryCode, goodsSet.quantity);
    },
    async goodsModelListCol4(state, goodsSet) {
        state.goodsModelsCol4 = await goodsApi.getGoodsList(goodsSet.categoryCode, goodsSet.quantity);
    },
    async goodsModelListCol5(state, goodsSet) {
        state.goodsModelsCol5 = await goodsApi.getGoodsList(goodsSet.categoryCode, goodsSet.quantity);
    },
    async cartGoodsModelList(state, goodsCodeList) {
        state.goodsModels = await goodsApi.getCartGoodsList(goodsCodeList);
    },

}

const actions = {}


export default {
    namespace: false,
    state,
    mutations,
    actions
};
