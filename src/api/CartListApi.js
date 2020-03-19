import CartListModel from "../components/my/model/CartListModel"
//import request from './axios';

class CartListApi {
    cartList = [];

    constructor() {
        this.cartList.push(new CartListModel({
            cartCode: "code1",
            userId: "1",
            cartStock: 5,
            imgUrl: "https://image.ellotte.com/ellt.static.lotteeps.com/goods/img/71/17/50/01/12/1201501771_mast.jpg/chg/resize/160x160/extent/160x160/optimize",
            goodsCode: "123",
            seller: "판매자1",
            title: "필립스(아울렛)\n" +
                "필립스 소닉케어 다이아몬드 클린 매트화이트 HX9338/04\n" +
                "모델명:HX9338/04",
            originalPrice: 1206000,
            dcRate: 3.5,
            saleCnt: 5
        }));

        this.cartList.push(new CartListModel({
            cartCode: "code2",
            userId: "1",
            cartStock: 5,
            imgUrl: "https://image.ellotte.com/ellt.static.lotteeps.com/goods/img/71/17/50/01/12/1201501771_mast.jpg/chg/resize/160x160/extent/160x160/optimize",
            goodsCode: "123",
            seller: "판매자1",
            title: "필립스(아울렛)\n" +
                "필립스 소닉케어 다이아몬드 클린 매트화이트 HX9338/04\n" +
                "모델명:HX9338/04",
            originalPrice: 1206000,
            dcRate: 3.5,
            saleCnt: 5
        }));
    }

    /*
    addCartList(cartList) {
        cartList = {
            cartCode: "code1",
            userId: "1"
        };

        this.cartList.push(new CartListModel(cartList));
    }
    */

    getCartList() {
        return this.cartList;
    }
}

export default CartListApi;
