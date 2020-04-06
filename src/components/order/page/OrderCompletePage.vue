<template>
    <div id="main-page-container">
        <Header></Header>
        <div class="fix-inner order-complete">
            <sui-card>
                <sui-card-content>
                    <sui-card-header>
                        <div class="header">
                            <i class="check circle outline icon"></i>
                            <p class="title">주문해주셔서 감사합니다.</p>
                        </div>
                    </sui-card-header>
                </sui-card-content>
                <sui-card-content>
                    <sui-header size="tiny">
                        <p class="order-number"><span class="tit">주문번호 : </span><span class="num">{{orderId}}</span>
                        </p>
                    </sui-header>
                    <div class="summary">
                        <p class="desc">주문완료 까지는 상황에 따라 다소 시간이 소요될수 있습니다.<br>
                            <b>주문완료시 SMS 또는 카카오톡으로 입금계좌정보를 안내</b>해 드리겠습니다.</p>
                    </div>
                </sui-card-content>
                <sui-card-content extra>
                    <div class="price-box">
                        <p class="cont-title"><strong>결제정보</strong></p>
                        <div class="price-result">
                            <div class="total-wrap">
                                <p class="total">
                                    <span class="total-txt">결제금액</span>
                                    <span class="price"><strong>{{sumOrderPrice.toLocaleString()}}</strong><em>원</em></span>
                                </p>
                                <!-- 결제수단 -->
                                <p class="pay-option">무통장입금(국민은행)</p>
                            </div>
                        </div>
                        <ul class="price-detail">
                            <li>
                                <span class="item">상품금액</span>
                                <span class="price">{{sumOriginalPrice.toLocaleString()}} 원</span>
                            </li>
                            <li>
                                <span class="item">배송비</span>
                                <span class="price">+ {{sumShippingFee.toLocaleString()}} 원</span>
                            </li>
                            <li>
                                <span class="item">할인금액</span>
                                <span class="price">- {{sumDiscountPrice.toLocaleString()}} 원</span>
                            </li>
                        </ul>
                        <div class="saving-point">
                            <span>적립 예정 포인트 {{point.toLocaleString()}}점</span>
                            <ul class="bull-list-dash">
                                <li>적립 예정 포인트는 상품 발송 2일 후 자동 지급됩니다.</li>
                                <li>실제 적립된 금액은 예상 금액과 다를 수 있습니다.</li>
                            </ul>
                        </div>
                    </div>
                </sui-card-content>
                <sui-card-content extra>
                    <sui-button-group class="two detail-or-home">
                        <sui-button color="black" content="주문상세보기" @click="goToOrderDetail"></sui-button>
                        <sui-button color="blue" content="홈으로 이동" @click="goToHome"></sui-button>
                    </sui-button-group>
                </sui-card-content>
            </sui-card>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "../../share/Header";
    import Footer from "../../share/Footer";
    import OrderModel from "../../my/model/OrderModel";
    import {order} from "../../../api/OrderApi";
    import {addCommentStatus} from "../../../api/CommentApi";
    import {getCurrentUserInfo} from '../../../api/UserApi'

    export default {
        name: "OrderCompletePage",
        components: {
            Header,
            Footer,
        },
        data() {
            return {
                orderId: "",
                isCartOrder: false,
                sumOrderPrice: 0,
                sumOriginalPrice: 0,
                sumDiscountPrice: 0,
                sumShippingFee: 0,
                point: 0,
                orderData: {},
                user: {},
            }
        },
        methods: {
            isEmpty(obj) {
                if (
                    obj === null ||
                    obj === undefined ||
                    obj === "" ||
                    obj.length < 1
                ) {
                    return true;
                } else {
                    return false;
                }
            },
            pricing(orderData) {
                for (let option of orderData.selectedGoods) {
                    this.sumOriginalPrice += option.originalPrice * option.quantity;
                    this.sumDiscountPrice += (option.originalPrice / 100 * option.dcRate);
                    this.sumShippingFee += option.shippingFee;
                }

                this.sumOrderPrice = this.sumOriginalPrice + this.sumShippingFee - this.sumDiscountPrice;
                this.point = Math.ceil((this.sumOriginalPrice - this.sumDiscountPrice) / 1000);
            },
            cartPricing(orderData) {
                for (let goods of orderData) {
                    let quantity = goods.quantity;
                    let option = goods.goods;
                    this.sumOriginalPrice += option.originalPrice * quantity;
                    this.sumDiscountPrice += (option.originalPrice / 100 * option.dcRate);
                    this.sumShippingFee += option.shippingFee;
                }

                this.sumOrderPrice = this.sumOriginalPrice + this.sumShippingFee - this.sumDiscountPrice;
                this.point = Math.ceil((this.sumOriginalPrice - this.sumDiscountPrice) / 1000);
            },
            goToOrderDetail() {
                this.$router.push("/orderList");
            },
            goToHome() {
                this.$router.push("/");
            },

            async requestOrder() {
                console.log("주문 요청")
                let today = new Date();
                let year = today.getFullYear();
                let month = today.getMonth() + 1;
                let date = today.getDate();

                month = month < 10 ? '0' + month : month;
                date = date < 10 ? '0' + date : date;

                today = year + "-" + month + "-" + date;

                if (this.isCartOrder) {
                    for (let cart of this.orderData) {
                        let option = cart.text;
                        let orderModel = new OrderModel('', this.user.email, cart.goodsCode, cart.quantity, (cart.goods.benefitPrice * cart.quantity).toString(), today, null, option);
                        this.orderId = await order(orderModel);

                        await addCommentStatus({
                            "orderId": this.orderId,
                            "userId": this.user.email,
                            "isWritten": "N"
                        });
                    }
                } else {
                    let goodsCode = this.orderData.goodsCode;
                    for (let goods of this.orderData.selectedGoods) {
                        let orderModel = new OrderModel('', this.user.email, goodsCode, goods.quantity, (goods.benefitPrice * goods.quantity).toString(), today, null, goods.text);
                        this.orderId = await order(orderModel);

                        await addCommentStatus({
                            "orderId": this.orderId,
                            "userId": this.user.email,
                            "isWritten": "N"
                        });
                    }
                }
            }
        },
        async created() {
            this.user = await getCurrentUserInfo();
            this.orderData = this.$route.params.orderData;
            if (!this.isEmpty(this.orderData)) {
                if (this.isEmpty(this.orderData.goodsCode)) {
                    // 카트 주문
                    this.isCartOrder = true;
                    this.orderData = this.orderData.selectedGoods;
                    this.cartPricing(this.orderData);
                } else {
                    // 바로 주문
                    this.pricing(this.orderData);
                }
                this.requestOrder()
            } else {
                this.goToOrderDetail();
            }
        }
    }
</script>

<style scoped>
    .fix-inner {
        text-align: center;
        width: 1200px;
        margin: 0 auto;
        margin-top: 185px;
        padding-top: 80px;
        padding-bottom: 80px;
    }

    ul {
        list-style: none;
    }

    .card {
        display: inline-block;
        width: 590px;
    }

    .header {
        text-align: center;
        margin-top: 3rem;
    }

    .icon {
        font-size: 5rem;
        color: lightgray;
    }

    .title {
        font-size: 18px;
        font-weight: 300;
    }

    .order-number {
        text-align: center;
    }

    .summary {
        text-align: center;
        padding: 20px;
        width: 100%;
        box-sizing: border-box;
        font-size: 14px;
        font-weight: 300;
        color: #666;
        background-color: #fafafa;
    }

    .cont-title {
        color: black;
        padding: 12px 0 16px;
        font-size: 24px;
        border-bottom: 1px solid #000;
        text-align: left;
    }

    .price-result .total-txt {
        display: table-cell;
        width: 30%;
        font-size: 16px;
        color: #666;
        text-align: left;
        vertical-align: middle;
    }

    .price-result .total {
        display: table;
        table-layout: fixed;
        width: 100%;
        color: black;
    }

    .price-result .pay-option {
        margin-top: 6px;
        font-size: 13px;
        text-align: right;
        color: black;
    }

    .price-result .price {
        display: table-cell;
        width: 70%;
        text-align: right;
    }

    .price strong {
        font-size: 24px;
        font-weight: 500;
    }

    .total-wrap {
        padding: 20px 24px 16px;
    }

    .price-detail {
        padding: 22px 24px;
        background-color: #fafafa;
    }

    .price-detail > li {
        margin-top: 6px;
        font-size: 14px;
        color: #666;
        text-align: left;
    }

    .price-detail .price {
        float: right;
        color: black;
    }

    .saving-point {
        color: #8d685a;
        text-align: right;
        display: block;
        margin: 0;
        font-size: 12px;
        font-weight: 300;
    }

    .detail-or-home {
        text-align: center;
        height: 4rem;
    }

    .detail-or-home .button {
        font-size: 1.3rem;
    }
</style>