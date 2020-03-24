class OrderModel {
    orderId = '';
	userId = '';
	goodsId = '';
	orderPrice = '';
	
	orderState = {};

    constructor(orderId, userId, goodsId, orderPrice, orderState){
        this.orderId = orderId;
        this.userId = userId;
        this.goodsId = goodsId;
        this.orderPrice = orderPrice;
        this.orderState = orderState;
    }
}

export default OrderModel;