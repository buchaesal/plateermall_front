class CommentApi{
    reviews = [
        {
            starCount: 5,
            option: '사이즈선택:235',
            content: '발 볼이 생각보다 좁아서 아프네요. 사이즈는 5mm정도 작게 나온 것 같아요.',
            photo: require('./../assets/review.jpg'),
            id: '선경',
            writeDate: '2020.03.16'
        },
        {
            starCount: 3,
            option: '사이즈선택:245',
            content: '음 글쎄 잘 모르겠어요',
            photo: require('./../assets/review.jpg'),
            id: 'testreview',
            writeDate: '2020.03.16'
        },
    ];

    customerCount = 2;
    averageStarPoint = 4;
    averageGrade = {
        deliveryCommon: 60,
        deliveryBest: 0,
        deliveryWorst: 0,
        designCommon: 20,
        designBest: 50,
        designWorst: 0,
        sizeCommon: 20,
        sizeBest: 50,
        sizeWorst: 0
   };

   getReviews(){
       return this.reviews;
   }

   getCustomerCount(){
       return this.customerCount;
   }

   getAverageStarPoint(){
       return this.averageStarPoint;
   }

   getAverageGrade(){
       return this.averageGrade;
   }
}

export default CommentApi;