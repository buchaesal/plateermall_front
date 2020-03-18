const state = {
    reviews:[],
    customerCount: 0,
    averageStarPoint: 0,
    averageGrade:{},

}

const getters = {

}

//state가 바뀔 때
const mutations = {
    getComments(state){
       state.reviews = CommentApi.reviews;
       state.customerCount = CommentApi.customerCount;
       state.averageStarPoint = CommentApi.averageStarPoint;
       state.averageGrade = CommentApi.averageGrade;
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

import CommentApi from '../../src/api/CommentApi';