import GoodsStore from './GoodsStore';
import CartListStore from "./CartListStore";
import CommentStore from './CommentStore';
import RecentSawListStore from "./RecentSawListStore";
import ShippingSpotListStore from './ShippingSpotListStore';
import CancelExchangeReturnStore from './CancelExchangeReturnStore';
import PurchaseHistoryStore from './PurchaseHistoryStore';
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
        cancelExchangeReturnStore: CancelExchangeReturnStore,
        purchaseHistoryStore: PurchaseHistoryStore,
    }
})