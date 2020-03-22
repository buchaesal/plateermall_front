import CartListApi from '../api/CartListApi'
import CartListModel from "../components/my/model/CartListModel";
import WishListApi from "../api/WishListApi";

const state = {
    cartList: [],
}

const getters = {

}

const mutations = {
    addCartList() {
        const cartList = {
            cartCode: "code3",
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
        };

        state.cartList.push(new CartListModel((cartList)));
    },
    getCartList(state) {
        const cartListApi = new CartListApi();
        state.cartList = cartListApi.getCartList();
    },

    deleteCart(state, deletedCart) {
        state.cartList = state.cartList.filter(function(cart) {
            return cart.cartCode !== deletedCart.cartCode;
        });
    },

    checkedDeleteCartList(state, checkedCartList) {
        state.cartList = state.cartList.filter(cart => !checkedCartList.some(checkedCart => cart.cartCode === checkedCart.cartCode));
    },

    containWishList(state, goodsCodeArr) {
        console.log("containWishList : " + goodsCodeArr);

        const wishListApi = new WishListApi();
        wishListApi.addGoods(goodsCodeArr);
    },

    changeStock(state, changeCart) {
        let index = state.cartList.findIndex((cart) => cart.cartCode === changeCart.cartCode);
        state.cartList[index].cartStock = Number(changeCart.cartStock);
    }
}

const actions = {

}

export default {
    namespace: false,
    state,
    getters,
    mutations,
    actions
}