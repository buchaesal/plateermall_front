<template>
    <div>
        <div class="order-box-div">
            <ul class="total-order-box">
                <li class="order-box">
                    <a href="#" class="order-quantity">0</a>
                    <p class="order-state">주문접수</p>
                </li>
                <li class="order-box">
                    <sui-icon name="chevron right" class="search_btn" size="big" color="grey"/>
                </li>
                <li class="order-box">
                    <a href="#" class="order-quantity">0</a>
                    <p class="order-state">결재완료</p>
                </li>
                <li class="order-box">
                    <sui-icon name="chevron right" class="search_btn" size="big" color="grey"/>
                </li>
                <li class="order-box">
                    <a href="#" class="order-quantity">0</a>
                    <p class="order-state">배송준비중</p>
                </li>
                <li class="order-box">
                    <sui-icon name="chevron right" class="search_btn" size="big" color="grey"/>
                </li>
                <li class="order-box">
                    <a href="#" class="order-quantity">0</a>
                    <p class="order-state">배송중</p>
                </li>
                <li class="order-box">
                    <sui-icon name="chevron right" class="search_btn" size="big" color="grey"/>
                </li>
                <li class="order-box">
                    <a href="#" class="order-quantity">0</a>
                    <p class="order-state">배송완료</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "OrderStatusBox"
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