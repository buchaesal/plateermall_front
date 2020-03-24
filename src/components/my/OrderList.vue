<template>
    <div>
        <div class="order_header">
            <FaqHeader :title="'주문배송조회'"></FaqHeader>
        </div>
        <OrderStatusBox></OrderStatusBox>
        <hr>

        <div class="my-order-list">
            <NoItem v-if="sampleData.length<1"></NoItem>
            <div v-else>
                <div v-for="(cart, index) in sampleData" v-bind:key="index" class="goods-list">
                    <div class="my-order-list-title">
                        <p class="order-date">날짜넣기</p>
                        <a href="#" class="order-detail">자세히보기 ></a>
                    </div>

                    <div class="my-order-list-goods">
                        <sui-checkbox class="goods-checkbox"/>
                        <span class="goods-img">
                        <img :src="cart.imgUrl">
                    </span>
                        <div class="my-order-list-info">
                            <p>{{cart.seller}}</p>
                            <p>{{cart.title}}</p>
                            <p>수량 가져오기</p>
                            <p>주문 진행상태 보여주기</p>
                        </div>
                        <span class="my-order-list-price">{{priceFormatting(cart.originalPrice)}}원</span>
                        <div class="my-order-list-button">
                            <button class="btn1" @click="changeDeliveryAddress">배송지변경</button>
                            <button>주문취소</button>
                        </div>
                    </div>
                    <hr>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FaqHeader from "../faq/FaqHeader";
    import OrderStatusBox from "./OrderStatusBox";
    import NoItem from "../share/NoItem";
    import OrderApi from "../../api/OrderApi";

    export default {
        name: "OrderList",
        data() {
            return {
                checkedIndexList: [],
                sampleData: [
                    {
                        cartCode: "code1",
                        userId: "1",
                        cartStock: 5,
                        imgUrl: "https://image.ellotte.com/ellt.static.lotteeps.com/goods/img/71/17/50/01/12/1201501771_mast.jpg/chg/resize/160x160/extent/160x160/optimize",
                        goodsCode: "123",
                        seller: "판매자1",
                        title: "필립스(아울렛)\n" +
                            "필립스 소닉케어 다이아몬드 클린 매트화이트 HX9338/04\n" +
                            "모델명:HX9338/04",
                        originalPrice: 1206000,
                        dcRate: 3.5,
                        saleCnt: 5
                    }
                    ,
                    {
                        cartCode: "code1",
                        userId: "1",
                        cartStock: 5,
                        imgUrl: "https://image.ellotte.com/ellt.static.lotteeps.com/goods/img/71/17/50/01/12/1201501771_mast.jpg/chg/resize/160x160/extent/160x160/optimize",
                        goodsCode: "123",
                        seller: "판매자1",
                        title: "필립스(아울렛)\n" +
                            "필립스 소닉케어 다이아몬드 클린 매트화이트 HX9338/04\n" +
                            "모델명:HX9338/04",
                        originalPrice: 1206000,
                        dcRate: 3.5,
                        saleCnt: 5
                    }
                ],
            }
        },
        methods: {
            priceFormatting(price) {
                return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            },
            changeDeliveryAddress(){
                this.$router.push('/deliveryanduserinfomanagement');
            },
            test(){
                let orderApi = new OrderApi();
                orderApi.getOrderList()
                .then((result) => console.log(result));
            }
        },
        components: {
            FaqHeader,
            OrderStatusBox,
            NoItem
        }
    }
</script>

<style scoped>
    .order_header {
        border-top: 3px solid #000;
        border-bottom: 1px solid rgba(179, 179, 179, 0.58);
    }


    .my-order-list-title {
        background-color: GhostWhite;
        display: inline-block;
        padding: 8px 30px;
        width: 100%;
    }

    .order-date {
        display: inline-block;
        float: left;
        margin-top: 9px;
        color: black;
    }

    .order-detail {
        float: right;
        margin-top: 9px;
        color: black;
    }

    .my-order-list-goods {
        margin: 20px 0;
        background-color: white;
        font-size: 0.8rem;
    }

    .goods-checkbox {
        float: left;
        margin: 60px 30px 0 30px;
    }

    .goods-img {
        vertical-align: middle;
    }

    .goods-img img {
        width: 150px;
        height: auto
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
        vertical-align: middle
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

</style>