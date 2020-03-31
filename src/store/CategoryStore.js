import CategoryApi from "../api/CategoryApi";

const state = {
    topCategoryList: [],
    categoryList: [],
    category: {},
}

let categoryApi = new CategoryApi();

const mutations = {
    async getCategory(state, categoryCode) {
        state.category = await categoryApi.getCategory(categoryCode);
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
