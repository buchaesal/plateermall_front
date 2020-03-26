import request, {GOODS_URL_TEST} from './axios';

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

    getGoodsList(goodsSet) {
        return request.get(GOODS_URL_TEST + `/goodslist/${goodsSet}`).then(
            (response) => {
                return response.data
            }
        ).catch(function (error) {
            console.log(error);
        });
    }

    getCartGoodsList(goodsCodeList) {
        return request.post(GOODS_URL_TEST + `/goodslist/cart/`, goodsCodeList).then(
            (response) => {
                return response.data
            }
        ).catch(function (error) {
            console.log(error);
        });
    }

}

export default GoodsApi;
