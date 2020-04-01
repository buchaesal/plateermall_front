import CategoryApi from "../api/CategoryApi";

const state = {
    topCategoryList: [],
    categoryList: [],
    categoryInfo: {},
}

let categoryApi = new CategoryApi();

const mutations = {
    async getCategory(state, categoryCode) {
        state.categoryInfo = await categoryApi.getCategoryInfo(categoryCode);
    },
    async getTopCategoryList(state) {
        state.topCategoryList = await categoryApi.getTopCategoryList();
    },
    async getCategoryList(state, categoryCode) {
        state.categoryList = await categoryApi.getCategoryList(categoryCode);
    },

}

const actions = {}


export default {
    namespace: false,
    state,
    mutations,
    actions
};
