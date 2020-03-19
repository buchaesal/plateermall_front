import GoodsApi from '../api/GoodsApi';

const state = {
    goodsList:[],
    // codeList:[]
}

// const getters = {
//     setListLength(state) {
//         return state.goodsList.length;
//     }
// }

const mutations ={
    async addSawList(state, goodsCode){
        // this.$store.commit('getGoodsModel');
        // let addList = state.codeList;
        // addList.push(goodsCode);
        // state.codeList = addList;

        let goodsList = state.goodsList;
        goodsList.push(await new GoodsApi().getGoods(goodsCode));
        state.goodsList = goodsList;
    }

}

export default {
    state,
    mutations,
    // getters
}