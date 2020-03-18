class CartListModel {
    cartCode = ''
    userId = ''
    cartStock = 0

    imgUrl = ''
    goodsCode = ''
    seller = ''
    title = ''
    originalPrice = 0
    dcRate = 0.0
    saleCnt = 0

    constructor(imgUrl, goodsCode, title, originalPrice, cartStock) {
        this.imgUrl = imgUrl;
        this.goodsCode = goodsCode;
        this.title = title;
        this.originalPrice = originalPrice;
        this.cartStock = cartStock;
    }
}