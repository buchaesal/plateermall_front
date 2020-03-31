import {requestCartList, requestDeleteCart, requestCheckedDeleteCartList, requestChangeQuantity} from '../api/CartListApi'
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
    }
}

const actions = {
    async deleteCart(context, deletedCart) {
        console.log(deletedCart);

        await requestDeleteCart(deletedCart);
        context.commit('getCartList');
    },

    async checkedDeleteCartList(context, checkedCartList) {
        await requestCheckedDeleteCartList(checkedCartList);
        context.commit('getCartList');
    },

    async changeQuantity(context, changeCart) {
        await requestChangeQuantity(changeCart);
        alert("수량이 변경되었습니다.");
        context.commit('getCartList');
    },

    async containWishList(context, goodsCodeArr) {
        console.log("containWishList : " + goodsCodeArr);

        const wishListApi = new WishListApi();
        await wishListApi.addGoodsWishList(goodsCodeArr);
        alert(goodsCodeArr.length + "개의 상품이 위시 리스트에 담겼습니다.");
        context.commit('getCartList');
    },
}

export default {
    namespace: false,
    state,
    getters,
    mutations,
    actions
}