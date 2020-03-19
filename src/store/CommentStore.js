import CommentApi from '../../src/api/CommentApi';

const state = {
    reviewInfo:{},
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
        state.reviewInfo = commentApi.getReviewsInfo(goodsCode);
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
