import {requestCartList, requestDeleteCart, requestCheckedDeleteCartList, requestChangeStock} from '../api/CartListApi'
import GoodsApi from '../api/GoodsApi'
//import CartListModel from "../components/my/model/CartListModel";
import WishListApi from "../api/WishListApi";

const state = {
    cartList: [],
}

const getters = {

}

const mutations = {
    async getCartList(state) {
        const cartList = await requestCartList();
        let goodsCodeArr = [];
        
        let goodsApi = new GoodsApi();

        cartList.map((cart) => {
            goodsCodeArr.push(cart.goodsCode);
        });
        console.log("goodsCodeArr : " + goodsCodeArr);

        const goodsList = await goodsApi.getCartGoodsList(goodsCodeArr);

        console.log("goodsList : " + goodsList);

        for (var i=0; i<cartList.length; i++) {
            cartList[i].goods = goodsList[i];
        }

        console.log(cartList);

        state.cartList = cartList;
    },

    async deleteCart(deletedCart) {
        const result = await requestDeleteCart(deletedCart.goodsCode);
        console.log(result);
    },

    async checkedDeleteCartList(checkedCartList) {
        let goodsCodeArr = [];

        checkedCartList.map((cart) => {
            goodsCodeArr.push(cart.goodsCode);
        });

        const result = await requestCheckedDeleteCartList(goodsCodeArr);
        console.log(result);
    },

    containWishList(state, goodsCodeArr) {
        console.log("containWishList : " + goodsCodeArr);

        const wishListApi = new WishListApi();
        wishListApi.addGoods(goodsCodeArr);
    },

    async changeStock(state, changeCart) {
        const result = await requestChangeStock(changeCart);
        console.log(result);
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