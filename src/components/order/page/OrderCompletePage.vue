<template>
    <div class="order-complete">
        <div class="order-notify">
            <i class="icon-success-gray"></i>
            <p class="title">주문해주셔서 감사합니다.</p>
            <p class="order-number"><span class="tit">주문번호 : </span><span class="num">2020-03-27-3288947</span></p>
            <!-- case1 결제확인관련 안내 메시지 (default)-->
            <!-- case2 무통장입금관련 안내 메시지 -->
            <p class="desc">주문완료 까지는 상황에 따라 다소 시간이 소요될수 있습니다.<br><span
                    class="point-txt">주문완료시 SMS 또는 카카오톡으로 입금계좌정보를 안내</span>해 드리겠습니다.</p>
        </div>
        <div class="price-box">
            <p class="cont-title"><strong>결제정보</strong></p>
            <div class="price-result">
                <div class="total-wrap">
                    <p class="total">
                        <span class="total-txt">결제금액</span>
                        <span class="price"><strong>199,000</strong><em>원</em></span>
                    </p>
                    <!-- 결제수단 -->


                    <p class="pay-option">무통장입금(국민은행)</p>
                </div>
            </div>
            <ul class="price-detail">
                <li>
                    <span class="item">상품금액<em class="count">1</em></span>
                    <span class="price">199,000 원</span>
                </li>
                <li>
                    <span class="item">배송비</span>
                    <span class="price">+ 0 원</span>
                </li>
                <li>
                    <span class="item">할인금액</span>
                    <span class="price">- 0 원</span>
                </li>
            </ul>
            <div class="saving-point">
                <p class="itmes">
                    <strong class="title">적립 예정 포인트 99점</strong>
                    <span class="detail">(P.POINT 99점 + 엘롯데포인트 0점)</span>
                </p>
                <ul class="bull-list-dash">
                    <li>적립 예정 포인트는 상품 발송 2일 후 자동 지급됩니다.</li>
                    <li>실제 적립된 금액은 예상 금액과 다를 수 있습니다.</li>
                </ul>
            </div>

        </div>
        <div class="btns-wrap">
            <a href="#none" class="btn-normal" id="btnGoOrderDetail" data-ord-no="202003273288947">주문상세보기</a>
            <a href="#none" class="btn-default" id="btnGoMain">홈으로 이동</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "OrderCompletePage"
    }
</script>

<style scoped>

</style>