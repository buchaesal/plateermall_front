import CommentApi from '../../src/api/CommentApi';

const state = {
    reviews:[],
    reviewSummary:{},
    unwrittenReviewsInfo:{},
    myReviewsInfo:{},
    selectedUnwrittenReview:{},
}

const getters = {

}

//state를 바꿀 때
const mutations = {
    
    loadCommentByGoodsCode(state, goodsCode){

        let commentApi = new CommentApi();
        state.reviews = commentApi.getReviews(goodsCode);
        state.reviewSummary = commentApi.getReviewSummary(goodsCode);
    },

    loadUnwrittenCommentsByUserId(state, userId){

        let commentApi = new CommentApi();
        state.unwrittenReviewsInfo = commentApi.getUnwrittenReviewsInfo(userId);
    },

    loadMyCommentsByUserId(state, userId){
        
        let commentApi = new CommentApi();
        state.myReviewsInfo = commentApi.getMyReviewsInfo(userId);
    },

    loadSelectedUnwrittenComment(state, reviewCode){

        let commentApi = new CommentApi();
        state.selectedUnwrittenReview = commentApi.getSeletedUnwrittenReview(reviewCode);
    },

    increaseRecommendCount(state, index){

        let comment =  state.reviews;
        let subComment = comment[index];

        subComment.recommendCount += 1;
        state.reviewInfo = comment;
    }
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
