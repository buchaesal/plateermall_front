<template>
  <div class="main">
    <div>
      <label>
        <h2 class="signup-title">회원가입</h2>
      </label>
    </div>
    <div>
        <sui-input class="id-input" type="text" placeholder="아이디"/>
        <br>
        <sui-input class="email-input" type="text" placeholder="아이디"/>
        @
        <sui-input class="email-input" type="text" placeholder="아이디"/>
        <sui-input class="email-input" type="text" placeholder="아이디"/>
        <p>* 로그인 계정으로 이메일 주소가 사용됩니다.</p>
        <sui-input class="phone-input-front" type="text"/>
        <sui-input class="phone-input-back" type="text"/>
    </div>
    <sui-button class="signup-btn">회원가입</sui-button>
  </div>
</template>

<script>
export default {
  name: "Sample",
  data() {
    return {
      domain: []
    };
  }
};
</script>

<style scoped>
.main {
  margin-left: 30%;
  margin-right: 30%;
}
sui-input {
    width: 100%;
}
/* .form-field{
    width: 30%;
    margin-left: 30% !important;
} */
.id-input {
    width: 100%;
}
.email-input{
    display: inline-block;
    width: 32.9%;
}
.phone-input-front{
    width:30%;
}
.phone-input-back{
    width:70%;
}
.signup-title{
    text-align: center;
}
.signup-btn{
    margin-left: 40% !important;
}
</style>