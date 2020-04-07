class CardGoodsSetApiModel {
    query = "";
    sort = "";
    categoryCode = "";

    constructor(query, sort, categoryCode) {
        this.query = query;
        this.sort = sort;
        this.categoryCode = categoryCode;
    }
}

export default CardGoodsSetApiModel;
