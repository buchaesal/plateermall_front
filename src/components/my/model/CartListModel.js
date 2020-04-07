class CartListModel {
    userId = "";
    goodsCode = "";
    selectedOptions = [];

    constructor(userId, goodsCode, selectedOptions) {
        this.userId = userId;
        this.goodsCode = goodsCode;
        this.selectedOptions = selectedOptions;
    }
}

export default CartListModel;