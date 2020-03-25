class OrderModel {
    orderId = '';
	userId = '';
	goodsId = '';
	goodsCount = 0;
	orderPrice = '';
	orderDate = '';
	
	orderState = {};

    constructor(orderId, userId, goodsId, goodsCount, orderPrice, orderDate, orderState){
        this.orderId = orderId;
        this.userId = userId;
        this.goodsId = goodsId;
        this.goodsCount = goodsCount;
        this.orderPrice = orderPrice;
        this.orderDate = orderDate;
        this.orderState = orderState;
    }
}

export default OrderModel;