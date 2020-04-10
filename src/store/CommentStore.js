import {loadFile, addRecommend, requestComments, requestMyComments, requestAddComment, requestWrittenComment, requestModifyComment, increaseRecommend, goodsOptionList, deleteComment, requestUnwrittenOrderId, isRecommend} from '../../src/api/CommentApi';
import {getOrder} from '../../src/api/OrderApi';
import GoodsApi from '../../src/api/GoodsApi';
import {modifyUser} from '../../src/api/UserApi';

const state = {
    reviews:[],
    reviewCount:0,
    reviewSummary:{},
    written:{
        reviewList:[],
        writtenCount:0,
        orderInfo:[],
        goodsInfo:[],
    },

    unwritten:{
        orderIdInfo:[],
        orderInfo:[],
        goodsInfo:[],
        unWrittenCount:0,
        duedate:[],
    },
    isModalOpen: false,
    writtenReview:{}, //바뀐 리뷰
    fileList:null,
}

const getters = {

}

//state를 바꿀 때
const mutations = {

    async loadFileData(state, fileList){
        state.fileList = fileList;
    },

    async loadCommentByGoodsCode(state, goodsCode){

        state.reviews = await requestComments(goodsCode);
        
        state.reviewCount = state.reviews.commentList.length;
        state.reviewSummary = state.reviews.sumEvaluation;
    },

    async loadCommentByFilter(state, options){

        if(options.goodsOption == null) options.goodsOption = '옵션보기';
        if(options.orderOption == null) options.orderOption = '전체보기';

        state.reviews.commentList = await goodsOptionList(options.goodsCode, options.goodsOption, options.orderOption);
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

    //작성한
    async loadMyCommentsByUserId(state, userId){

        state.written.orderInfo = [];
        state.written.goodsInfo = [];

        state.written.reviewList = await requestMyComments(userId);
        state.written.writtenCount = state.written.reviewList.length;

        var goodsApi = new GoodsApi();

        for(let index in state.written.reviewList){
            state.written.orderInfo.push(await getOrder(state.written.reviewList[index].orderId));
            state.written.goodsInfo.push(await goodsApi.getGoods(state.written.reviewList[index].goodsCode));
        }

    },
    //
    //미작성
    async loadUnwrittenList(state, userId){

        state.unwritten.orderInfo = [];
        state.unwritten.goodsInfo = [];
        state.unwritten.duedate= [];

        state.unwritten.orderIdInfo = await requestUnwrittenOrderId(userId);
        state.unwritten.unWrittenCount = state.unwritten.orderIdInfo.length;

        for(let index in state.unwritten.orderIdInfo){
            state.unwritten.orderInfo.push(await getOrder(state.unwritten.orderIdInfo[index]));
        }

        var goodsApi = new GoodsApi();

        for(let index in state.unwritten.orderInfo){
            let year = state.unwritten.orderInfo[index].orderDate.substr(0,4);
            let month = state.unwritten.orderInfo[index].orderDate.substr(5,2);
            let day = state.unwritten.orderInfo[index].orderDate.substr(8,2);

            let date = new Date(year, month, day).toISOString().slice(0,10);

            state.unwritten.duedate.push(date);

            state.unwritten.goodsInfo.push(await goodsApi.getGoods(state.unwritten.orderInfo[index].goodsId));
        }

    },

    updateComment(state, review){
        state.writtenReview = review;
    },

}

//비동기 통신
const actions = {

    //상품평 등록
    async ADD_COMMENT(context, user){

        if(state.fileList != null){
            let fileName = await loadFile(state.fileList);

            state.writtenReview.myPhoto = fileName[0];
            if(fileName[1] != null) state.writtenReview.myPhoto2 = fileName[1];
            if(fileName[2] != null) state.writtenReview.myPhoto3 = fileName[2];

            user.point += 200;
            user.password = null;
            await modifyUser(user);
        }else{
            
            user.point += 100;
            user.password = null;
            await modifyUser(user);
        }

        await requestAddComment(state.writtenReview).then(() => {
           
            context.commit('loadUnwrittenList', user.email);
        }
        ).catch(function (error) {
            console.log(error);
        });

        state.fileList = null;
    },

    async UPDATE_COMMENT(context, userId){

        if(state.fileList != null){
            let fileName = await loadFile(state.fileList);

            state.writtenReview.myPhoto = fileName[0];
            if(fileName[1] != null) state.writtenReview.myPhoto2 = fileName[1];
            if(fileName[2] != null) state.writtenReview.myPhoto3 = fileName[2];
        }

        await requestModifyComment(state.writtenReview).then(() => {

            context.commit('loadMyCommentsByUserId', userId);
        }).catch(function(error){
            console.log(error);
        });

        state.fileList = null;
    },

    async DELETE_COMMENT(context, info){
        await deleteComment(info.orderId).then(() => {

            context.commit('loadMyCommentsByUserId', info.userId);
        }).catch(function(error){
            console.log(error);
        });
    },

    async RECOMMEND_COMMENT(context, info){

        info.orderId = state.reviews.commentList[info.index].orderId;

        let commentRecommend = {
            orderId : info.orderId,
            email : info.email
        }

        let order = await getOrder(info.orderId);

        if(order.userId == info.email){

            alert('자신의 상품평은 추천할 수 없습니다.');
        }else{
            let recommendFlag = await isRecommend(info.orderId, info.email);

            if(recommendFlag == true){
                await addRecommend(commentRecommend);
                context.commit('increaseRecommendCount', info.index);
                alert('추천되었습니다.');
                
            }else{
                alert('이미 추천한 상품평입니다.');
            }
        }
    }
}

export default {
    namespace: false,
    state,
    getters,
    mutations,
    actions
  };
