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
        this.orderId = orderId; // ''
        this.userId = userId; //'testid'
        this.goodsId = goodsId; // 
        this.goodsCount = goodsCount;// 1
        this.orderPrice = orderPrice; //''
        this.orderDate = orderDate; //2020-03-02
        this.selectedOptions = selectedOptions; //사이즈 : 235, 색깔 : 흰색 
        this.orderState = orderState; // null
    }
}

export default OrderModel;