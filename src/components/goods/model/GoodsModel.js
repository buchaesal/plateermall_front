class GoodsModel {
    constructor(imgUrl, goodsCode, seller, copy, title, originalPrice, dcRate, saleCnt) {
        this.imgUrl = imgUrl,
            this.goodsCode = goodsCode,
            this.seller = seller,
            this.copy = copy,
            this.title = title,
            this.originalPrice = originalPrice,
            this.dcRate = dcRate,
            this.saleCnt = saleCnt
    }
}

export default GoodsModel;