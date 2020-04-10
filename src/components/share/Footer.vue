<template>
    <div id="footer">
        <div class="foot_util">
            <div class="min_inner">
                <ul class="foot_links">
                    <li>
                        <a href="javascript:void(0);" title="(주)플래티어쇼핑">
                            <strong>플래티어쇼핑(주)</strong>
                        </a>
                    </li>
                    <li><a href="javascript:void(0);" title="LPOINT 회원소개">LPOINT 회원소개</a></li>
                    <li class="privacy"><a href="javascript:void(0);" title="개인정보처리방침"><strong>개인정보처리방침</strong></a></li>
                    <li><a href="javascript:void(0);" title="청소년보호방침">청소년보호방침</a></li>
                    <li><a href="javascript:void(0);" title="고객의견" id="cm_customer-feedback">고객의견</a></li>
                    <li><a href="javascript:void(0);" title="임직원인증">임직원인증</a></li>
                    <li id="dpsLocationReceiptPopup"><a href="javascript:void(0);">입점상담</a></li>
                </ul>
                <div class="dropdown_list">
                    <sui-dropdown text="패밀리 사이트">
                        <sui-dropdown-menu>
                            <sui-dropdown-item><a href="http://plateer.com">(주)플래티어</a></sui-dropdown-item>
                            <sui-dropdown-item><a href="http://www.mousoft.co.kr/">모우소프트</a></sui-dropdown-item>
                            <sui-dropdown-item><a href="http://sys4u.kr/">플래티어 모바일</a></sui-dropdown-item>
                            <sui-dropdown-item><a href="http://wiki.sys4u.co.kr/#all-updates">SYS4U OPEN WIKI</a></sui-dropdown-item>
                        </sui-dropdown-menu>
                    </sui-dropdown>
                </div>
            </div>
        </div>

        <div class="foot_info">
            <div class="inner-info-img"><img class="lotteDepartmentStoreLogo" src="../../assets/intro_logo.png"></div>
            <div class="inner-info">
                <div class="inner-1st">
                    <p class="shopping-title">(주)플래티어</p>
                    서울시 송파구 법원로9길 26 H Business Park D동 6층<br><br>
                    통신판매업신고 : 송파 01234호<br><br>
                    개인정보보호책임자 : 손성관 책임<br>
                    교육총괄담당자 : Nextree 박상현 선임<br>
                    신입사원보호책임자 : 손성관 책임<br><br>
                    Copyright ⓒ 2020 PLATEER. All rights reserved.<br>
                </div>
                <div class="inner-2st">
                    전화 :
                    TEL  02-554-4668,
                    FAX  02-554-4583<br>
                </div>
                <div class="inner-3st">
                    <br>
                    콘텐츠산업진흥법에 의한 콘텐츠보호안내 [자세히 보기]<br><br>
                    서울보증보험 소비자피해보상보험<br>
                    고객님의 안전거래를 위해 현금 등으로 결제 시 결제금액 전액에 대해 저희 쇼핑몰에서 가입한 소비자 피해 보상보험 서비스를 이용하실 수 있습니다.
                </div>
            </div>

        </div>

        <div class="list">
            <ul class="awards-list">
                <li><img src="//image.ellotte.com/ellt.static.lotteeps.com/front/desktop/assets/img/common/footer_link01.png"></li>
                <li><img src="//image.ellotte.com/ellt.static.lotteeps.com/front/desktop/assets/img/common/footer_link02.png"></li>
                <li><img src="//image.ellotte.com/ellt.static.lotteeps.com/front/desktop/assets/img/common/footer_link03.png"></li>
                <li>
                    <a href="http://www.relaycall.or.kr/home/main1.asp">
                    <img src="//image.ellotte.com/ellt.static.lotteeps.com/front/desktop/assets/img/common/footer_link04.png">
                    </a>
                </li>
                <li>
                    <a href="http://www.kolsa.or.kr/neopress/index.php">
                    <img src="//image.ellotte.com/ellt.static.lotteeps.com/front/desktop/assets/img/common/footer_link05.png">
                    </a>
                </li>
                <li>
                    <a href="https://www.hometax.go.kr/websquare/websquare.html?w2xPath=/ui/pp/index.xml">
                    <img src="//image.ellotte.com/ellt.static.lotteeps.com/front/desktop/assets/img/common/footer_link06.png">
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer"
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

    ol, ul {
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
        margin : 30px 9% 0 9%;
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

    .inner-1st {
        float: left;
        margin-right: 80px;
    }

    .inner-1st, .inner-2st, .inner-3st {
        font-size: 0.9rem;
        color: #666666;
    }

    .list {
        margin: 3% auto 5% auto;
        text-align: center;
    }

    .awards-list {
        display: inline-block;
        list-style: none;
    }
    .awards-list li {
        float: left;
        text-align: center;
        height: 56px;
        width: 192px;
        margin: auto 10px;
        padding: 5px;
        border: 1px solid lightgray;
        vertical-align: middle;
        line-height: 54px;
    }

    .awards-list li>img {
        vertical-align: center;
    }

    /*#footer {*/
    /*    position:absolute;*/
    /*    bottom:0;*/
    /*    width:100%;*/
    /*}*/

</style>