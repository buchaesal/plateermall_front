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

    constructor(cartCode, userId, cartStock, imgUrl, goodsCode, seller, title, originalPrice, dcRate, saleCnt) {
        this.cartCode = cartCode;
        this.userId = userId;
        this.cartStock = cartStock;
        this.imgUrl = imgUrl;
        this.goodsCode = goodsCode;
        this.seller = seller;
        this.title = title;
        this.originalPrice = originalPrice;
        this.dcRate = dcRate;
        this.saleCnt = saleCnt;
    }
}

export default CartListModel;