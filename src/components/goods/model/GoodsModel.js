class GoodsModel {
    imgUrl = "";
    modelNo = "";
    goodsCode = "";
    seller = "";
    copy = "";
    title = "";
    originalPrice = "";
    dcRate = "";
    saleCnt = "";
    category = "";
    shippingDays = "";
    shippingFee = "";
    cardPromotions = "";
    infoTable = "";
    notice = "";

    constructor(imgUrl, goodsCode, seller, copy, title, originalPrice, dcRate, saleCnt, options, cardPromotions,
                category, modelNo, shippingDays, shippingFee, infoTable, notice) {
        this.imgUrl = imgUrl,
            this.goodsCode = goodsCode,
            this.seller = seller,
            this.copy = copy,
            this.title = title,
            this.originalPrice = originalPrice,
            this.dcRate = dcRate,
            this.saleCnt = saleCnt,
            this.options = options,
            this.cardPromotions = cardPromotions,
            this.category = category,
            this.modelNo = modelNo,
            this.shippingDays = shippingDays,
            this.shippingFee = shippingFee,
            this.infoTable = infoTable,
            this.notice = notice
    }
}

export default GoodsModel;
