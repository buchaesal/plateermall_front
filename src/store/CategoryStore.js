import CategoryApi from "../api/CategoryApi";

const state = {
    leftCategoryList: [],
    rightCategoryList: [],
    categoryList: [{}],
    categoryInfo: {},
    errorInfo: {},
}

let categoryApi = new CategoryApi();

const mutations = {
    getError(state, error) {
        state.errorInfo = error;
    },
    async getCategory(state, categoryCode) {
        state.categoryInfo = {};
        state.categoryInfo = await categoryApi.getCategoryInfo(categoryCode);
    },
    async getLeftCategoryList(state, categoryCode) {
        state.leftCategoryList = await categoryApi.getCategoryList(categoryCode);
    },
    async getRightCategoryList(state, categoryCode) {
        state.rightCategoryList = await categoryApi.getCategoryList(categoryCode);
    },
    async getCategoryList(state, categoryCode) {
        state.categoryList = [{}];
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
