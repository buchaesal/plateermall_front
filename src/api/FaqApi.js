import request from './axios';

export const getQuestionList = function () {
    return request.get("http://localhost:9999/api/faq/question/list").then(
        (response) => {
            return response.data;
        }
    ).catch(function (err) {
        console.log(err);
    });
}

export const getQuestion = function (postId) {
    return request.get(`http://localhost:9999/api/faq/question/detail/${postId}`).then(
        (response) => {
            return response.data;
        }
    ).catch(function (err) {
        console.log(err);
    });
}

export const getAnswer = function (postId) {
    return request.get(`http://localhost:9999/api/faq/answer/${postId}`).then(
        (response) => {
            return response.data;
        }
    ).catch(function (err) {
        console.log(err);
    });
}

export const registrationQuestion = function(questionObject) {
    return request.post(`http://localhost:9999/api/faq/question/registration/`,questionObject).then(
        (response) => {
            return response.data;
        }
    ).catch(function (err) {
        console.log(err);
    });
}

export const questionDelete = function (postId) {
    request.get(`http://localhost:9999/api/faq/question/delete/${postId}`).then(
        (response)=>{
            return response.data;
        }
    ).catch(function (err) {
        console.log(err);
    });
}

export const questionUpdate = function(questionObject) {
    return request.get(`http://localhost:9999/api/faq/question/update/`,questionObject).then(
        (response)=>{
            return response.data;
        }
    ).catch(function (err) {
        console.log(err);
    });
}