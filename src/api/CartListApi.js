class CartListApi {
    cartList = [];

    constructor() {
        cartList.push(new CartListModel("code1", 1));
        cartList.push(new CartListModel("code2", 2));
        cartList.push(new CartListModel("code3", 3));
    }
    getCartList() {
        return this.cartList;
    }
}

export default CartListApi;