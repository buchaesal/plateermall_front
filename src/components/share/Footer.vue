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
                    <li>
                        <a href="http://www.lpoint.com/view/interface/link.jsp?reUrl=/app/affiliate/HPAA100100.do?tracking=EL_FOOTER_02"
                            target="_blank" title="LPOINT 회원소개">LPOINT 회원소개</a>
                    </li>
                    <li class="privacy"><a href="//members.ellotte.com/members-fo/join/privacy" target="_self"
                            title="개인정보처리방침"><strong>개인정보처리방침</strong></a></li>
                    <li><a href="//members.ellotte.com/members-fo/join/youthProtection" target="_self"
                            title="청소년보호방침">청소년보호방침</a></li>
                    <li><a href="//common.ellotte.com/common-fo/feedback/customer?bypass" target="_blank" title="고객의견"
                            id="cm_customer-feedback">고객의견</a></li>
                    <li><a href="//members.ellotte.com/members-fo/staff/execJoin" target="_self" title="임직원인증">임직원인증</a>
                    </li>
                    <li id="dpsLocationReceiptPopup"><a href="javascript:void(0);">입점상담</a></li>
                </ul>
                <sui-dropdown text="패밀리 사이트">
                    <sui-dropdown-menu>
                        <sui-dropdown-item>New</sui-dropdown-item>
                        <sui-dropdown-item>Open... <span class="description">ctrl + o</span></sui-dropdown-item>
                        <sui-dropdown-item>Save as... <span class="description">ctrl + s</span></sui-dropdown-item>
                        <sui-dropdown-item>Rename <span class="description">ctrl + r</span></sui-dropdown-item>
                        <sui-dropdown-item>Make a copy</sui-dropdown-item>
                        <sui-dropdown-item>
                            <sui-icon name="folder" />Move to folder</sui-dropdown-item>
                        <sui-dropdown-item>
                            <sui-icon name="trash" />Move to trash</sui-dropdown-item>
                        <sui-dropdown-divider />
                        <sui-dropdown-item>Download as...</sui-dropdown-item>
                    </sui-dropdown-menu>
                </sui-dropdown>
                <!--
                <div class="dropdown_list family_links" aria-expanded="false">
                    <div class="dropdown_value">
                        <input type="text" role="combobox" value="패밀리 사이트" aria-expanded="false" tabindex="-1"
                            readonly="">
                        <button type="button" aria-label="목록열기" class="btn_opener"
                            aria-expanded="false"><i></i></button>
                    </div>
                    <ul class="item_list" role="listbox">
                        <li role="option"><a href="http://www.lotte.co.kr" target="_blank" title="롯데지주">롯데지주</a></li>
                        <li role="option"><a href="http://www.lottecon.co.kr" target="_blank" title="롯데건설">롯데건설</a></li>
                        <li role="option"><a href="http://www.lotteglogis.com" target="_blank"
                                title="롯데글로벌로지스">롯데글로벌로지스</a></li>
                        <li role="option"><a href="http://www.lottelem.co.kr" target="_blank" title="롯데기공">롯데기공</a></li>
                        <li role="option"><a href="http://www.lottebp.com" target="_blank" title="롯데비피화학">롯데비피화학</a>
                        </li>
                        <li role="option"><a href="http://www.lotterentacar.net" target="_blank" title="롯데렌탈">롯데렌탈</a>
                        </li>
                        <li role="option"><a href="http://www.llc.co.kr" target="_blank" title="롯데로지스틱스">롯데로지스틱스</a>
                        </li>
                        <li role="option"><a href="http://www.lohbs.co.kr" target="_blank" title="롯데롭스">롯데롭스</a></li>
                        <li role="option"><a href="http://www.lotteria.co.kr" target="_blank" title="롯데리아">롯데리아</a></li>
                        <li role="option"><a href="http://www.lottemart.com" target="_blank" title="롯데마트">롯데마트</a></li>
                        <li role="option"><a href="http://www.lottedfs.com" target="_blank" title="롯데면세점">롯데면세점</a></li>
                        <li role="option"><a href="http://www.lpoint.com" target="_blank" title="롯데멤버스">롯데멤버스</a></li>
                        <li role="option"><a href="http://www.lottepnd.com" target="_blank" title="롯데물산">롯데물산</a></li>
                        <li role="option"><a href="https://www.lotteshopping.com" target="_blank"
                                title="롯데백화점">롯데백화점</a></li>
                        <li role="option"><a href="http://www.skyhill.co.kr" target="_blank" title="롯데스카이힐">롯데스카이힐
                                C.C.</a></li>
                        <li role="option"><a href="http://www.lotteins.co.kr" target="_blank" title="롯데손해보험">롯데손해보험</a>
                        </li>
                        <li role="option"><a href="http://www.lotteintl.co.kr" target="_blank" title="롯데상사">롯데상사</a>
                        </li>
                        <li role="option"><a href="http://www.lottesuper.co.kr" target="_blank" title="롯데슈퍼">롯데슈퍼</a>
                        </li>
                        <li role="option"><a href="http://www.lottecinema.co.kr" target="_blank" title="롯데시네마">롯데시네마</a>
                        </li>
                        <li role="option"><a href="http://www.asahibeerk.com" target="_blank"
                                title="롯데아사히주류">롯데아사히주류</a></li>
                        <li role="option"><a href="http://www.lotteal.co.kr" target="_blank" title="롯데알미늄">롯데알미늄</a>
                        </li>
                        <li role="option"><a href="http://www.lottemcc.com" target="_blank" title="롯데엠시시">롯데엠시시</a></li>
                        <li role="option"><a href="http://www.lotteworld.com" target="_blank" title="롯데월드">롯데월드</a></li>
                        <li role="option"><a href="http://www.lottelmsc.com" target="_blank"
                                title="롯데유통사업본부">롯데유통사업본부</a></li>
                        <li role="option"><a href="http://www.lotteacademy.co.kr" target="_blank"
                                title="롯데인재개발원">롯데인재개발원</a></li>
                        <li role="option"><a href="http://www.lottedevelop.com" target="_blank"
                                title="롯데자산개발">롯데자산개발</a></li>
                        <li role="option"><a href="http://www.giantsclub.com" target="_blank" title="롯데자이언츠">롯데자이언츠</a>
                        </li>
                        <li role="option"><a href="http://www.lottefoundation.or.kr" target="_blank"
                                title="롯데재단">롯데재단</a></li>
                        <li role="option"><a href="http://www.lottefinechem.com" target="_blank"
                                title="롯데정밀화학">롯데정밀화학</a></li>
                        <li role="option"><a href="http://www.ldcc.co.kr" target="_blank" title="롯데정보통신">롯데정보통신</a></li>
                        <li role="option"><a href="http://www.lotteconf.co.kr" target="_blank" title="롯데제과">롯데제과</a>
                        </li>
                        <li role="option"><a href="http://www.lottejtb.com" target="_blank" title="롯데제이티비">롯데제이티비</a>
                        </li>
                        <li role="option"><a href="http://www.lotternd.com" target="_blank" title="롯데중앙연구소">롯데중앙연구소</a>
                        </li>
                        <li role="option"><a href="http://job.lotte.co.kr/LotteRecruit/Lotte1.aspx" target="_blank"
                                title="롯데채용센터">롯데채용센터</a></li>
                        <li role="option"><a href="http://mall.lottechilsung.co.kr" target="_blank"
                                title="롯데칠성음료(음료BG)">롯데칠성음료(음료BG)</a></li>
                        <li role="option"><a href="http://www.lotteliquor.com" target="_blank"
                                title="롯데칠성음료(주류BG)">롯데칠성음료(주류BG)</a></li>
                        <li role="option"><a href="http://www.lotteadms.com" target="_blank" title="롯데첨단소재">롯데첨단소재</a>
                        </li>
                        <li role="option"><a href="http://www.lottecard.co.kr" target="_blank" title="롯데카드">롯데카드</a>
                        </li>
                        <li role="option"><a href="http://www.lottecap.com" target="_blank" title="롯데캐피탈">롯데캐피탈</a></li>
                        <li role="option"><a href="http://www.lottechem.com" target="_blank" title="롯데케미칼">롯데케미칼</a>
                        </li>
                        <li role="option"><a href="http://www.lottefoods.co.kr" target="_blank" title="롯데푸드">롯데푸드</a>
                        </li>
                        <li role="option"><a href="http://www.e-himart.co.kr" target="_blank" title="롯데하이마트">롯데하이마트</a>
                        </li>
                        <li role="option"><a href="http://www.lottehotel.com" target="_blank" title="롯데호텔">롯데호텔</a></li>
                        <li role="option"><a href="http://www.lotteimall.com" target="_blank" title="롯데홈쇼핑">롯데홈쇼핑</a>
                        </li>
                        <li role="option"><a href="http://www.daehong.com" target="_blank" title="대홍기획">대홍기획</a></li>
                        <li role="option"><a href="http://www.mybi.co.kr" target="_blank" title="마이비">마이비</a></li>
                        <li role="option"><a href="http://www.charlottetheater.co.kr" target="_blank"
                                title="샤롯데씨어터">샤롯데씨어터</a></li>
                        <li role="option"><a href="http://www.angelinus.co.kr" target="_blank" title="엔제리너스">엔제리너스</a>
                        </li>
                        <li role="option"><a href="http://www.uniqlo.kr" target="_blank" title="유니클로">유니클로</a></li>
                        <li role="option"><a href="http://www.cashbee.co.kr" target="_blank" title="이비카드">이비카드</a></li>
                        <li role="option"><a href="http://www.canon-bs.co.kr" target="_blank"
                                title="캐논코리아비즈니스솔루션">캐논코리아비즈니스솔루션</a></li>
                        <li role="option"><a href="http://www.7-eleven.co.kr" target="_blank" title="코리아세븐">코리아세븐</a>
                        </li>
                        <li role="option"><a href="http://www.krispykreme.co.kr" target="_blank"
                                title="크리스피크림도넛">크리스피크림도넛</a></li>
                        <li role="option"><a href="http://toysrus.lottemart.com" target="_blank" title="토이저러스">토이저러스</a>
                        </li>
                        <li role="option"><a href="http://www.tgif.co.kr" target="_blank"
                                title="T.G.I.Friday's">T.G.I.Friday's</a></li>
                        <li role="option"><a href="http://www.fujifilm.co.kr" target="_blank" title="한국후지필름">한국후지필름</a>
                        </li>
                        <li role="option"><a href="http://www.hanpay.net" target="_blank" title="한페이시스">한페이시스</a></li>
                        <li role="option"><a href="http://www.hit.co.kr" target="_blank" title="현대정보기술">현대정보기술</a></li>
                        <li role="option"><a href="http://www.eliden.com/brand/eliden_index.asp" target="_blank"
                                title="엘리든">엘리든</a></li>
                        <li role="option"><a href="http://www.lottetops.com/brand/main.asp?bn=7" target="_blank"
                                title="탑스">탑스</a></li>
                    </ul>
                </div>
                -->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer.vue"
    }
</script>

<style scoped>
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
        font-family: 'Malgun Gothic', 'AppleSDGothicNeo', 'Helvetica', sans-serif;
        font-size: 12px;
        font-weight: 400;
    }

    #footer .foot_links {
        display: inline-block;
        vertical-align: top;
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
    
    /*
    #footer .family_links {
        float: right;
        width: 294px;
    }

    .dropdown_list {
        display: inline-block;
        position: relative;
    }

    .dropdown_list .dropdown_value {
        position: relative;
    }

    #footer .family_links .dropdown_value input[type="text"] {
        width: 100%;
        height: 57px;
        padding: 21px 24px 17px 24px;
        border-top: 0;
        border-bottom: 0;
    }

    .dropdown_list .dropdown_value input[type="text"] {
        width: 100%;
        font-size: 14px;
        background-color: #fff;
    }

    #footer .dropdown_list .dropdown_value .btn_opener {
        font-size: 12px;
    }

    .dropdown_list .dropdown_value .btn_opener {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        border: 0;
        background: rgba(255, 255, 255, 0);
        cursor: pointer;
    }

    [class^="btn_"] {
        display: inline-block;
        text-align: center;
    }

    #footer .family_links .item_list {
        top: auto;
        bottom: 0;
        max-height: 200px;
        overflow-y: auto;
    }

    .dropdown_list .item_list {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
        width: 100%;
        border: 1px solid #e6e6e6;
        background: #fff;
    }

    .dropdown_list .item_list a {
        display: block;
        width: 100%;
        padding: 13px 12px;
        border: 0;
        background: transparent;
        font-size: 14px;
        line-height: 1;
        text-align: left;
        cursor: pointer;
    }
    */
</style>