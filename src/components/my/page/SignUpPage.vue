<template>
    <div class="signup-main">
        <!-- <AgreementPage/> -->
        <div>
            <router-link to="/">
                <img src="../../../assets/PlateerMall.png" style="width:210px;" />
            </router-link>
        </div>
        <div>
            <label>
                <h2 class="signup-title">회원가입</h2>
            </label>
        </div>
        <br>
        <br>
        <div>
            <sui-input maxlength="10" v-model="user.name" class="id-input" type="text" placeholder="이름"/>
            <br>
            <br>
            <sui-input maxlength="10" v-model="user.email" class="email-input" type="text" placeholder="이메일"/>
            @
            <sui-input v-if="currentEmailDomain === '직접입력'" v-model="domain" class="email-input" type="text"
                       placeholder="직접입력"/>
            <sui-input v-else v-model="currentEmailDomain" class="email-input" type="text" :disabled="true"/>
            <sui-dropdown class="email-input"
                          placeholder="직접입력"
                          selection
                          :options="emailDomain"
                          v-model="currentEmailDomain"
            />
            <br>
            <br>
            <p>* 로그인 계정으로 이메일 주소가 사용됩니다.</p>
            <sui-dropdown class="phone-input-front"
                          placeholder="State"
                          selection
                          :options="headNumber"
                          v-model="currentHeadNumber"
            />
            <!-- <sui-input class="phone-input-front" type="text"/> -->
            <sui-input class="phone-input-back" v-model="user.phoneNumber" type="number"/>
        </div>
        <br>
        <sui-button @click="duplicateCheck" class="signup-btn">중복확인</sui-button>
        <br>
        <br>
        <div class="signup-detail-main">
            <sui-input maxlength="15" class="password-input" type="password" placeholder="비밀번호" v-model="user.password"/>
            <br>
            <br>
            <p>* 영문, 숫자, 특수문자를 혼합한 8자 이상 ~15자 이내</p>
            <sui-input maxlength="15" class="password-input" type="password" placeholder="비밀번호 재입력" v-model="passwordCheck"/>
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
                <p>※ 동의를 거부하시는 경우에도 플래티어몰이 제공하는 다른 서비스는 이용 하실 수 있습니다.
                    <br> (단, 플래티어몰의 쇼핑정보 및 상품정보 등 서비스 정보를 안내 받을 수 없습니다.)</p>
            </div>
            <br>
            <div class="checkbox-wrap">
                <div class="email-checkbox-wrap">
                    <span class="email-comp">이메일 수신</span>
                    <input class="email-comp" type="radio" id="emailAgree" :value="1" v-model="user.emailAgree">
                    <label for="emailAgree"> 동의 </label>

                    <input class="email-comp" type="radio" id="emailDisagree" :value="0" v-model="user.emailAgree">
                    <label for="emailDisagree"> 동의안함 </label>
                </div>
                <div class="sms-checkbox-wrap">
                    <span class="sms-comp">SMS 수신</span>
                    <input class="sms-comp" type="radio" id="smsAgree" :value="1" v-model="user.smsAgree">
                    <label for="smsAgree"> 동의 </label>

                    <input class="sms-comp-disagree" type="radio" id="smsDisagree" :value="0" v-model="user.smsAgree">
                    <label for="smsDisagree"> 동의안함 </label>
                </div>
            </div>
            <div class="sign-in">
                <a class="sign-in-btn" href="#" @click="signUp">
                    <sui-image src="https://simage.lotte.com/ellotte/images/login/newel_btn_login_create.gif"
                               size="large"/>
                </a>
            </div>
        </div>
        <br>
        <br>
    </div>
</template>

<script>
    import {duplicateCheck} from "../../../api/UserApi";

    export default {
        name: "Sample",
        data() {
            return {
                user: {
                    name: '',
                    email: '',
                    password: '',
                    phoneNumber: '',
                    emailAgree: 0,
                    smsAgree: 0,
                },
                userName: '',
                currentEmailDomain: '직접입력',
                currentHeadNumber: '010',
                emailDomain: [
                    {text: 'gmail.com', value: 'gmail.com'},
                    {text: 'naver.com', value: 'naver.com'},
                    {text: 'hanmail.com', value: 'hanmail.com'},
                    {text: 'paran.com', value: 'paran.com'},
                    {text: 'nate.com', value: 'nate.com'},
                    {text: '직접입력', value: '직접입력'},
                ],
                headNumber: [
                    {text: '010', value: '010'},
                    {text: '011', value: '011'},
                    {text: '017', value: '017'},
                    {text: '016', value: '016'},
                    {text: '018', value: '018'},
                ],
                domain: '',
                isUsableEmail: false,
                passwordCheck: ''
            };
        },
        methods: {
            signUp() {
                if(!this.user.name){
                    alert('이름을 입력해주세요.');
                    return;
                }

                if(!this.isUsableEmail){
                    alert('아이디 중복체크를 해주세요.');
                    return;
                }

                if(!this.user.phoneNumber){
                    alert('휴대폰 번호를 입력해주세요.');
                    return;
                }

                if(!this.user.password){
                    alert('비밀번호를 입력해주세요.');
                    return;
                }

                if(this.user.password !== this.passwordCheck){
                    alert('비밀번호 확인이 같지 않습니다.');
                    return;
                }

                this.user.email = this.userEmailId;
                this.user.phoneNumber = `${this.currentHeadNumber}${this.user.phoneNumber}`;

                this.$store.dispatch('SIGN_UP',this.user);
                alert('회원가입이 완료되었습니다. 로그인해주세요.');
                this.$router.push('/');
            },
            async duplicateCheck() {
                if(!this.user.email || !this.domain){
                    alert('이메일을 입력해주세요.');
                    return;
                }

                if(await duplicateCheck(this.userEmailId)){
                    alert('이미 등록된 이메일입니다.')
                }else{
                    this.isUsableEmail = true;
                    alert('사용 가능한 이메일입니다.')
                }
            },
        },
        computed:{
            userEmailId(){
                return `${this.user.email}@${this.domain}`;
            }
        },
        watch: {
            currentEmailDomain: function (value) {
                if (value !== '직접입력') {
                    this.domain = value;
                } else {
                    this.domain = '';
                }
            },
            userEmailId: function () {
                if(this.isUsableEmail){
                    this.isUsableEmail = false;
                }
            }
        }
    };
</script>

<style scoped>
    .signup-main {
        margin-top: 3%;
        margin-left: 30%;
        margin-right: 30%;
    }

    sui-input {
        width: 100%;
    }

    input {
        margin-right: 3px;
    }

    .id-input {
        width: 96%;
        margin-right: 3px;
    }

    .email-input {
        display: inline-block;
        width: 30%;
        margin-right: 3px;
    }

    .phone-input-front {
        width: 25.5%;
        margin-right: 3px;
    }

    .phone-input-back {
        width: 63%;
        margin-right: 3px;
    }

    .signup-title {
        text-align: center;

    }

    .signup-btn {
        margin-left: 40% !important;
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

    .checkbox-wrap {
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

    .sms-comp-disagree {
        margin-left: 9%;
    }

    .info-table {
        text-align: center !important;
        color: #777 !important;
    }

    .sign-in {
        margin-top: 5%;
        padding-left: 12%;
    }
</style>