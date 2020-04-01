import {requestComments, requestMyComments, requestAddComment, requestWrittenComment, requestModifyComment, increaseRecommend, goodsOptionList, deleteComment, requestUnwrittenOrderId} from '../../src/api/CommentApi';
import {getOrder} from '../../src/api/OrderApi';
import GoodsApi from '../../src/api/GoodsApi';

const state = {
    reviews:{},
    reviewSummary:{},
    myReviews:[],
    orderIdInfo:[],
    unwrittenReviews:[],
    goodsInfo:[],
    orderInfo:[],
    unwrittenCount:0,
    isModalOpen: false,
    writtenReview:{}, //바뀐 리뷰

}

const getters = {
    orderInfoLength: state => {
        return state.orderInfo.length;
      }

}

//state를 바꿀 때
const mutations = {
    async loadCommentByGoodsCode(state, goodsCode){

        let reviewInfo = await requestComments(goodsCode);
        state.reviews = reviewInfo;
        state.reviewSummary = reviewInfo.sumEvaluation;
    },

    async loadCommentByFilter(state, options){

        if(options.goodsOption == null) options.goodsOption = '옵션보기';
        if(options.orderOption == null) options.orderOption = '전체보기';

        state.reviews.commentList = await goodsOptionList(options.goodsCode, options.goodsOption, options.orderOption);
    },

    async loadMyCommentsByUserId(state, testId){

        state.myReviews = await requestMyComments(testId);
    },
    
    async deleteComment(state, info){

        await deleteComment(info.orderId);
        state.myReviews = await requestMyComments(info.userId);
    },

    async loadCommentByPurchaseCode(state, purchaseCode){

        state.currentReview = await requestWrittenComment(purchaseCode);
    },

    async increaseRecommendCount(state, index){

        let comment =  state.reviews.commentList;
        let subComment = comment[index];

        subComment.recommendCount += 1;
        await increaseRecommend(subComment);

        state.reviewInfo = comment;
    },

    async loadUnwrittenList(state, userId){
        state.orderInfo = [];
        state.goodsInfo = [];
        
        state.orderIdInfo = await requestUnwrittenOrderId(userId);

        for(let index in state.orderIdInfo){                    
            state.orderInfo.push(await getOrder(state.orderIdInfo[index]));
        }

        state.unwrittenCount = state.orderInfo.length;
        console.log(state.unwrittenCount + '스토어카운트');

        var goodsApi = new GoodsApi();

        for(let index in state.orderInfo){
            state.goodsInfo.push(await goodsApi.getGoods(state.orderInfo[index].goodsId));
        }
    },

    toggleModalOpen(state){
        state.isModalOpen ? state.isModalOpen= false : state.isModalOpen=true;
    },

    updateComment(state, review){
        state.writtenReview = review;
    },

    async addCommentValue(state, userId){
        
        await requestAddComment(state.writtenReview);
        state.unWritten = await requestUnwrittenOrderId(userId);
    },

    async modifyCommentValue(state){

        await requestModifyComment(state.writtenReview);
        state.myReviews = await requestMyComments(state.writtenReview.userId);
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
