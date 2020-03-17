<template>
  <div class="login-main">
    <p class="member_txt-small">
      롯데백화점 공식 쇼핑몰
      <br>
      <span>엘롯데</span>에 오신 것을 환영합니다.
    </p>
    
    <h2 class="member_title">로그인</h2>
    <sui-form>
      <sui-form-field>
        <input placeholder="아이디" size="20" />
      </sui-form-field>
      <sui-form-field>
        <input placeholder="비밀번호" />
      </sui-form-field>
      <sui-form-field>
        <sui-checkbox label="아이디 저장" />
      </sui-form-field>
      <sui-button type="submit" width="50%">로그인</sui-button>
      <sui-button>아이디 찾기</sui-button>
      <sui-button>비밀번호 찾기</sui-button>
      <sui-button>회원가입</sui-button>
    </sui-form>
    
  </div>
</template>

<script>
export default {
  name: "LoginFormPage"
};
</script>

<style scoped>
.login-main {
  margin-top: 10%;
  margin-left: 30%;
  margin-right: 30%;
}

.member_txt-small {
    /* margin: 0 0 12px 102px; */
    font-size: 32px;
    text-align: left;
    font-weight: 500;
    line-height: 44px;
}
</style>