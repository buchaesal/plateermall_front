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
</style>