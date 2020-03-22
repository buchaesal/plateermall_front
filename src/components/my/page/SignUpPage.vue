<template>
  <div class="signup-main">
    <!-- <AgreementPage/> -->
    <div>
      <sui-image @click="backToMain" src="https://simage.lotte.com/ellotte/images/login/newel_icon_top_logo.jpg" size="small" />
    </div>
    <div>
      <label>
        <h2 class="signup-title">회원가입</h2>
      </label>
    </div>
    <br>
    <br>
    <div>
        <sui-input v-model="userName" class="id-input" type="text" placeholder="이름" :disabled="isNotDuplicated"/>
        <br>
        <br>
        <sui-input v-model="userEmail" class="email-input" type="text" placeholder="이메일" :disabled="isNotDuplicated"/>
        @
        <sui-input v-if="currentEmailDomain === '직접입력'" v-model="currentEmailDomain" class="email-input" type="text" placeholder="직접입력" :disabled="isNotDuplicated"/>
        <sui-input v-else v-model="currentEmailDomain" class="email-input" type="text" :disabled="true"/>
        <sui-dropdown class="email-input"
          placeholder="직접입력"
          selection
          :options="emailDomain"
          v-model="currentEmailDomain" :disabled="isNotDuplicated"
        />
        <br>
        <br>
        <p>* 로그인 계정으로 이메일 주소가 사용됩니다.</p>
        <sui-dropdown class="phone-input-front"
          placeholder="State"
          selection
          :options="headNumber"
          v-model="currentHeadNumber" :disabled="isNotDuplicated"
        />
        <!-- <sui-input class="phone-input-front" type="text"/> -->
        <sui-input class="phone-input-back" :disabled="isNotDuplicated" type="list"/>
    </div>
    <br>
    <sui-button @click="signUp" class="signup-btn">중복확인</sui-button>
    <br>
    <br>
    <SignUpDetail v-if="isNotDuplicated"></SignUpDetail>
    <br>
    <br>
  </div>
</template>

<script>
import SignUpDetail from '../SignUpDetail';
// import AgreementPage from './AgreementPage';

export default {
  name: "Sample",
  data() {
    return {
      isNotDuplicated: false,
      userName: '',
      userEmail: '',
      currentEmailDomain: '직접입력',
      currentHeadNumber: '010',
      emailDomain: [
        { text: 'gmail.com', value: 'gmail.com'},
        { text: 'naver.com', value: 'naver.com'},
        { text: 'hanmail.com', value: 'hanmail.com'},
        { text: 'paran.com', value: 'paran.com'},
        { text: 'nate.com', value: 'nate.com'},
        { text: '직접입력', value: '직접입력'},
      ],
       headNumber: [
        { text: '010', value: '010' },
        { text: '011', value: '011' },
        { text: '017', value: '017' },
        { text: '016', value: '016' },
        { text: '018', value: '018' },
      ],
    };
  },
  methods: {
    backToMain() {
      //메인 링크
    },
    signUp() {
      //
      this.isNotDuplicated = true;
    },
  },
  components: {
    SignUpDetail,
    // AgreementPage,
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
input{
  margin-right: 3px;
}
.id-input {
    width: 96%;
    margin-right: 3px;
}
.email-input{
    display: inline-block;
    width: 30%;
    margin-right: 3px;
}
.phone-input-front{
    width:25.5%;
    margin-right: 3px;
}
.phone-input-back{
    width:63%;
    margin-right: 3px;
}
.signup-title{
    text-align: center;

}
.signup-btn{
    margin-left: 40% !important;
}
</style>