<template>
    <div class="main">
    <span>롯데백화점 공식 쇼핑몰</span>
    <p>엘롯데에 오신 것을 환영합니다.</p>
        <h2 class="member_title">로그인</h2>
        <sui-form>
    <sui-form-field>

      <input placeholder="아이디" size="20"/>
    </sui-form-field>
    <sui-form-field>

      <input placeholder="비밀번호" />
    </sui-form-field>
    <sui-form-field>
      <sui-checkbox label="아이디 저장" />
    </sui-form-field>
    <sui-button type="submit">로그인</sui-button>
  </sui-form>
  <br>
  <sui-button>아이디 찾기</sui-button>
    <sui-button>비밀번호 찾기</sui-button>
    <sui-button>회원가입</sui-button>
    </div>
</template>

<script>
    export default {
        name: "Sample"
    }
</script>

<style scoped>
    .main {
        text-align: center;
    }
</style>