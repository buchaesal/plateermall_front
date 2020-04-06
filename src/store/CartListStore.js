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
        const cartList = await requestCartList(state.userInfo.email);

        if (cartList.length === 0) {
            state.cartList = [];
            return;
        }

        let goodsCodeArr = [];

        let goodsApi = new GoodsApi();

        cartList.map((cart) => {
            goodsCodeArr.push(cart.goodsCode);
        });

        const goodsList = await goodsApi.getCartGoodsList(goodsCodeArr);

        let resultCart = [];

        cartList.forEach(function(cart) {
            goodsList.forEach(function(goods) {
                if(cart.goodsCode === goods.goodsCode){
                    cart.imgUrl = goods.imgUrl;
                    cart.seller = goods.seller;
                    cart.title = goods.title;
                    cart.originalPrice = goods.originalPrice;
                    cart.shippingFee = goods.shippingFee;
                    cart.dcRate = goods.dcRate;
                    cart.benefitPrice = goods.benefitPrice;
                    resultCart.push(cart);
                }
            });
        });

        context.commit('getCartList', resultCart);
    },

    deleteCart(context, deletedCart) {
        console.log(deletedCart);

        requestDeleteCart(deletedCart)
            .then(() => {
                context.dispatch('getCartList');
            }).catch(function(error) {
                console.log(error);
            });
    },

    checkedDeleteCartList(context, checkedCartList) {
        requestCheckedDeleteCartList(checkedCartList)
            .then(() => {
                context.dispatch('getCartList');
            }).catch(function(error) {
                console.log(error);
            });
    },

    changeQuantity(context, changeCart) {
        requestChangeQuantity(changeCart)
            .then(() => {
                alert("수량이 변경되었습니다.");
                context.dispatch('getCartList');
            });
    },

    containWishList(context, goodsCodeArr) {
        console.log("containWishList : " + goodsCodeArr);

        const wishListApi = new WishListApi();
        wishListApi.addGoodsWishList(goodsCodeArr)
            .then(() => {
                alert(goodsCodeArr.length + "개의 상품이 위시 리스트에 담겼습니다.");
            });
    },

    async getLoginUserInfo(context) {
        let userInfo = await getCurrentUserInfo();

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