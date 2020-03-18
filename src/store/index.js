import GoodsStore from './GoodsStore';
import CartListStore from "./CartListStore";
import CommentStore from './CommentStore';
import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        goodsStore: GoodsStore,
        cartListStore: CartListStore,
        commentStore: CommentStore,
    }
})