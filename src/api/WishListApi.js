import request, {WISHLIST_URL} from './axios';

class WishListApi {
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