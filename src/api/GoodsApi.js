import request, {GOODS_URL} from './axios';
import GoodsSetApiModel from './model/GoodsSetApiModel';

class GoodsApi {
    getGoods(goodsCode) {
        return request.get(GOODS_URL + `/${goodsCode}`).then(
            (response) => {
                return response.data;
            }
        ).catch(function (error) {
            console.log(error);
        });
    }

    getGoodsList(categoryCode, quantity) {
        let goodsSetApiModel = new GoodsSetApiModel(categoryCode, quantity);
        return request.get(GOODS_URL + `/goodslist`, {params: goodsSetApiModel}).then(
            (response) => {
                return response.data
            }
        ).catch(function (error) {
            console.log(error);
        });
    }

    getPageGoodsList(query) {
        return request.post(GOODS_URL + `/pagegoodslist`, query).then(
            (response) => {
                return response.data;
            }
        ).catch(function (error) {
            console.log(error);
        });
    }

    getCartGoodsList(goodsCodeList) {
        return request.post(GOODS_URL + `/goodslist/cart/`, goodsCodeList).then(
            (response) => {
                return response.data
            }
        ).catch(function (error) {
            console.log(error);
        });
    }

}

export default GoodsApi;
