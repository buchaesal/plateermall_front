class QueryModel {
    query = "";
    sort = "";
    categoryCode = "";
    minPrice = "";
    maxPrice = "";

    constructor(query, sort, categoryCode, minPrice, maxPrice) {
        this.query = query;
        this.sort = sort;
        this.categoryCode = categoryCode;
        this.minPrice = minPrice;
        this.maxPrice = maxPrice;
    }
}

export default QueryModel;
