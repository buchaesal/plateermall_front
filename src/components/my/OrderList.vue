<template>
    <div>
        <div class="order_header">
         <FaqHeader :title="'주문배송조회'"></FaqHeader>
        </div>
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
    import FaqHeader from "../faq/FaqHeader";

    export default {
        name: "OrderList",
        components: {
            FaqHeader
        }
    }
</script>

<style scoped>
    .order_header{
        border-top: 3px solid #000;
        border-bottom: 1px solid rgba(179, 179, 179, 0.58);
    }

    .order-box-div {
        /*display: inline;*/
        text-align: center;
        height: 120px;
        padding-left: 8%;
        background-color: GhostWhite;
        margin-top: 20px;
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