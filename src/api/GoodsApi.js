import request, {GOODS_URL} from './axios';
import GoodsSetApiModel from './model/GoodsSetApiModel';
import CategoryGoodsSetApiModel from './model/CategoryGoodsSetApiModel';

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

    getCategoryGoodsList(categoryCode, sort) {
        let categoryGoodsSetApiModel = new CategoryGoodsSetApiModel(categoryCode, sort);
        return request.get(GOODS_URL + `/categorygoodslist`, {params: categoryGoodsSetApiModel}).then(
            (response) => {
                return response.data;
            }
        ).catch(function (error) {
            console.log(error);
        });
    }

    getSearchResultGoodsList(query) {
        return request.post(GOODS_URL + `/searchresultlist`, query).then(
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
