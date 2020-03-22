import GoodsStore from './GoodsStore';
import CartListStore from "./CartListStore";
import CommentStore from './CommentStore';
import RecentSawListStore from "./RecentSawListStore";
import ShippingSpotListStore from './ShippingSpotListStore';
import PurchaseHistoryStore from './PurchaseHistoryStore';
import WishListStore from "./WishListStore";

import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        goodsStore: GoodsStore,
        cartListStore: CartListStore,
        commentStore: CommentStore,
        recentSawListStore: RecentSawListStore,
        shippingSpotListStore: ShippingSpotListStore,
        purchaseHistoryStore: PurchaseHistoryStore,
        wishListStore: WishListStore,

    }
})