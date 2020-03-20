import request,{COMMENTS_URL} from './axios';

export const requestComments = function(item){
    
    //상품코드에 대한 리뷰리스트 조회
    request.get(COMMENTS_URL + `/getCommentList/${item}`).then(
        (response) => {
            return response.data
        }
    ).catch(function (error) {
        console.log(error);
    });

    //미작성 리뷰리스트 조회
    request.get(COMMENTS_URL + `/getUnWrittenList/${item}`).then(
        (response) => {
            return response.data
        }
    ).catch(function (error) {
        console.log(error);
    });

    //내가 작성한 리뷰리스트 조회
    request.get(COMMENTS_URL + `/getMyCommentList/${item}`).then(
        (response) =>{
            return response.data
        }
    ).catch(function(error){
        console.log(error);
    });

    //선택한 미작성 리뷰 조회
    request.get(COMMENTS_URL + `/getSelectedComment/${item}`).then(
        (response) =>{
            return response.data
        }
    ).catch(function(error){
        console.log(error);
    });
}

class CommentApi{

        reviews= [
            {
                reviewCode: '1',
                starCount: 5,
                option: '사이즈선택:235',
                content: '발 볼이 생각보다 좁아서 아프네요. 사이즈는 5mm정도 작게 나온 것 같아요.',
                photo: require('./../assets/review.jpg'),
                id: '선경',
                writeDate: '2020.03.16',
                recommendCount: 30,
            },
            {
                reviewCode: '2',
                starCount: 3,
                option: '사이즈선택:245',
                content: '음 글쎄 잘 모르겠어요',
                photo: require('./../assets/review.jpg'),
                id: 'testreview',
                writeDate: '2020.03.16',
                recommendCount: 20,
            },
        ]

        reviewSummary={
            customerCount : 2,
            averageStarPoint : 4,
            
            deliveryCommon: 60,
            deliveryBest: 0,
            deliveryWorst: 0,
            designCommon: 20,
            designBest: 50,
            designWorst: 0,
            sizeCommon: 20,
            sizeBest: 50,
            sizeWorst: 0,
        }
        
    myReviewsInfo={
        reviewCount: 2,
        myReviews:[
            {
                brand: '나이키',
                itemName: 'W 에어 맥스 97 트리플 화이트 921733-100',
                option: '사이즈 선택: 235',
                content: '발 볼이 생각보다 좁아서 아프네요. 사이즈는 5mm정도 작게 나온 것 같아요.',
                photo: require('./../assets/review.jpg'),
            },
            {
                brand: '나이키',
                itemName: 'W 에어 맥스 97 트리플 화이트 921733-100',
                option: '사이즈 선택: 235',
                content: '발 볼이 생각보다 좁아서 아프네요. 사이즈는 5mm정도 작게 나온 것 같아요.',
                photo: require('./../assets/review.jpg'),
            }
        ],
    }

    getReviews(goodsCode){
        console.log(goodsCode);
        return this.reviews;
    }

    getReviewSummary(goodsCode){
        console.log(goodsCode);
        return this.reviewSummary;
    }
    
    getMyReviewsInfo(userId){

        console.log(userId);
        return this.myReviewsInfo;
    }

    getSeletedUnwrittenReview(reviewCode){
        
        console.log(reviewCode);
        return this.selectedUnWrittenReview;
    }

    getSelectedRecommendCount(reviewCode){

        console.log(reviewCode);
        return this.selectedReviewRecommendCount;
    }
}

export default CommentApi;
