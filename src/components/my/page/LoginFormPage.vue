<template>
    <div class="login-main">
        <p class="member_txt-small">
            PLATEER 공식 쇼핑몰
            <br/>
            <span class="member-txt-small-brown">PLATEER MALL</span>에 오신 것을 환영합니다.
        </p>

        <h2 class="member_title">로그인</h2>
        <sui-form>
            <sui-form-field>
                <input placeholder="아이디" size="20" v-model="user.email"/>
            </sui-form-field>
            <sui-form-field>
                <input type="password" placeholder="비밀번호" v-model="user.password" @keyup.enter="login"/>
            </sui-form-field>


            <!-- <sui-button type="submit" width="50%">로그인</sui-button> -->
        </sui-form>
        <p class="btns-wrap">
            <button type="button" class="loginBtn" @click="login" style="cursor: pointer">로그인</button>
        </p>
        <sui-checkbox label="아이디 저장" v-model="saveId"/>
        <router-link to="/signUp" class="requestReg">회원가입</router-link>
        <router-link to="/" class="requestReg">메인으로</router-link>
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
                },
                saveId: false
            }
        },
        methods: {
            login() {
                this.$store.dispatch('REQUEST_LOGIN', {
                    user : this.user,
                    isSaveId: this.saveId})
                    .then((res) => {
                        if (res) {
                            alert(res);
                        }
                    })
            }
        },
        created() {
            const id = localStorage.getItem('saveId');

            if (id) {
                this.user.email = id;
                this.saveId = true;
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

    .requestReg {
        margin-left: 5%;
        color: rgba(4, 4, 4, 0.82);
        font-weight: bolder;
    }
</style>