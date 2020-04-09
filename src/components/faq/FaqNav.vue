<template>
    <div class="nav_set">
        <nav>
            <ul class="nav_question">
                <li class="big_font">
                    <router-link to="/inquiryForm"><span>1:1 문의하기</span></router-link>
                </li>
                <li class="big_font">
                    <router-link to="/inquiryAnswer"><span>1:1 답변확인</span></router-link>
                </li>
            </ul>
            <ul class="nav_question line">
                <li class="inquiry_area">
                    <router-link to="/orderList"><span>주문배송조회</span></router-link>
                </li>
                <li class="inquiry_area">
                    <router-link to="/cancelSearch/취소"><span>취소/교환/반품</span></router-link>
                </li>
                <li class="inquiry_area">
                    <router-link to="/wishlist"><span>위시리스트</span></router-link>
                </li>
                <li class="inquiry_area">
                    <router-link to="/myreview"><span>상품평/후기</span></router-link>
                </li>
                <li class="inquiry_area">
                    <router-link to="/deliveryanduserinfomanagement"><span>배송지/회원정보</span></router-link>
                </li>
                <li class="inquiry_area">
                    <router-link to="/board"><span>질문/답변 게시판</span></router-link>
                </li>
                <li class="inquiry_area">
                    <router-link to="/faq"><span>FAQ</span></router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "FaqNav"
    }
</script>

<style scoped>
    .nav_set {
        float: left;
        width: 180px;
        margin-right: 24px;
        padding: 31px 0;
        border-top: 3px solid #000;
        border-bottom: 3px solid #000;
        font-size: 14px;
    }

    .big_font{
        font-size: 18px;
        font-weight: 500;
    }

    .inquiry_area{
        font-size: 14px;
    }

    .nav_set .nav_question li + li {
        margin-top: 17px;
    }

    a {
        color: inherit;
    }

    .nav_question.line {
        margin-top: 32px;
        padding-top: 33px;
        border-top: 1px solid #b3b3b3;
    }
    ol, ul {
        list-style: none;
    }
</style>