class CartListModel {
    cartCode = ''
    userId = ''
    cartStock = 0
    //goods = []
    
    goods = {
        imgUrl : '',
        goodsCode : '',
        seller : '', //판매자
        title : '',
        originalPrice : 0, // 상품 가격
        dcRate : 0.0, // 할인금액
        saleCnt : 0, // 몇개 팔렸는지
    }

    constructor(cart) {
        Object.assign(this, cart);
    }
}

export default CartListModel;