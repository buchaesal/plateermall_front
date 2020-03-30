import {requestCartList, requestDeleteCart, requestCheckedDeleteCartList, requestChangeQuantity} from '../api/CartListApi'
import GoodsApi from '../api/GoodsApi'
//import CartListModel from "../components/my/model/CartListModel";
import WishListApi from "../api/WishListApi";
import router from "../router/index";

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

        let resultCart = [];

        cartList.forEach(function(cart) {
            goodsList.forEach(function(goods) {
                if(cart.goodsCode === goods.goodsCode){
                    cart.goods = goods;
                    resultCart.push(cart);
                }
            });
        });

        console.log(resultCart);

        state.cartList = resultCart;
    },

    async deleteCart(state, deletedCart) {
        console.log(deletedCart);

        await requestDeleteCart(deletedCart);
        router.go();
    },

    async checkedDeleteCartList(state, checkedCartList) {
        await requestCheckedDeleteCartList(checkedCartList);
        router.go();
    },

    containWishList(state, goodsCodeArr) {
        console.log("containWishList : " + goodsCodeArr);

        const wishListApi = new WishListApi();
        wishListApi.addGoods(goodsCodeArr);
    },

    async changeQuantity(state, changeCart) {
        await requestChangeQuantity(changeCart);
        router.go();
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