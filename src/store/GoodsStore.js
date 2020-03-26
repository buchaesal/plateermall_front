import GoodsApi from "../api/GoodsApi";
// import GoodsModel from "../components/goods/model/GoodsModel";

const state = {
    goodsModels: [],
    goodsModel: {},
    goodsCount: 0
}

let goodsApi = new GoodsApi();

const mutations = {
    async getGoodsModel(state, goodsCode) {
        state.goodsModel = await goodsApi.getGoods(goodsCode);
    },
    async getGoodsModelList(state, goodsSet) {
        localStorage.setItem('categoryCode', goodsSet.categoryCode);
        localStorage.setItem('quantity', goodsSet.quantity);
        state.goodsModels = await goodsApi.getGoodsList(this.categoryCode, this.quantity);
    },
    async getCartGoodsModelList(state, goodsCodeList) {
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
