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

    addGoodsWishList(goodsCodeArr) {
        return request.post(WISHLIST_URL + `/list`, goodsCodeArr)
            .then(() => {

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    getWishListGoodsCodes(userId, searchTxt) {
        return request.get(WISHLIST_URL + `/${userId}` + `/${searchTxt}`).then(
            (response) => {
                return response.data;
            }
        ).catch(function (error) {
            console.log(error);
        });
    }

    deleteGoodsWish(goodsCode) {
        return request.delete(WISHLIST_URL + `/${goodsCode}`);
    }
}

export default WishListApi;