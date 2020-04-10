class OrderModel {
    orderId = '';
	userId = '';
	goodsId = '';
	goodsCount = 0;
	orderPrice = '';
	orderDate = '';
	selectedOptions = '';
	
    orderState = {
        orderState: ''
    };
    orderDeliveryInfo = {
        orderId : '',
        roadAddress : '',
        zipcodeAddress : '',
        remainAddress : '',
        receiverName : '',
        message : '',
        contactNumber : '',
        phoneNumber : '',
    };
    orderPaymentInfo = {
        originalPrice : 0,
        discountPrice : 0,
        paymentPrice : 0,
        orderOriginalPrice : {
            orderId : '',
            goodsPrice : '',
            shippingPrice : '',
        },
        //list임
        orderDiscountPriceList : [{
            orderId : '',
            discountName : '',
            discountPrice : '',
        }],
        orderCardPayment : {
            orderId : '',
            cardName : '',
            installments : '', //일시불이면 0으로 하셈
        },
    };
    orderPointInfo = {
        orderId : '',
        orderComplete : '', //주문 완료되면 적립되는 포인트
        writeComment : '', //상품평 작성되면 적립되는 포인트 
    };
    

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