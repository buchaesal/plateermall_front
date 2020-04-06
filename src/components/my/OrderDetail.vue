<template>
    <div>
        <div class="order_header">
            <FaqHeader :title="'주문배송상세'"></FaqHeader>
        </div>
        <div class="order-detail-header">
            <p>주문번호 1111 (주문일: 2020.03.11, 주문자: 이선경)</p>
        </div>
        <div class="my-order-list">
            <div>
                <div class="goods-list">
                    <div class="my-order-list-goods">
                    <span class="goods-img">
                        <img src="https://image.msscdn.net/images/goods_img/20180703/810033/810033_1_500.jpg">
                    </span>


                        <div class="my-order-list-info">
                            <p>나이키</p>
                            <p>W에어맥스 97 트리플 화이트 921733</p>
                            <p>사이즈선택 235</p>
                            <p>수량 1개</p>
                            <p>상태</p>
                        </div>
                        <div style="float: right;">
                            <span class="my-order-list-price">10000원</span>
                            <div class="my-order-list-button">
                                <button class="btn1">배송지변경</button>
                                <button class="btn1">주문취소</button>
                                <button>주문취소</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FaqHeader from "../faq/FaqHeader";

    export default {
        name: "OrderDetail",
        components: {
            FaqHeader
        }
    }
</script>

<style scoped>
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
</style>