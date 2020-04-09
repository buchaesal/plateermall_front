<template>
    <div class="top_header">
        <!--        <div class="left_bar">-->
        <!--            <a href="#">앱다운로드</a>-->
        <!--            <a href="#">바로방문 ON</a>-->
        <!--        </div>-->
        <div class="right_bar">
            <a v-if="!isAuthenticated" @click="goToLoginForm" href="#">로그인</a>
            <a v-if="isAuthenticated" @click="goToMyPage" href="#">{{userInfo.name}}님 반갑습니다.</a>
            <a v-if="isAuthenticated" @click="logout" href="#">로그아웃</a>
            <router-link v-else to="/signup" href="#">회원가입</router-link>
            <router-link to="/faq">고객센터</router-link>
        </div>
    </div>
</template>

<script>

    export default {
        name: "TopHeader",
        props: [
            "isAuthenticated",
            "userInfo",
        ],
        methods: {
            goToLoginForm() {
                this.$router.push('/login');
            },
            logout() {
                this.$store.commit('LOGOUT');
                alert('로그아웃 되었습니다.');
            },
            goToMyPage() {
                this.$router.push('/myPageMain');
            }
        },
    }
</script>

<style scoped>
    .top_header {
        height: 50px;
    }

    /*.left_bar {*/
    /*    display: inline-block;*/
    /*    float: left;*/
    /*    margin: 10px 0 0 6%;*/
    /*}*/

    /*.left_bar a {*/
    /*    color: #878787;*/
    /*    font-weight: bold;*/
    /*    margin: 0 7px;*/
    /*    font-size: 0.9rem;*/
    /*}*/

    .right_bar {
        display: inline-block;
        float: right;
        margin: 10px 40px 0 0;
    }

    .right_bar a {
        color: #878787;
        font-weight: bold;
        margin: 0 10px;
        font-size: 0.9rem;
    }
</style>
