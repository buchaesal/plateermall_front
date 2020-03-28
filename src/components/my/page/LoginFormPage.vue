<template>
    <div class="login-main">
        <p class="member_txt-small">
            롯데백화점 공식 쇼핑몰
            <br/>
            <span class="member-txt-small-brown">엘롯데</span>에 오신 것을 환영합니다.
        </p>

        <h2 class="member_title">로그인</h2>
        <sui-form>
            <sui-form-field>
                <input placeholder="아이디" size="20" v-model="user.email"/>
            </sui-form-field>
            <sui-form-field>
                <input type="password" placeholder="비밀번호" v-model="user.password"/>
            </sui-form-field>


            <!-- <sui-button type="submit" width="50%">로그인</sui-button> -->
        </sui-form>
        <p class="btns-wrap">
            <button type="button" class="loginBtn" @click="login" style="cursor: pointer">로그인</button>
        </p>
        <sui-checkbox label="아이디 저장"/>
        <div class="link_box">
            <ul class="link_list">

                <a href="#" id="requestId" class="lPointMember">아이디 찾기</a>

                <a href="#" id="requestPW" class="lPointMember">비밀번호 찾기</a>


                <a @click="goToSignUpPage" href="#" class="requestReg">회원가입</a>

            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LoginFormPage",
        data() {
            return {
                user: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            goToSignUpPage() {
                this.$router.push('/signup');
            },
            login() {
                this.$store.dispatch('REQUEST_LOGIN', this.user)
                    .then((res) => {
                        if(res){
                            alert(res);
                        }
                    })
            }
        }
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

    .member-txt-small-brown {
        color: #8d685a;
    }

    .btns_wrap {
        margin: 32px auto 0;
        width: 384px;
        height: 64px;
        text-align: center;
    }

    .loginBtn {
        margin-top: 2.5%;
        padding-top: 2.5%;
        padding-bottom: 2.5%;
        background-color: #000000;
        position: static;
        width: 100%;
        height: 100%;
        font-weight: bold;
        font-size: 25px;
        color: white;
        border: 0;
        outline: 0;
    }

    .link_box {
        margin-top: 15px;
        /* text-align: center; */
    }

    .link_list {
        width: 100%;
        display: inline-block;
    }

    .lpointMemberId {
        margin-left: 7%;
        color: gray;
    }

    .lPointMember {
        margin-left: 13%;
        color: gray;
    }

    .requestReg {
        margin-left: 13%;
        color: gray;
    }
</style>