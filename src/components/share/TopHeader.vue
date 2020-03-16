<template>
    <div class="top-header">
        <ul>
            <li><a href="#">앱다운로드</a></li>
            <li><a href="#">바로방문</a></li>
        </ul>
        <ul>
            <li><a href="#">로그인</a></li>
            <li><a href="#">회원가입</a></li>
            <li><a href="#">고객센터</a></li>
            <li><a href="#">스마트픽</a></li>
            <li><a href="#">이벤트</a></li>
            <li><a href="#">출석체크</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "TopHeader.vue"
    }
</script>

<style scoped>
    ul{
        list-style: none;
        display: block;
        padding-inline-start: 40px;
        font-size: 12px;
        line-height: 36px;
        color: lightgray;
        float: left;
    }
    li {
        float: left;
        margin-left: 28px;
        font-weight: 400;
    }
    .top-header {
        min-width: inherit;
        font-weight: bold;
        max-width: 1680px;
        margin: 0 auto;
        overflow: hidden;
        padding: 0 40px;
        display: block;
    }
</style>