import CommentApi from '../../src/api/CommentApi';

const state = {
    reviewInfo:{
        reviews:[],
        customerCount: 0,
        averageStarPoint: 0,
        averageGrade:{},    
    }

}

const getters = {

}

//state를 바꿀 때
const mutations = {

    loadCommentByGoodsCode(state, goodsCode){
        let commentApi = new CommentApi();
        console.log(goodsCode);
        state.reviewInfo = commentApi.getReviewsInfo(goodsCode);
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
