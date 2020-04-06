import request,{FAQ_URL} from './axios';

export const getQuestionList = function () {
    return request.get(FAQ_URL+"/question/list").then(
        (response) => {
            return response.data;
        }
    ).catch(function (err) {
        console.log(err);
    });
}

export const getQuestion = function (postId) {
    return request.get(FAQ_URL+`/question/detail/${postId}`).then(
        (response) => {
            return response.data;
        }
    ).catch(function (err) {
        console.log(err);
    });
}

export const getAnswer = function (postId) {
    return request.get(FAQ_URL+`/answer/${postId}`).then(
        (response) => {
            return response.data;
        }
    ).catch(function (err) {
        console.log(err);
    });
}

export const registrationQuestion = function (questionObject) {
    return request.post(FAQ_URL+`/question/registration/`, questionObject).then(
        (response) => {
            return response.data;
        }
    ).catch(function (err) {
        console.log(err);
    });
}

export const questionDelete = function (postId) {
    request.delete(FAQ_URL+`/question/delete/${postId}`).then(
        (response) => {
            return response.data;
        }
    ).catch(function (err) {
        console.log(err);
    });
}

export const questionUpdate = function (questionObject) {
    return request.put(FAQ_URL+`/question/update/`, questionObject).then(
        (response) => {
            return response.data;
        }
    ).catch(function (err) {
        console.log(err);
    });
}

export const getMyQuestionList = function (userName) {
    return request.get(FAQ_URL + `/question/list/${userName}`).then(
        (response) => {
            return response.data;
        }
    ).catch(function (err) {
        console.log(err);
    });
}

export const getRecentQuestion = function () {
    return request.get(FAQ_URL + `/question/recent`).then(
        (response) => {
            return response.data;
        }
    ).catch(function (err) {
        console.log(err);
    });
}

// export const searchQuestion = function (searchQuestionObject) {
//     return request.post(FAQ_URL+`/question/search/list`, searchQuestionObject).then(
//         (response) => {
//             return response.data;
//         }
//     ).catch(function (err) {
//         console.log(err);
//     })
// }