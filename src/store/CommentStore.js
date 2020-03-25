import {requestComments, requestMyComments, requestAddComment, requestWrittenComment, requestModifyComment} from '../../src/api/CommentApi';

const state = {
    reviews:{},
    reviewSummary:{},
    myReviewsInfo:{
        reviewCount:2,
        myReviews:[]
    },
    isModalOpen: false,
    writtenReview:{

    },
    currentReview:{
        purchaseCode:'',
        goodsCode:'',
        userId:'',
        selectedOption:'',
        myPhoto:'',
        quantity:0,
        recommendCount:0,
        deliveryValue:0,
        designValue:0,
        sizeValue:0,
        starPoint: 0,
        reviewContent:'',
        writtenDate:'',
    },
}

const getters = {

}

//state를 바꿀 때
const mutations = {
    
    async loadCommentByGoodsCode(state, goodsCode){

        let reviewInfo = await requestComments('1203973748');
        console.log(goodsCode);
        state.reviews = reviewInfo;
        state.reviewSummary = reviewInfo.sumEvaluation;
    },

    async loadMyCommentsByUserId(state, testId){
        
        console.log(testId);
        state.myReviewsInfo.myReviews = await requestMyComments('testId');
        //console.log(state.myReviewsInfo.myReviews);
        //state.myReviewsInfo.reviewCount = state.myReviewsInfo.myReviews.length;
    },
    
    async loadCommentByPurchaseCode(state, purchaseCode){

        state.currentReview = await requestWrittenComment(purchaseCode);
        console.log(state.currentReview);
    },

    increaseRecommendCount(state, index){

        let comment =  state.reviews.commentList;
        let subComment = comment[index];

        subComment.recommendCount += 1;
        state.reviewInfo = comment;
    },

    toggleModalOpen(state){
        state.isModalOpen ? state.isModalOpen= false : state.isModalOpen=true;
    },

    async addCommentValue(state, comment){
        
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
