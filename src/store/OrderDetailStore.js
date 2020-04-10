import OrderModel from "../components/my/model/OrderModel";
import {getCurrentUserInfo} from '../../src/api/UserApi.js';
import {order} from '../../src/api/OrderApi.js';

const state = {
    
    priceInfo:{
        originalPrice:0, //상품금액
        discountPrice:0, //할인금액
        paymentPrice:0, //총 결제금액
        shippingPrice:0, //배송비
        savePoint:0, 
    },
    defaultAddress:'', //선택된 배송지
    customerName:'', //주문자
    isChecked:false, //동의여부
    goodsInfo:[],
    deliveryMessage:'',
    discountInfo:[],
    cardInfo:{
        cardName: '',
        installment:'',
    },
}

const getters = {}

const mutations = {
    loadOriginalPrice(state, priceInfo){
        state.isChecked = false;
        state.discountInfo=[];
        state.goodsInfo=[];

        state.priceInfo.originalPrice = priceInfo.allPrice;
        state.priceInfo.shippingPrice = priceInfo.shippingPrice;
        state.priceInfo.discountPrice = priceInfo.discountPrice*1;
        state.priceInfo.paymentPrice = priceInfo.allPrice - priceInfo.discountPrice + priceInfo.shippingPrice;
        state.priceInfo.savePoint = Math.round(state.priceInfo.paymentPrice*5/1000);
    },

    changeDiscountPrice(state, info){

        if(info.discountName != 'copy'){
            state.discountInfo.push({
                orderId: '', 
                discountName: info.discountName, 
                discountPrice: info.price/(state.goodsInfo.length),
            });
        }

        state.priceInfo.discountPrice += info.price*1;
        state.priceInfo.paymentPrice = state.priceInfo.originalPrice - state.priceInfo.discountPrice + state.priceInfo.shippingPrice;
    },

    loadDefaultAddress(state, address){
        state.defaultAddress = address;
    },

    loadCustomerName(state, name){
        state.customerName = name;
    },

    changeCheckedValue(state, value){
        state.isChecked = value;
    },

    loadGoodsInfo(state, goodsInfo){
        state.goodsInfo = goodsInfo;
        console.log(state.goodsInfo);
    },

    loadDeliveryMessage(state, message){
        state.deliveryMessage = message;
    },

    loadCardInfo(state, cardInfo){
        state.cardInfo = cardInfo;
    },

    async addOrder(state, orderModel){
        console.log(orderModel);
        await order(orderModel);
    }
}

const actions = {
    async ADD_ORDER(context){
        console.log("add order");
        
        //let orderCount = state.goodsInfo.length;

        console.log(context.state.goodsInfo,'goodsInfo');
        for(let index in context.state.goodsInfo){
            let orderModel = new OrderModel();
            let user = await getCurrentUserInfo();
            
            orderModel.orderId = "";
            orderModel.userId = user.email;
            orderModel.goodsId = context.state.goodsInfo[index].goodsId;
            orderModel.selectedOptions = context.state.goodsInfo[index].selectedOptions;
            orderModel.goodsCount = context.state.goodsInfo[index].goodsCount;
            orderModel.orderPrice = context.state.goodsInfo[index].orderPrice;
            orderModel.orderDate = new Date().toISOString().slice(0,10);
            orderModel.orderState = null;

            orderModel.orderDeliveryInfo={
                orderId :'',
                roadAddress : context.state.defaultAddress.roadAddress,
                zipcodeAddress : context.state.defaultAddress.zipcodeAddress,
                remainAddress : context.state.defaultAddress.remainAddress,
                receiverName : context.state.defaultAddress.receiver,
                message : context.state.deliveryMessage,
                contactNumber : context.state.defaultAddress.contactNumber,
                phoneNumber : context.state.defaultAddress.phoneNumber,
            };

            orderModel.orderPaymentInfo={
                originalPrice : 0,
                discountPrice : 0,
                paymentPrice : 0,

                orderOriginalPrice : { 
                    orderId : '',
                    goodsPrice : context.state.goodsInfo[index].originalPrice,
                    shippingPrice : context.state.goodsInfo[index].shippingFee,
                },

                orderDiscountPriceList : context.state.discountInfo,
                orderCardPayment: context.state.cardInfo,

            };

            orderModel.orderPointInfo = {
                orderId : '',
                orderComplete : context.state.priceInfo.savePoint/2,
                writeComment : 200,
            },    

            context.commit('addOrder', orderModel);
        }

    }
}

export default {
    namespace: false,
    state,
    getters,
    mutations,
    actions
}