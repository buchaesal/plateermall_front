<template>
    <div id="footer">
        <div class="foot_util">
            <div class="min_inner">
                <ul class="foot_links">
                    <li>
                        <a href="https://www.lotteshopping.com" target="_blank" title="(주)롯데쇼핑">
                            <strong>롯데쇼핑(주)</strong>
                        </a>
                    </li>
                    <li><a href="http://www.lpoint.com/view/interface/link.jsp?reUrl=/app/affiliate/HPAA100100.do?tracking=EL_FOOTER_02" target="_blank" title="LPOINT 회원소개">LPOINT 회원소개</a></li>
                    <li class="privacy"><a href="//members.ellotte.com/members-fo/join/privacy" target="_self" title="개인정보처리방침"><strong>개인정보처리방침</strong></a></li>
                    <li><a href="//members.ellotte.com/members-fo/join/youthProtection" target="_self" title="청소년보호방침">청소년보호방침</a></li>
                    <li><a href="//common.ellotte.com/common-fo/feedback/customer?bypass" target="_blank" title="고객의견" id="cm_customer-feedback">고객의견</a></li>
                    <li><a href="//members.ellotte.com/members-fo/staff/execJoin" target="_self" title="임직원인증">임직원인증</a></li>
                    <li id="dpsLocationReceiptPopup"><a href="javascript:void(0);">입점상담</a></li>
                </ul>
                <div class="dropdown_list">
                    <sui-dropdown text="패밀리 사이트">
                        <sui-dropdown-menu>
                            <sui-dropdown-item>롯데지주</sui-dropdown-item>
                            <sui-dropdown-item>롯데건설</sui-dropdown-item>
                            <sui-dropdown-item>롯데글로벌로지스</sui-dropdown-item>
                            <sui-dropdown-item>롯데기공</sui-dropdown-item>
                            <sui-dropdown-item>롯데비피화학</sui-dropdown-item>
                            <sui-dropdown-item>롯데렌탈</sui-dropdown-item>
                        </sui-dropdown-menu>
                    </sui-dropdown>
                </div>
            </div>
        </div>

        <div class="foot_info">
            <div class="inner_info_img"><img class="lotteDepartmentStoreLogo" src="https://1.cms.s81c.com/sites/default/files/2018-11-12/image_lottedpt_logo%20copy.png"></div>
            <div class="inner_info">
                <div class="inner_1st">
                    <p class="shopping-title">롯데쇼핑주식회사</p>
                    롯데쇼핑(주) 대표이사 강희태, 서울시 중구 소공동 1번지<br>
                    사업자등록번호 : 104-81-26067(롯데쇼핑㈜ 백화점 사업본부)<br>
                    통신판매업신고 : 중구 01243호<br>
                    개인정보보호책임자: 박광석 청소년보호책임자 : 김진수 <br><br>
                    Copyright 2018. LOTTESHOPPING Co., LTD. All rights reserved.<br>


                </div>
                <div class="inner_2st">
                    고객만족센터 : 1899-2500 (FAX: 02-3675-2500/E-mail: ellotte@lotte.net)<br>
                    운영시간 : 평일(09시-18시) 주말/공휴일(휴무)<br>
                    호스팅 서비스 사업자 : 롯데쇼핑㈜ e커머스 사업본부<br>
                </div>
            </div>
            <div>
                콘텐츠산업진흥법에 의한 콘텐츠보호안내 [자세히 보기]<br><br>
                서울보증보험 소비자피해보상보험<br>
                고객님의 안전거래를 위해 현금 등으로 결제 시 결제금액 전액에 대해 저희 쇼핑몰에서 가입한 소비자 피해 보상보험 서비스를 이용하실 수 있습니다.
            </div>
        </div>

        <div class="list">
            <ul class="price-list">
                <li><img src="//image.ellotte.com/ellt.static.lotteeps.com/front/desktop/assets/img/common/footer_link01.png"></li>
                <li><img src="//image.ellotte.com/ellt.static.lotteeps.com/front/desktop/assets/img/common/footer_link02.png"></li>
                <li><img src="//image.ellotte.com/ellt.static.lotteeps.com/front/desktop/assets/img/common/footer_link03.png"></li>
                <li><img src="//image.ellotte.com/ellt.static.lotteeps.com/front/desktop/assets/img/common/footer_link04.png"></li>
                <li><img src="//image.ellotte.com/ellt.static.lotteeps.com/front/desktop/assets/img/common/footer_link05.png"></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer.vue"
    }
</script>

<style scoped>

    a {
        color: #666666;
        text-decoration: none;
    }

    #footer .foot_util {
        border-top: 1px solid #D9D9D9;
        border-bottom: 1px solid #D9D9D9;
    }

    #footer .min_inner {
        overflow: visible;
    }

    .min_inner {
        max-width: 1600px;
        min-width: 1240px;
        margin: 0 auto;
        overflow: hidden;
    }

    #footer .min_inner * {
        font-size: 12px;
        font-weight: 400;
    }

    #footer .foot_links {
        width:80%;
        display: inline-block;
        vertical-align: top;
        border-right: 1px solid #D9D9D9;
        margin-top: 0px;
        margin-bottom: 0px;
    }

    ol,
    ul {
        list-style: none;
    }

    #footer .foot_links li {
        float: left;
        font-size: 12px;
        line-height: 57px;
    }

    #footer .foot_links li:not(:first-child):before {
        content: '';
        display: inline-block;
        width: 1px;
        height: 10px;
        margin: 0 16px;
        background-color: #D8D8D8;
    }

    #footer .foot_links li a {
        font-size: inherit;
    }

    #footer .foot_links li strong {
        font-weight: 400;
        color: #000;
    }
    
    .dropdown_list {
        float: right;
        width:20%;
        height:56.8px;
        line-height:56.8px;
        text-align:center;
    }

    .foot_info {
        margin : 50px 9% 0 9%;
    }

    .lotteDepartmentStoreLogo {
        float: left;
        max-width: 200px;
        margin: 0 50px 50px 0;
    }

    .shopping-title {
        font-width: bold;
        font-size: 1.2rem;
    }

    .inner_1st {
        float: left;
        margin-right: 80px;
    }

    .inner_1st, .inner_2st {
        font-size: 0.9rem;
        color: #666666;
    }

    .list {
        margin-bottom: 5%;
    }

    .price-list {
        list-style: none;
    }
    .price-list li {
        float: left;
        margin: auto 10px;
        padding: 5px;
        border: 1px solid lightgray;
    }

</style>