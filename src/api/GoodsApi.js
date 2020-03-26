import request, {GOODS_URL_TEST} from './axios';
import GoodsSetApiModel from './model/GoodsSetApiModel';

class GoodsApi {

    getGoods(goodsCode) {
        return request.get(GOODS_URL_TEST+`/${goodsCode}`).then(
            (response) => {
                return response.data;
            }
        ).catch(function (error) {
            console.log(error);
        });
    }

    getGoodsList(categoryCode, quantity) {
        let goodsSetApiModel = new GoodsSetApiModel(categoryCode, quantity);

        return request.get(GOODS_URL_TEST + `/goodslist`, {goodsSetApiModel}).then(
            (response) => {
                return response.data
            }
        ).catch(function (error) {
            console.log(error);
        });
    }

    getCartGoodsList(goodsCodeList) {
        return request.get(GOODS_URL_TEST + `/goodslist/cart/${goodsCodeList}`).then(
            (response) => {
                return response.data
            }
        ).catch(function (error) {
            console.log(error);
        });
    }

}

export default GoodsApi;
