class OrderStateModel {
    orderId = '';
	stateChangeDate = '';
	orderState = '';

    constructor(orderId, stateChangeDate, orderState){
        this.orderId = orderId;
        this.stateChangeDate = stateChangeDate;
        this.orderState = orderState;
    }
}

export default OrderStateModel;