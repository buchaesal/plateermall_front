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

export const getQuestion = function (id) {
    return request.get("http://localhost:9999/api/faq/question/detail" + `/${id}`).then(
        (response) => {
            return response.data;
        }
    ).catch(function (err) {
        console.log(err);
    });
}

// class FaqApi {
//     faqList = [
//         {
//             id: 1,
//             title: '진짜 장난하시나요???',
//             questionDate: '2020.03.19',
//             answerDate: '2020.03.19',
//             status: '완료'
//         },
//         {
//             id: 2,
//             title: '질문 드립니다.',
//             questionDate: '2020.03.19',
//             answerDate: '2020.03.19',
//             status: '완료'
//         },
//         {
//             id: 3,
//             title: '질문 드립니다.',
//             questionDate: '2020.03.19',
//             answerDate: '2020.03.19',
//             status: '완료'
//         }
//     ]
//
//     getFaqList() {
//         return this.faqList;
//     }
// }

// export default FaqApi;