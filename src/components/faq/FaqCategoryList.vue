<template>
 <div>
     <FaqHeader :is-button="true" :title="'자주 찾는 질문'"></FaqHeader>
     <FaqSearchForm></FaqSearchForm>
     <ul class="faq_category-list">
         <li class="shipping">
             <h3>배송</h3>
             <ul class="depth_menu">
                 <li>
                     <router-link to="#">배송확인</router-link>
                 </li>
                 <li>
                     <router-link to="/deliveryanduserinfomanagement">배송지변경</router-link>
                 </li>
                 <li>
                     <router-link to="/cca-fo/faq/viewFAQ/P00001/P00012">배송비</router-link>
                 </li>
                 <li>
                     <router-link to="/cca-fo/faq/viewFAQ/P00001/P00013">선물포장</router-link>
                 </li>
                 <li>
                     <router-link to="/cca-fo/faq/viewFAQ/P00001/P00015">스마트픽</router-link>
                 </li>
                 <li>
                     <router-link to="/cca-fo/faq/viewFAQ/P00001/P00136">신속배송</router-link>
                 </li>
             </ul>

         </li>
         <li class="return">
             <h3>교환/반품</h3>
             <ul class="depth_menu">
                 <li>
                     <router-link to="/cca-fo/faq/viewFAQ/P00002/P00016">교환접수</router-link>
                 </li>
                 <li>
                     <router-link to="/cca-fo/faq/viewFAQ/P00002/P00017">반품접수</router-link>
                 </li>
                 <li>
                     <router-link to="/cca-fo/faq/viewFAQ/P00002/P00018">AS접수</router-link>
                 </li>
                 <li>
                     <router-link to="/cca-fo/faq/viewFAQ/P00002/P00020">교환/반품 배송비</router-link>
                 </li>
                 <li>
                     <router-link to="/cca-fo/faq/viewFAQ/P00002/P00021">스마트픽 교환/반품</router-link>
                 </li>
             </ul>

         </li>
         <li class="order">
             <h3>주문/결제</h3>
             <ul class="depth_menu">
                 <li>
                     <router-link to="/cca-fo/faq/viewFAQ/P00003/P00022">주문방법</router-link>
                 </li>
                 <li>
                     <router-link to="/cca-fo/faq/viewFAQ/P00003/P00023">주문내역확인</router-link>
                 </li>
                 <li>
                     <router-link to="/cca-fo/faq/viewFAQ/P00003/P00024">주문취소</router-link>
                 </li>
                 <li>
                     <router-link to="/cca-fo/faq/viewFAQ/P00003/P00025">주문변경</router-link>
                 </li>
                 <li>
                     <router-link to="/cca-fo/faq/viewFAQ/P00003/P00026">신용카드</router-link>
                 </li>
                 <li>
                     <router-link to="/cca-fo/faq/viewFAQ/P00003/P00029">무통장/계좌이체</router-link>
                 </li>
                 <li>
                     <router-link to="/cca-fo/faq/viewFAQ/P00003/P00028">포인트</router-link>
                 </li>
                 <li>
                     <router-link to="/cca-fo/faq/viewFAQ/P00003/P00030">상품권</router-link>
                 </li>
                 <li style="display:none;">
                     <router-link to="/cca-fo/faq/viewFAQ/P00003/P00032">비회원 주문확인</router-link>
                 </li>
             </ul>
             <router-link to="/cca-fo/faq/viewFAQ/P00003/P00022?showmore=true" class="more">더보기 <i class="ico_arrow"></i></router-link>
         </li>
         <li class="cancel">
             <h3>환불</h3>
             <ul class="depth_menu">
                 <li>
                     <router-link to="/cca-fo/faq/viewFAQ/P00042/P00043">신용카드 환불</router-link>
                 </li>
                 <li>
                     <router-link to="/cca-fo/faq/viewFAQ/P00042/P00044">현금/보관금 환불</router-link>
                 </li>
                 <li>
                     <router-link to="/cca-fo/faq/viewFAQ/P00042/P00045">환불 관련 기타사항</router-link>
                 </li>
                 <li>
                     <router-link to="/cca-fo/faq/viewFAQ/P00042/P00046">스마트픽 환불</router-link>
                 </li>
             </ul>

         </li>
         <li class="member">
             <h3>회원</h3>
             <ul class="depth_menu">
                 <li>
                     <router-link to="/cca-fo/faq/viewFAQ/P00005/P00037">회원가입</router-link>
                 </li>
                 <li>
                     <router-link to="/cca-fo/faq/viewFAQ/P00005/P00038">회원정보변경</router-link>
                 </li>
                 <li>
                     <router-link to="/cca-fo/faq/viewFAQ/P00005/P00039">회원등급</router-link>
                 </li>
                 <li>
                     <router-link to="/cca-fo/faq/viewFAQ/P00005/P00041">회원탈퇴</router-link>
                 </li>
                 <li>
                     <router-link to="/cca-fo/faq/viewFAQ/P00005/P00131">롯데오너스</router-link>
                 </li>
             </ul>

         </li>
         <li class="benefit">
             <h3>포인트/쿠폰/이벤트</h3>
             <ul class="depth_menu">
                 <li>
                     <router-link to="/cca-fo/faq/viewFAQ/P00006/P00049">L.POINT</router-link>
                 </li>
                 <li>
                     <router-link to="/cca-fo/faq/viewFAQ/P00006/P00050">쿠폰</router-link>
                 </li>
                 <li>
                     <router-link to="/cca-fo/faq/viewFAQ/P00006/P00052">구매사은이벤트</router-link>
                 </li>
                 <li>
                     <router-link to="/cca-fo/faq/viewFAQ/P00006/P00053">제세공과금 입금</router-link>
                 </li>
             </ul>

         </li>
         <li class="documentary">
             <h3>거래증빙서류</h3>
             <ul class="depth_menu">
                 <li>
                     <router-link to="/cca-fo/faq/viewFAQ/P00007/P00054">현금영수증</router-link>
                 </li>
                 <li>
                     <router-link to="/cca-fo/faq/viewFAQ/P00007/P00056">기타 증빙서류</router-link>
                 </li>
             </ul>

         </li>
         <li class="etc">
             <h3>기타/서비스</h3>
             <ul class="depth_menu">
                 <li>
                     <router-link to="/cca-fo/faq/viewFAQ/P00008/P00057">오류신고</router-link>
                 </li>
                 <li>
                     <router-link to="/cca-fo/faq/viewFAQ/P00008/P00058">고객센터</router-link>
                 </li>
                 <li>
                     <router-link to="/cca-fo/faq/viewFAQ/P00008/P00134">피팅예약</router-link>
                 </li>
             </ul>

         </li>
     </ul>


 </div>


</template>

<script>
    import FaqHeader from "./FaqHeader";
    import FaqSearchForm from "./FaqSearchForm";

    export default {
        name: "Faq-category-list",
        components:{
            FaqHeader,
            FaqSearchForm
        }
    }
</script>

<style scoped>
    .faq_category-list {
        margin-top: 20px;
        border-top: 1px solid #f0f0f0;
        border-left: 1px solid #f0f0f0;
    }
    ul {
        list-style: none;
    }
    .faq_category-list>li {
        float: left;
        width: 25%;
        height: 373px;
        padding-top: 20px;
        border-right: 1px solid #f0f0f0;
        border-bottom: 1px solid #f0f0f0;
    }
    a{
        color:inherit;
    }
    .faq_category-list>li h3 {
        padding: 0 16px;
        font-size: 24px;
        text-align: center;
        line-height: 33px;
        background-position: 50% 20px;
        background-repeat: no-repeat;
    }
    .faq_category-list .depth_menu {
        margin-top: 20px;
        padding: 0 20px 0 40px;
    }
    .faq_category-list .depth_menu>li a {
        color: #666;
    }
    .faq_category-list .more {
        position: relative;
        display: inline-block;
        margin: 16px 0 0 40px;
        padding-right: 16px;
        color: #000;
    }
</style>