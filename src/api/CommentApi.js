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

export const requestAddComment = function(comment){

    request.post(COMMENTS_URL, comment).then(
        (response) => {
            console.log(response);
        }
    ).catch(function(error){
        console.log(error);
    });
}

class CommentApi{



}

export default CommentApi;
