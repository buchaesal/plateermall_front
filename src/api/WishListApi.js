
class WishListApi {
    wishList = [];

    constructor() {
        this.wishList.push('1203917700')
    }

    getWishList(){
        return this.wishList;
    }
}

export default WishListApi;