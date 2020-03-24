import PurchaseHistoryApi from '../../src/api/PurchaseHistoryApi';

const state = {
    unwrittenReviewsInfo:{},
    cancelInfo:{},
    exchangeInfo:{},
    returnInfo:{},
    purchaseData:{},
}

const getters = {

}

//state를 바꿀 때
const mutations = {

    loadPurchaseData(state, purchaseCode){
        let purchaseHistoryApi = new PurchaseHistoryApi();
        state.purchaseData = purchaseHistoryApi.getPurchaseData(purchaseCode);
        
        console.log(state.purchaseData);
    },

    loadUnwrittenCommentsByUserId(state, userId){

        let purchaseHistoryApi = new PurchaseHistoryApi();
        state.unwrittenReviewsInfo = purchaseHistoryApi.getUnwrittenReviewsInfo(userId);
    },

    loadSelectedUnwrittenComment(state, reviewCode){

        let purchaseHistoryApi = new PurchaseHistoryApi();
        state.selectedUnwrittenReview = purchaseHistoryApi.getSeletedUnwrittenReview(reviewCode);
    },

    loadCancelGoodsInfo(state, userId){

        let purchaseHistoryApi = new PurchaseHistoryApi();
        state.cancelInfo = purchaseHistoryApi.getCancelInfo(userId);
    },

    loadExchangeGoodsInfo(state, userId){

        let purchaseHistoryApi = new PurchaseHistoryApi();
        state.exchangeInfo = purchaseHistoryApi.getExchangeInfo(userId);

    },

    loadReturnGoodsInfo(state, userId){

        let purchaseHistoryApi = new PurchaseHistoryApi();
        state.returnInfo = purchaseHistoryApi.getReturnInfo(userId);
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
