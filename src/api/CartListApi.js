import CartListModel from "../components/my/model/CartListModel"

class CartListApi {
    cartList = [];

    constructor() {
        this.cartList.push(new CartListModel("code1", 1));
        this.cartList.push(new CartListModel("code2", 2));

        this.cartList.push()
    }
    getCartList() {
        return this.cartList;
    }
}

export default CartListApi;