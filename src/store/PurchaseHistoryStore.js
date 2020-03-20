import PurchaseHistoryApi from '../../src/api/PurchaseHistoryApi';

const state = {
    unwrittenReviewsInfo:{},
}

const getters = {

}

//state를 바꿀 때
const mutations = {

    loadUnwrittenCommentsByUserId(state, userId){

        let purchaseHistoryApi = new PurchaseHistoryApi();
        state.unwrittenReviewsInfo = purchaseHistoryApi.getUnwrittenReviewsInfo(userId);
    },

    loadSelectedUnwrittenComment(state, reviewCode){

        let purchaseHistoryApi = new PurchaseHistoryApi();
        state.selectedUnwrittenReview = purchaseHistoryApi.getSeletedUnwrittenReview(reviewCode);
    },
}

//비동기 통신
const actions = {
    
}

export default {
    namespace: false,
    state,
    getters,
    mutations,
    actions
  };
