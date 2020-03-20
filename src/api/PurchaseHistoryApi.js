//import request,{COMMENTS_URL} from './axios';

class PurchaseHistoryApi{

    unWrittenReviewsInfo= {
        unWrittenCount: 2,
        unWrittenReviews:[
            {
                goodsCode: '1',
                brand: '나이키',
                itemName: 'W 에어 맥스 97 트리플 화이트 921733-100',
                option: '사이즈 선택: 235',
                photo: require('./../assets/review.jpg'),
                purchaseDate: '2020-03-11',
                dueDate: '2020-06-10',
            },
            {
                goodsCode: '2',
                brand: '나이키22',
                itemName: 'W 에어 맥스 97 트리플 화이트 921733-100',
                option: '사이즈 선택: 235',
                photo: require('./../assets/review.jpg'),
                purchaseDate: '2020-03-11',
                dueDate: '2020-06-10',
            }
        ],
    }

    getUnwrittenReviewsInfo(userId){

        console.log(userId);
        return this.unWrittenReviewsInfo;
    }

    getSeletedUnwrittenReview(){
        
        return this.selectedUnWrittenReview;
    }

}

export default PurchaseHistoryApi;
