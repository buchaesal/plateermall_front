<template>
    <div class="top_header">
        <div class="left_bar">
            <a href="#">앱다운로드</a>
            <a href="#">바로방문 ON</a>
        </div>
        <div class="right_bar">
            <a href="#">로그인</a>
            <a href="#">회원가입</a>
            <a href="#">고객센터</a>
            <a href="#">스마트픽</a>
            <a href="#">이벤트</a>
            <a href="#">출석체크</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TopHeader.vue"
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