import {requestComments, requestMyComments, requestAddComment, requestWrittenComment, requestModifyComment, increaseRecommend, goodsOptionList} from '../../src/api/CommentApi';


const state = {
    reviews:{},
    reviewSummary:{},
    myReviewsInfo:{
        reviewCount:2,
        myReviews:[]
    },
    isModalOpen: false,
    writtenReview:{}, //바뀐 리뷰

}

const getters = {

}

//state를 바꿀 때
const mutations = {
    
    async loadCommentByGoodsCode(state, goodsCode){

        let reviewInfo = await requestComments(goodsCode);
        state.reviews = reviewInfo;
        state.reviewSummary = reviewInfo.sumEvaluation;
    },

    async loadCommentByFilter(state, goodsCode, goodsOption, orderByOption){
        console.log(goodsOption);
        console.log(orderByOption);
        state.reviews.commentList = await goodsOptionList(goodsCode, goodsOption, orderByOption);
    },

    async loadMyCommentsByUserId(state, testId){

        state.myReviewsInfo.myReviews = await requestMyComments(testId);
        //console.log(state.myReviewsInfo.myReviews);
        //state.myReviewsInfo.reviewCount = state.myReviewsInfo.myReviews.length;
    },
    
    async loadCommentByPurchaseCode(state, purchaseCode){

        state.currentReview = await requestWrittenComment(purchaseCode);
        console.log(state.currentReview);
    },

    async increaseRecommendCount(state, index){

        let comment =  state.reviews.commentList;
        let subComment = comment[index];

        subComment.recommendCount += 1;
        await increaseRecommend(subComment);

        state.reviewInfo = comment;
    },

    toggleModalOpen(state){
        state.isModalOpen ? state.isModalOpen= false : state.isModalOpen=true;
    },

    async addCommentValue(state, comment){
        console.log("store-----");
        console.log(comment);
        state.writtenReview = await requestAddComment(comment);
    },

    async modifyCommentValue(state, comment){
        state.writtenReview = await requestModifyComment(comment);
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
