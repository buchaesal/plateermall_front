<template>
    <div>
        <div class="order_header">
            <FaqHeader :title="'주문배송조회'"></FaqHeader>
        </div>
        <OrderStatusBox @select-status="setSpecificStateOrderList"></OrderStatusBox>
        <hr>

        <div class="my-order-list">
            <NoItem v-if="orderList.length==0" :message="noItemMessage"></NoItem>
            <sui-loader active centered inline v-else-if="orderList[0].orderId == ''"/>
            <div v-else>
                <div v-for="(goods, index) in goodsInOrderList" v-bind:key="index" class="goods-list">
                    <div class="my-order-list-title">
                        <p class="order-date">{{orderList[index].orderState.stateChangeDate}}</p>
                        <router-link href="#" to="/order/orderDetail" class="order-detail">자세히보기 ></router-link>
                    </div>

                    <div class="my-order-list-goods">
                        <sui-checkbox class="goods-checkbox"/>
                        <span class="goods-img">
                        <img :src="goods.imgUrl">
                    </span>

                        <div class="my-order-list-info">
                            <p>{{goods.seller}}</p>
                            <p>{{goods.title}}</p>
                            <p>{{orderList[index].goodsCount}}</p>
                            <p>{{orderList[index].orderState.orderState}}</p>
                        </div>
                        <span class="my-order-list-price">{{orderList[index].orderPrice}}원</span>
                        <div class="my-order-list-button">
                            <button class="btn1" @click="changeDeliveryAddress">배송지변경</button>
                            <button @click="cancelOrder(index)">주문취소</button>
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
    import {getOrderList, changeState, getSpecificStatusOrderList} from "../../api/OrderApi";
    import GoodsApi from "../../api/GoodsApi";
    import {getCurrentUserInfo} from "../../api/UserApi";

    export default {
        name: "OrderList",
        data() {
            return {
                noItemMessage: "데이터가 없습니다.",
                checkedIndexList: [],
                goodsApi : new GoodsApi(),
                orderList: [{
                    orderId : '',
                    userId : '',
                    goodsId : '',
                    goodsCount: -1,
                    orderPrice : '',
                    orderState : {
                        orderId : '',
                        stateChangeDate : '',
                        orderState : '',
                    },
                }],
                goodsInOrderList: [],
            }
        },
        methods: {
            changeDeliveryAddress(){
                this.$router.push('/deliveryanduserinfomanagement');
            },
            async getOrderList(){
                let userData = await getCurrentUserInfo();
                this.$store.dispatch('updateOrderCount', userData);
                this.orderList = await getOrderList(userData.email);
                this.setGoodsList(this.orderList);
            },
            async setGoodsList(orderList){
                for(let order in orderList){
                    this.goodsInOrderList.push(await this.goodsApi.getGoods(orderList[order].goodsId));
                }
            },
            async cancelOrder(index){
                await changeState('normal', 'cancel', this.orderList[index].orderId);
                this.cleanData();
                await this.getOrderList();
                alert("주문이 취소되었습니다.")
            },
            async setSpecificStateOrderList(state){
                this.cleanData();

                let userData = await getCurrentUserInfo();
                this.orderList = await getSpecificStatusOrderList("normal", state, userData.email);
                this.setGoodsList(this.orderList);
                
            },
            cleanData() {
                this.orderList = [{
                    orderId : '',
                    userId : '',
                    goodsId : '',
                    goodsCount: -1,
                    orderPrice : '',
                    orderState : {
                        orderId : '',
                        stateChangeDate : '',
                        orderState : '',
                    },
                }];
                this.goodsInOrderList = [];
            }
        },
        components: {
            FaqHeader,
            OrderStatusBox,
            NoItem
        },
        created: function() {
            this.getOrderList();
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