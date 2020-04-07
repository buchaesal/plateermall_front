class GoodsModel {
    goodsCode = "";
    imgUrl = "";
    modelNo = "";
    seller = "";
    copy = "";
    title = "";
    originalPrice = 0;
    benefitPrice = 0;
    dcRate = 0;
    saleCnt = 0;
    category = "";
    shippingDays = 0;
    shippingFee = 0;
    cardPromotions = "";
    infoTable = "";
    notice = "";

    constructor(goodsCode, imgUrl, seller, copy, title, originalPrice, benefitPrice, dcRate, saleCnt, options,
                cardPromotions, category, modelNo, shippingDays, shippingFee, infoTable, notice) {
        this.imgUrl = imgUrl,
            this.goodsCode = goodsCode,
            this.seller = seller,
            this.copy = copy,
            this.title = title,
            this.originalPrice = originalPrice,
            this.benefitPrice = benefitPrice,
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
