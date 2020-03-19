import CommentApi from '../../src/api/CommentApi';

const state = {
    goodsCode: '',
    reviews:[],
    customerCount: 0,
    averageStarPoint: 0,
    averageGrade:{},

}

const getters = {

}

//state를 바꿀 때
const mutations = {

    loadCommentByGoodsCode(state, goodsCode){
        let commentApi = new CommentApi();

        state.reviews = commentApi.getReviews(goodsCode);
    },

    getComments(state){

       const commentsApi = new CommentApi();
        
       state.reviews = commentsApi.getReviews;
       state.customerCount = commentsApi.getCustomerCount;
       state.averageStarPoint = commentsApi.getAverageStarPoint;
       state.averageGrade = commentsApi.getAverageGrade;
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
