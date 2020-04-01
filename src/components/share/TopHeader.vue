<template>
    <div class="top_header">
        <div class="left_bar">
            <a href="#">앱다운로드</a>
            <a href="#">바로방문 ON</a>
        </div>
        <div class="right_bar">
            <a v-if="!isAuthenticated" @click="goToLoginForm" href="#">로그인</a>
            <a v-if="isAuthenticated" @click="goToMyPage" href="#">{{userInfo.name}} 님 반갑습니다.</a>
            <a v-if="isAuthenticated" @click="logout" href="#">로그아웃</a>
            <router-link v-else to="/signup" href="#">회원가입</router-link>
            <router-link to="/faq">고객센터</router-link>
            <a href="#">스마트픽</a>
            <a href="#">이벤트</a>
            <a href="#">출석체크</a>
        </div>
    </div>
</template>

<script>

    import {getCurrentUserInfo} from "../../api/UserApi";

    export default {
        name: "TopHeader.vue",
        data() {
            return {
                userInfo: '',
            }
        },
        computed: {
            isAuthenticated(){
                return this.$store.getters.isAuthenticated;
            },
        },
        methods: {
            goToLoginForm() {
                this.$router.push('/login');
            },
            logout(){
                this.$store.commit('LOGOUT');
                alert('로그아웃 되었습니다.');
            },
            goToMyPage() {
                this.$router.push('/myPageMain');
            }
        },
        async created() {
            if(this.isAuthenticated){
                this.userInfo = await getCurrentUserInfo();
            }
        }
    }
</script>

<style scoped>
    .top_header {
        height: 50px;
    }
    .left_bar {
        display: inline-block;
        float: left;
        margin: 10px 0 0 6%;
    }

    .left_bar a {
        color: #878787;
        font-weight: bold;
        margin: 0 7px;
        font-size: 0.9rem;
    }

    .right_bar {
        display: inline-block;
        float: right;
        margin: 10px 6% 0 0;
    }

    .right_bar a {
        color: #878787;
        font-weight: bold;
        margin: 0 10px;
        font-size: 0.9rem;
    }
</style>
