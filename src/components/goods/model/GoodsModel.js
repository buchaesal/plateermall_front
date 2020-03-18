class GoodsModel {
    imgUrl = "";
    goodsCode = "";
    seller = "";
    copy = "";
    title = "";
    originalPrice = "";
    dcRate = "";
    saleCnt = "";
    category = "";

    constructor(imgUrl, goodsCode, seller, copy, title, originalPrice, dcRate, saleCnt, options, cardPromotions, category) {
        this.imgUrl = imgUrl,
            this.goodsCode = goodsCode,
            this.seller = seller,
            this.copy = copy,
            this.title = title,
            this.originalPrice = originalPrice,
            this.dcRate = dcRate,
            this.saleCnt = saleCnt,
            this.options = options,
            this.card = cardPromotions,
            this.category = category
    }
}

export default GoodsModel;
