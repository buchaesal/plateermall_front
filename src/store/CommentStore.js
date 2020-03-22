import CommentApi from '../../src/api/CommentApi';

const state = {
    reviews:[],
    reviewSummary:{},
    myReviewsInfo:{},
    selectedUnwrittenReview:{},
    isModalOpen: false,
    writtenReview:{

    },
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

    loadMyCommentsByUserId(state, userId){
        
        let commentApi = new CommentApi();
        state.myReviewsInfo = commentApi.getMyReviewsInfo(userId);
    },

    increaseRecommendCount(state, index){

        let comment =  state.reviews;
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
