import {requestComments, requestMyComments} from '../../src/api/CommentApi';

const state = {
    reviews:{},
    reviewSummary:{},
    myReviewsInfo:{
        reviewCount:2,
        myReviews:[]
    },
    selectedUnwrittenReview:{},
    isModalOpen: false,
    writtenReview:{

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
        //state.myReviewsInfo.reviewCount = state.myReviewsInfo.myReviews.length;
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

    changeCommentValue(state, comment){
        console.log(comment);
        state.writtenReview = comment;
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
