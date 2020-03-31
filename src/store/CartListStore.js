import {requestCartList, requestDeleteCart, requestCheckedDeleteCartList, requestChangeQuantity} from '../api/CartListApi'
import GoodsApi from '../api/GoodsApi'
//import CartListModel from "../components/my/model/CartListModel";
import WishListApi from "../api/WishListApi";
import {getCurrentUserInfo} from "../api/UserApi";

const state = {
    cartList: [],
    userInfo: {}
}

const getters = {

}

const mutations = {
    getCartList(state, resultCart) {
        state.cartList = resultCart;
    },

    getLoginUserInfo(state, userInfo) {
        state.userInfo = userInfo;
    }
}

const actions = {
    async getCartList(context) {
        const cartList = await requestCartList(state.userInfo.email).then(
            (response) => {
                return response.data;
            }
        ).catch(function (error) {
            console.log(error);
        });

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

        context.commit('getCartList', resultCart);
    },

    async deleteCart(context, deletedCart) {
        console.log(deletedCart);

        await requestDeleteCart(deletedCart)
            .then(() => {
                context.dispatch('getCartList');
            }).catch(function(error) {
                console.log(error);
            });
    },

    async checkedDeleteCartList(context, checkedCartList) {
        await requestCheckedDeleteCartList(checkedCartList)
            .then(() => {
                context.dispatch('getCartList');
            }).catch(function(error) {
                console.log(error);
            });
    },

    async changeQuantity(context, changeCart) {
        await requestChangeQuantity(changeCart)
            .then(() => {
                alert("수량이 변경되었습니다.");
                context.dispatch('getCartList');
            });
    },

    async containWishList(context, goodsCodeArr) {
        console.log("containWishList : " + goodsCodeArr);

        const wishListApi = new WishListApi();
        await wishListApi.addGoodsWishList(goodsCodeArr)
            .then(() => {
                alert(goodsCodeArr.length + "개의 상품이 위시 리스트에 담겼습니다.");
            });
    },

    async getLoginUserInfo(context) {
        let userInfo = await getCurrentUserInfo();
        console.log("email : ", userInfo.email);

        context.commit('getLoginUserInfo', userInfo);
    }
}

export default {
    namespace: false,
    state,
    getters,
    mutations,
    actions
}