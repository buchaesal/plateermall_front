class OrderModel {
    orderId = '';
	userId = '';
	goodsId = '';
	goodsCount = 0;
	orderPrice = '';
	orderDate = '';
	selectedOptions = '';
	
	orderState = {};

    constructor(orderId, userId, goodsId, goodsCount, orderPrice, orderDate, orderState, selectedOptions){
        this.orderId = orderId;
        this.userId = userId;
        this.goodsId = goodsId;
        this.goodsCount = goodsCount;
        this.orderPrice = orderPrice;
        this.orderDate = orderDate;
        this.selectedOptions = selectedOptions; // ''
        this.orderState = orderState;
    }
}

export default OrderModel;