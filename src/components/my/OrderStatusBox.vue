<template>
    <div>
        <div class="order-box-div">
            <ul class="total-order-box">
                <li class="order-box" @click="selectStatus('order-complete')">
                    <a href="#" class="order-quantity">{{orderCompleteCount}}</a>
                    <p class="order-state">주문접수</p>
                </li>
                <li class="order-box">
                    <sui-icon name="chevron right" class="search_btn" size="big" color="grey"/>
                </li>
                <li class="order-box" @click="selectStatus('payment-complete')">
                    <a href="#" class="order-quantity">{{paymentCompleteCount}}</a>
                    <p class="order-state">결제완료</p>
                </li>
                <li class="order-box">
                    <sui-icon name="chevron right" class="search_btn" size="big" color="grey"/>
                </li>
                <li class="order-box" @click="selectStatus('shipping-ready')">
                    <a href="#" class="order-quantity">{{shippingReadyCount}}</a>
                    <p class="order-state">배송준비중</p>
                </li>
                <li class="order-box">
                    <sui-icon name="chevron right" class="search_btn" size="big" color="grey"/>
                </li>
                <li class="order-box" @click="selectStatus('shipping')">
                    <a href="#" class="order-quantity">{{shippingCount}}</a>
                    <p class="order-state">배송중</p>
                </li>
                <li class="order-box">
                    <sui-icon name="chevron right" class="search_btn" size="big" color="grey"/>
                </li>
                <li class="order-box" @click="selectStatus('shipping-complete')">
                    <a href="#" class="order-quantity">{{shippingCompleteCount}}</a>
                    <p class="order-state">배송완료</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {getCurrentUserInfo} from "../../api/UserApi";

    export default {
        name: "OrderStatusBox",
        computed: {
            orderCompleteCount: function () {
                return this.$store.state.orderStateStore.orderCompleteCount;
            },
            paymentCompleteCount: function() {
                return this.$store.state.orderStateStore.paymentCompleteCount;
            },
            shippingReadyCount: function () {
                return this.$store.state.orderStateStore.shippingReadyCount;
            },
            shippingCount: function () {
                return this.$store.state.orderStateStore.shippingCount;
            },
            shippingCompleteCount: function () {
                return this.$store.state.orderStateStore.shippingCompleteCount;
            }
        },
        methods: {
            async setStateCounts() {
                let userData = await getCurrentUserInfo();
                this.$store.dispatch('updateOrderCount', userData);
            },
            selectStatus(status) {
                this.$emit("select-status", status)
            }
        },
        created() {
            this.setStateCounts();
        }
    }
</script>

<style scoped>
    .order-box-div {
        text-align: center;
        height: 120px;
        padding-left: 8%;
        background-color: GhostWhite;
        margin: 20px 0;
    }

    .total-order-box {
        list-style: none;
        padding: 0;
    }

    .order-quantity {
        font-weight: bold;
        font-size: 30px;
        text-decoration: none;
        color: black;
    }

    .order-box {
        float: left;
        height: 150px;
        padding-top: 35px;
        /*position: relative;*/
        width: 10%;
    }

    .order-state {
        margin-top: 15px;
    }
</style>