import CartListModel from "../components/my/model/CartListModel"
import request,{CART_URL} from './axios';

export const requestCartList = function(){
    request.get(CART_URL).then(
        (response) => {
            return response.data
        }
    ).catch(function (error) {
        console.log(error);
    });
}

export const requestAddCart = function(cart) {
    request.post(CART_URL, cart).then(
        (response) => {
            return response.data;
        }
    ).catch(function(error) {
        console.log(error);
    });
}

export const requestDeleteCart = function(cartCode) {
    request.delete(CART_URL + `/${cartCode}`).then(
        (response) => {
            return response.data;
        }
    ).catch(function(error) {
        console.log(error);
    })
}

class CartListApi {
    cartList = [];

    constructor() {
        this.cartList.push(new CartListModel({
            cartCode: "code1",
            userId: "1",
            cartStock: 2,
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
            cartStock: 1,
            imgUrl: "https://image.ellotte.com/ellt.static.lotteeps.com/goods/img/71/17/50/01/12/1201501771_mast.jpg/chg/resize/160x160/extent/160x160/optimize",
            goodsCode: "123",
            seller: "판매자2",
            title: "필립스(아울렛)\n" +
                "필립스 소닉케어 다이아몬드 클린 매트화이트 HX9338/04\n" +
                "모델명:HX9338/04",
            originalPrice: 58000,
            dcRate: 3.5,
            saleCnt: 5
        }));

        this.cartList.push(new CartListModel({
            cartCode: "code3",
            userId: "1",
            cartStock: 1,
            imgUrl: "https://image.ellotte.com/ellt.static.lotteeps.com/goods/img/71/17/50/01/12/1201501771_mast.jpg/chg/resize/160x160/extent/160x160/optimize",
            goodsCode: "123",
            seller: "판매자3",
            title: "필립스(아울렛)\n" +
                "필립스 소닉케어 다이아몬드 클린 매트화이트 HX9338/04\n" +
                "모델명:HX9338/04",
            originalPrice: 1250000,
            dcRate: 3.5,
            saleCnt: 5
        }));

        this.cartList.push(new CartListModel({
            cartCode: "code4",
            userId: "1",
            cartStock: 1,
            imgUrl: "https://image.ellotte.com/ellt.static.lotteeps.com/goods/img/71/17/50/01/12/1201501771_mast.jpg/chg/resize/160x160/extent/160x160/optimize",
            goodsCode: "123",
            seller: "판매자4",
            title: "필립스(아울렛)\n" +
                "필립스 소닉케어 다이아몬드 클린 매트화이트 HX9338/04\n" +
                "모델명:HX9338/04",
            originalPrice: 45000,
            dcRate: 3.5,
            saleCnt: 5
        }));

        this.cartList.push(new CartListModel({
            cartCode: "code5",
            userId: "1",
            cartStock: 1,
            imgUrl: "https://image.ellotte.com/ellt.static.lotteeps.com/goods/img/71/17/50/01/12/1201501771_mast.jpg/chg/resize/160x160/extent/160x160/optimize",
            goodsCode: "123",
            seller: "판매자5",
            title: "필립스(아울렛)\n" +
                "필립스 소닉케어 다이아몬드 클린 매트화이트 HX9338/04\n" +
                "모델명:HX9338/04",
            originalPrice: 320000,
            dcRate: 3.5,
            saleCnt: 5
        }));
    }

    getCartList() {
        return this.cartList;
    }
}

export default CartListApi;
