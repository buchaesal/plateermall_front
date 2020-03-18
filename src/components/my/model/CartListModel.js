class CartListModel {
    cartCode = ''
    userId = ''
    cartStock = 0

    imgUrl = ''
    goodsCode = ''
    seller = '' //판매자
    title = ''
    originalPrice = 0 // 상품 가격
    dcRate = 0.0 // 할인금액
    saleCnt = 0 // 몇개 팔렸는지

    constructor(goodsCode, cartStock) {
        this.goodsCode = goodsCode;
        this.cartStock = cartStock;
    }

    constructor(imgUrl, goodsCode, title, originalPrice, cartStock) {
        this.imgUrl = imgUrl;
        this.goodsCode = goodsCode;
        this.title = title;
        this.originalPrice = originalPrice;
        this.cartStock = cartStock;
    }
}

export default CartListModel;