<template>
    <div>
        <div class="detail_content">
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
                                <p class="font-emphasis" style="margin-bottom: 0">나이키</p>
                                <p class="font-emphasis">W에어맥스 97 트리플 화이트 921733</p>
                                <p>사이즈선택 235</p>
                                <p>수량 1개</p>
                                <p>배송완료</p>
                            </div>
                            <div style="float: right;">
                                <span class="my-order-list-price font-emphasis">10000원</span>
                                <div class="my-order-list-button">
                                    <button class="btn1">반품접수</button>
                                    <button class="btn1">교환접수</button>
                                    <button>상품평보기</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="delivery_cost">
            <p>배송비 0원</p>
        </div>
        <div class="delivery_info">
            <div class="tb_container">
                <table class="info_tb">
                    <tr>
                        <td class="tb_title">배송지</td>
                        <td><p style="font-weight: bold">이선경</p>
                            <p>22158 인천 미추홀구 한나루로 518번길</p>
                            <p>01012341234</p></td>
                    </tr>
                    <tr>
                        <td class="tb_title">배송메시지</td>
                        <td>선택안함</td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="order_header">
            <FaqHeader :title="'결제/할인 정보'"></FaqHeader>
        </div>
        <table class="pay_table">
            <tr class="first_line">
                <td><p>총 주문금액 : 100000원</p></td>
                <td><p>총 할인금액 : -5000원</p></td>
                <td><p>총 결제금액 : 100000원</p></td>
            </tr>
            <tr style="height: 120px;">
                <td class="gray_row"><p>상품금액 <span class="num_area">100000원</span></p>
                    <p>배송비 <span class="num_area">0원</span></p></td>
                <td class="gray_row"><p>플러스 할인 <span class="num_area">100000원</span></p>
                    <p>기본할인 <span class="num_area">0원</span></p></td>
                <td class="gray_row"><p>신용카드 <span class="num_area">100000원</span></p></td>
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
                <td class="gray_row"><p>포인트 <span class="num_area">100000점</span></p></td>
                <td class="gray_row"><p>포인트 <span class="num_area">최대 200점</span></p>
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

    export default {
        name: "OrderDetail",
        components: {
            FaqHeader
        },
        methods: {
            goOrderPage() {
                this.$router.push('/orderList');
            }
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