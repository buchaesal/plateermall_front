import request, {WISHLIST_URL} from './axios';

class WishListApi {
    addGoodsWish(goodsCode) {
        return request.post(WISHLIST_URL, goodsCode).then(
            (response) => {
                return response.data;
            }
        ).catch(function (error) {
            console.log(error);
        });
    }

    // 모양만 만들어봤슴다...
    deleteGoodsWish(goodsCode) {
        return request.delete(WISHLIST_URL, goodsCode).then(
            (response) => {
                return response.data;
            }
        ).catch(function (error) {
            console.log(error);
        });
    }

    addGoodsWishList(goodsCodeArr) {
        return request.post(WISHLIST_URL + `/list`, goodsCodeArr).then(
            (response) => {
                return response.data;
            }
        ).catch(function (error) {
            console.log(error);
        });
    }

    getWishListGoodsCodes() {
        return request.get(WISHLIST_URL).then(
            (response) => {
                return response.data;
            }
        ).catch(function (error) {
            console.log(error);
        });
    }
}

export default WishListApi;