class RatingStarPointModel{
    customerCount= 0; //고객 수
    starPoint= 0; //평균 별점

    constructor(customerCount, starPoint){
        this.customerCount = customerCount;
        this.starPoint = starPoint;
    }
}

export default RatingStarPointModel;