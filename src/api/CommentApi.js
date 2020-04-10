import request,{COMMENTS_URL} from './axios';

export const loadFile = function(fileList){
    return request.post(COMMENTS_URL + `/uploadfile`, fileList).then(
        (response) => {
            return response.data;
        }
    ).catch(function(error){
        console.log(error);
    });
}

export const requestPhotoComments = function(goodsCode){
    return request.get(COMMENTS_URL + `/getphotolist/${goodsCode}`).then(
        (response) => {
            return response.data;
        }
    ).catch(function(error){
        console.log(error);
    });
}

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

    return request.put(COMMENTS_URL, comment);
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
            return response.data
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

    return request.delete(COMMENTS_URL + `/${orderId}`);
}

export const addCommentStatus = function(status){

    return request.post(COMMENTS_URL + `/addcommentstatus`, status).then(
        
    ).catch(function(error){
        console.log(error);
    });
}

export const isRecommend = function(orderId, email){

    return request.get(COMMENTS_URL + `/isrecommend/${orderId}/${email}`).then(
        (response) => {
            return response.data;
        }
    ).catch(function(error){
        console.log(error);
    });
}

export const addRecommend = function(recommendInfo){
    return request.post(COMMENTS_URL + `/addrecommend`, recommendInfo).then(
        
    ).catch(function(error){
        console.log(error);
    });
}

export const deleteCommentStatus = function(orderId){
    return request.delete(COMMENTS_URL + `/deletecommentstatus/${orderId}`).then(
       
    ).catch(function(error){
        console.log(error);
    });
}

class CommentApi{



}

export default CommentApi;
