import request,{COMMENTS_URL} from './axios';
//import CommentApiModel from './model/CommentApiModel';

export const requestComments = function(goodsCode){

    return request.get(COMMENTS_URL + `/getcommentlist/${goodsCode}`).then(
        (response) => {
            return response.data;
        }
    ).catch(function(error){
        console.log(error);
    });
}

export const requestMyComments = function(userId){

    return request.get(COMMENTS_URL + `/getmycomment/${userId}`).then(
        (response) => {
            return response.data
        }
    ).catch(function(error){
        console.log(error);
    });
}

export const requestWrittenComment = function(purchaseCode){
    
    return request.get(COMMENTS_URL + `/getwrittencomment/${purchaseCode}`).then(
        (response) => {
            return response.data
        }
    ).catch(function(error){
        console.log(error);
    });
}

export const requestAddComment = function(comment){

    return request.post(COMMENTS_URL, comment);
}

export const requestModifyComment = function(comment){

    return request.put(COMMENTS_URL, comment).then(
        (response) => {
            return response.data;
        }
    ).catch(function (err) {
        console.log(err);
    })
}

export const requestUnwrittenOrderId = function(userId){

    return request.get(COMMENTS_URL+ `/getunwrittenorderid/${userId}`).then(
        (response) => {
            return response.data
        }
    ).catch(function(error){
        console.log(error);
    });
}

export const increaseRecommend = function(comment){
    
    return request.put(COMMENTS_URL + '/recommendation', comment).then(
        (response) => {
            console.log(response);
        }
    ).catch(function(error){
        console.log(error);
    });
}

export const goodsOptionList = function(goodsCode, goodsOption, orderBYOption){

    return request.get(COMMENTS_URL + `/getfiltergoodsoption/${goodsCode}/${goodsOption}/${orderBYOption}`).then(
        (response) => {
            return response.data;
        }
    ).catch(function(error){
        console.log(error);
    });
}

export const deleteComment = function(orderId){

    return request.delete(COMMENTS_URL + `/${orderId}`).then(
        (response)=> {
            return response.data;
        }
    ).catch(function(error){
        console.log(error);
    });
}

export const addCommentStatus = function(status){

    return request.post(COMMENTS_URL + `/addcommentstatus`, status).then(
        (response)=> {
            return response.data;
        }
    ).catch(function(error){
        console.log(error);
    });
}

class CommentApi{



}

export default CommentApi;
