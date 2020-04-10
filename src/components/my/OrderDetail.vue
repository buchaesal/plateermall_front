<template>
    <div>
        <div class="detail_content">
            <div class="order_header">
                <FaqHeader :title="'주문배송상세'"></FaqHeader>
            </div>
            <div class="order-detail-header">
                <p>주문번호 {{orderDetail.orderId}} (주문일: {{orderDetail.orderDate}}, 주문자: {{currentUser.name}})</p>
            </div>
            <div class="my-order-list">
                <div>
                    <div class="goods-list">
                        <div class="my-order-list-goods">
                    <span class="goods-img">
                        <img :src="goods.imgUrl">
                    </span>
                            <div class="my-order-list-info">
                                <p class="font-emphasis" style="margin-bottom: 0">{{goods.seller}}</p>
                                <p class="font-emphasis" @click="goGoodsDetailPage" style="cursor: pointer">
                                    {{goods.title}}</p>
                                <p>옵션 {{orderDetail.selectedOptions}}</p>
                                <p>수량 {{orderDetail.goodsCount}}개</p>
                                <p>{{orderState}}</p>
                            </div>
                            <div style="float: right;">
                                <span class="my-order-list-price font-emphasis">{{Number(orderDetail.orderPaymentInfo.orderOriginalPrice.goodsPrice).toLocaleString()}}원</span>
                                <div class="my-order-list-button">
                                    <button class="btn1" @click="apply('return')">반품접수</button>
                                    <button class="btn1" @click="apply('exchange')">교환접수</button>
<!--                                    <button>상품평보기</button>-->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="delivery_cost">
            <p>배송비 {{Number(orderDetail.orderPaymentInfo.orderOriginalPrice.shippingPrice).toLocaleString()}}원</p>
        </div>
        <div class="delivery_info">
            <div class="tb_container">
                <table class="info_tb">
                    <tr>
                        <td class="tb_title">배송지</td>
                        <td><p style="font-weight: bold">{{orderDetail.orderDeliveryInfo.receiverName}}</p>
                            <p>{{orderDetail.orderDeliveryInfo.roadAddress}}</p>
                            <p>({{orderDetail.orderDeliveryInfo.zipcodeAddress + '' +
                                orderDetail.orderDeliveryInfo.remainAddress}})</p>
                            <p>
                                {{orderDetail.orderDeliveryInfo.contactNumber+'/'+orderDetail.orderDeliveryInfo.phoneNumber}}</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="tb_title">배송메시지</td>
                        <td>{{orderDetail.orderDeliveryInfo.message}}</td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="order_header">
            <FaqHeader :title="'결제/할인 정보'"></FaqHeader>
        </div>
        <table class="pay_table" v-if="orderDetail.orderPaymentInfo.discountPrice">
            <tr class="first_line">
                <td><p>총 주문금액 : {{orderDetail.orderPaymentInfo.originalPrice.toLocaleString()}}원</p></td>
                <td><p>총 할인금액 : -{{orderDetail.orderPaymentInfo.discountPrice.toLocaleString()}}원</p></td>
                <td><p>총 결제금액 : {{Number(orderDetail.orderPaymentInfo.paymentPrice).toLocaleString()}}원</p></td>
            </tr>
            <tr style="height: 120px;">
                <td class="gray_row"><p>상품금액 <span class="num_area">{{Number(orderDetail.orderPaymentInfo.orderOriginalPrice.goodsPrice).toLocaleString()}}원</span>
                </p>
                    <p>배송비 <span class="num_area">{{Number(orderDetail.orderPaymentInfo.orderOriginalPrice.shippingPrice).toLocaleString()}}원</span>
                    </p>
                </td>

                <td class="gray_row">
                    <p v-for="(dcPrice, index) in orderDetail.orderPaymentInfo.orderDiscountPriceList" :key="index">{{dcPrice.discountName}} <span class="num_area">{{Number(dcPrice.discountPrice).toLocaleString()}}원</span></p>
                </td>

                <td class="gray_row"><p>신용카드 <span class="num_area">{{Number(orderDetail.orderPaymentInfo.paymentPrice).toLocaleString()}}원</span>
                </p>
                    <p>({{orderDetail.orderPaymentInfo.orderCardPayment.cardName}})</p>
                </td>
            </tr>
        </table>
        <div class="order_header" style="margin-top: 80px;">
            <FaqHeader :title="'적립(예정)내역'"></FaqHeader>
        </div>
        <table class="pay_table" style="margin-bottom: 30px">
            <tr class="first_line">
                <td><p>배송완료/픽업완료 시</p></td>
                <td><p>상품평/이용후기 작성 시</p></td>
            </tr>
            <tr style="height: 120px;">
                <td class="gray_row"><p>포인트 <span class="num_area">{{Number(orderDetail.orderPointInfo.orderComplete).toLocaleString()}}점</span>
                </p></td>
                <td class="gray_row"><p>포인트 <span class="num_area">{{Number(orderDetail.orderPointInfo.writeComment).toLocaleString()}}점</span>
                </p>
                    <p style="float: right; margin-right: 15px;">(상품평 작성 시 적립)</p></td>
            </tr>
        </table>
        <div style="text-align: center">
            <sui-button @click="goOrderPage">목록으로</sui-button>
        </div>
    </div>
</template>

<script>
    import FaqHeader from "../faq/FaqHeader";
    import {getFullOrder, changeState} from "../../api/OrderApi";
    import {getCurrentUserInfo} from "../../api/UserApi";
    import GoodsApi from "../../api/GoodsApi";
    import OrderModel from "./model/OrderModel";

    export default {
        name: "OrderDetail",
        components: {
            FaqHeader
        },
        data() {
            return {
                orderDetail: new OrderModel(),
                currentUser: {},
                goods: {},
                orderState: '',
            }
        },
        methods: {
            goOrderPage() {
                this.$router.push('/orderList');
            },
            goGoodsDetailPage() {
                this.$router.push(`/goodsDetail/${this.orderDetail.goodsId}`);
            },
            async apply(option) {
                let target = option === 'return' ? '반품' : '교환';
                if (confirm(`${target}신청을 하시겠습니까?`)) {
                    await changeState('normal', option, this.orderDetail.orderId)
                        .then(() => {
                            alert(`${target}신청이 완료되었습니다.`);
                            this.$router.push(`/cancelSearch/${target}`);
                        })
                        .catch(err => console.log(err));
                }

            }
        },
        async created() {
            this.orderDetail = await getFullOrder(this.$route.params.orderId);
            this.orderState = this.orderDetail.orderState.orderState;
            this.currentUser = await getCurrentUserInfo();
            this.goods = await new GoodsApi().getGoods(this.orderDetail.goodsId);
        }
    }
</script>

<style scoped>
    .num_area {
        float: right;
        margin-right: 15px;
        font-weight: bold;
    }

    .first_line {
        height: 60px;
        font-weight: bold;
    }

    .gray_row {
        background-color: #eeeeee;
    }

    .pay_table {
        width: 100%;
    }

    .pay_table p {
        margin-left: 13px;
    }

    .price_list p {
        margin-left: 10px;
        margin-top: 10px;
    }

    .order_header {
        border-top: 3px solid #000;
        border-bottom: 1px solid rgba(179, 179, 179, 0.58);
    }

    .goods-img {
        vertical-align: middle;
    }

    .goods-img img {
        width: 150px;
        height: auto
    }

    .my-order-list-goods {
        margin: 20px 0;
        background-color: white;
        font-size: 0.8rem;
    }

    .my-order-list-info {
        display: inline-block;
        vertical-align: middle;
        margin-left: 40px;
    }

    .my-order-list-price {
        margin: 0 50px;
    }

    .my-order-list-button {
        display: inline-block;
        margin-left: 10px;
        text-align: center;
        vertical-align: middle;

    }

    .btn1 {
        display: block;
    }

    button {
        border-radius: 8px;
        background-color: ghostwhite;
        border: none;
        color: black;
        padding: 10px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 12px;
        margin: 4px 2px;
        cursor: pointer;
    }

    .order-detail-header {
        text-align: center;
        margin-top: 41px;
        font-weight: bold;
    }

    .font-emphasis {
        font-size: 17px;
        font-weight: bold;
    }

    .detail_content {
        border-bottom: 1.2px solid rgba(226, 226, 226, 0.38);
    }

    .delivery_cost {
        float: right;
        margin: 15px;
        width: 996px;
        text-align: right;
    }

    .delivery_info {
        background-color: #f4f4f4;
        border-top: 1.2px solid rgba(226, 226, 226, 0.38);
        border-bottom: 1.2px solid rgba(226, 226, 226, 0.38);
        height: 250px;
        margin-bottom: 76px;
    }

    .tb_title {
        padding: 30px;
        padding-right: 90px;
        font-weight: bold;
        color: #555555;
    }

    .price_box {
        width: 35%;
        float: left;
    }
</style>