import request,{PURCHASEHISTORY_URL} from './axios';

export const requestUnWrittenComment = function(userId){

    //미작성
    request.get(PURCHASEHISTORY_URL + `/getunWrittenlist/${userId}`).then(
        (response) => {
            return response.data
        }
    ).catch(function (error) {
        console.log(error);
    });
}

export const requestCancelHistory = function(userId){

    //취소
    request.get(PURCHASEHISTORY_URL + `/getcancellist/${userId}`).then(
        (response) => {
            return response.data
        }
    ).catch(function (error) {
        console.log(error);
    });
}

export const requestExchangeHistory = function(userId){

    //교환
    request.get(PURCHASEHISTORY_URL + `/getexchangelist/${userId}`).then(
        (response) => {
            return response.data
        }
    ).catch(function (error) {
        console.log(error);
    });
}
    
export const requestReturnHistory = function(userId){

    //반품
    request.get(PURCHASEHISTORY_URL + `/getreturnlist/${userId}`).then(
        (response) => {
            return response.data
        }
    ).catch(function (error) {
        console.log(error);
    });
}
    

class PurchaseHistoryApi{

    unWrittenReviewsInfo= {
        unWrittenCount: 2,
        unWrittenReviews:[
            {
                goodsCode: '1203973748',
                brand: '나이키',
                itemName: 'W 에어 맥스 97 트리플 화이트 921733-100',
                option: '사이즈 선택: 235',
                photo: require('./../assets/review.jpg'),
                purchaseDate: '2020-03-11',
                dueDate: '2020-06-10',
            },
            {
                goodsCode: '1203973748',
                brand: '나이키22',
                itemName: 'W 에어 맥스 97 트리플 화이트 921733-100',
                option: '사이즈 선택: 235',
                photo: require('./../assets/review.jpg'),
                purchaseDate: '2020-03-11',
                dueDate: '2020-06-10',
            }
        ],
    }

    cancelInfo = {
        cancelCount: 2,
        cancelItems:[
            {
                brand: '이지함',
                itemName: '이지함 스팟케어 블루원 (스팟 케어)',
                quantity: 1,
                price: '10,000원',
                photo: require('./../assets/review.jpg'),
                cancelDate: '2020-03-07 16:44',
                info: '03월 17일 2020-03-17-3210155',
            },
            {
                brand: '이지함',
                itemName: '이지함 스팟케어 블루원22 (스팟 케어)',
                quantity: 1,
                price: '10,000원',
                photo: require('./../assets/review.jpg'),
                cancelDate: '2020-03-07 16:44',
                info: '03월 17일 2020-03-17-3210155',
            },
        ],
    }

    exchangeInfo = {
        exchangeCount: 1,
        exchangeItems:[
            {
                brand: '이지함',
                itemName: '이지함 스팟케어 블루원 (스팟 케어)',
                quantity: 1,
                price: '10,000원',
                photo: require('./../assets/review.jpg'),
                exchangeDate: '2020-03-07 16:44',
                info: '03월 17일 2020-03-17-3210155',
            },
            
        ],
    }

    returnInfo = {
        returnCount: 0,
        returnItems:[
            
        ],
    }

    getUnwrittenReviewsInfo(userId){

        console.log(userId);
        return this.unWrittenReviewsInfo;
    }

    getSeletedUnwrittenReview(){
        
        return this.selectedUnWrittenReview;
    }

    getCancelInfo(userId){

        console.log('api' + userId);
        return this.cancelInfo;
    }

    getExchangeInfo(userId){

        console.log(userId);
        return this.exchangeInfo;
    }

    getReturnInfo(userId){

        console.log(userId);
        return this.returnInfo;
    }

}

export default PurchaseHistoryApi;
