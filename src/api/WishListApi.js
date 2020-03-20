
class WishListApi {
    wishList = [];

    constructor() {
        this.wishList.push('1203917700')
    }

    getWishList(){
        return this.wishList;
    }

    addGoods(goods){
        this.wishList = goods;
    }
}

export default WishListApi;