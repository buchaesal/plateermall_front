import CategoryApi from "../api/CategoryApi";

const state = {
    topCategoryList: [],
    categoryList: [],
    categoryInfo: {
        "uuid": null,
        "name": null,
        "categoryCode": null,
        "parentsCode": null,
        "goodsList": null
    },
    errorInfo: {},
}

let categoryApi = new CategoryApi();

const mutations = {
    getError(state, error) {
        state.errorInfo = error;
    },
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
