<template>
    <div class="signup-detail-main">
        <sui-input class="password-input" type="text" placeholder="비밀번호"/>
        <br>
        <br>
        <p>* 영문, 숫자, 특수문자를 혼합한 8자 이상 ~15자 이내</p>
        <sui-input class="password-input" type="password" placeholder="비밀번호 재입력"/>
        <div class="marketing-check">
            <br>
            <br>
            <p class="tit">(선택) 맞춤성 광고성 정보 수신 동의</p>
            <sui-table celled class="info-table">
                <sui-table-header>
                    <sui-table-row>
                        <sui-table-header-cell>목적</sui-table-header-cell>
                        <sui-table-header-cell>항목</sui-table-header-cell>
                        <sui-table-header-cell>보유 빛 동의기간</sui-table-header-cell>
                    </sui-table-row>
                </sui-table-header>

                <sui-table-body>
                    <sui-table-row>
                        <sui-table-cell>쇼핑, 행사, 이벤트 안내 등 <br> 고객 맞춤형 정보 서비스 안내</sui-table-cell>
                        <sui-table-cell>이름, 성별, 생년월일, <br> 휴대폰주소, 이메일주소</sui-table-cell>
                        <sui-table-cell>회원탈퇴 시 또는 동의 철회 시</sui-table-cell>
                    </sui-table-row>
                </sui-table-body>
            </sui-table>
            <p>※ 동의를 거부하시는 경우에도 롯데쇼핑이 제공하는 다른 서비스는 이용 하실 수 있습니다.
                <br> (단, 롯데쇼핑㈜의 쇼핑정보 및 상품정보 등 서비스 정보를 안내 받을 수 없습니다.)</p>
        </div>
        <br>
        <div class="checkbox-wrap">
            <div class="email-checkbox-wrap">
                <span class="email-comp">이메일 수신</span>
                <input class="email-comp" type="radio" id="emailAgree" value="Y">
                <label for="emailAgree"> 동의 </label>
                
                <input class="email-comp" type="radio" id="emailDisagree" value="N" checked="true">
                <label for="emailAgree"> 동의안함 </label>
            </div>
            <div class="sms-checkbox-wrap">
                <span class="sms-comp">SMS 수신</span>
                <input class="sms-comp" type="radio" id="emailAgree" value="Y">
                <label for="emailAgree"> 동의 </label>
                
                <input class="sms-comp-disagree" type="radio" id="emailDisagree" value="N" checked="true">
                <label for="emailAgree"> 동의안함 </label>
            </div>
        </div>
        <div class="sign-in">
            <a class="sign-in-btn">
                <sui-image src="https://simage.lotte.com/ellotte/images/login/newel_btn_login_create.gif" size="large" />
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SignUpDetail"
    }
</script>

<style scoped>
.signup-detail-main {
    margin-top: 3%;
    margin-left: 30%;
    margin-right: 30%;
    color: #888;
}
.password-input {
    width: 100%;
    margin-right: 3px;
}
.tit {
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: bold;
    color: #888;
}
.checkbox-wrap{
    border: 1px solid #ddd;
    font-size: 17px;
}
.email-checkbox-wrap {
    margin-top: 5%;
    margin-left: 10%;
}
.email-comp {
    margin-left: 9%;
    color: #666;
    font-weight: bold;
}
.sms-checkbox-wrap {
    margin-top: 5%;
    margin-left: 10%;
    margin-bottom: 5%;
}
.sms-comp {
    margin-left: 10.5%;
    font-weight: bold;
    color: #666;
}
.sms-comp-disagree{
    margin-left: 9%;
}
.info-table {
    text-align: center !important;
    color: #777 !important;
}
.sign-in{
    margin-top: 5%;
    padding-left: 12%;
}
/* .sign-in-btn{
    margin-left: 30%;
} */
</style>