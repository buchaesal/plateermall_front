<template>
    <div class="">
        <div class="main-top-header">
            <a href="#" class="top-header-link-left">앱다운로드 </a>

            <a href="#" class="top-header-link-left">바로방문</a>

            <a href="#" class="top-header-link-right">출석체크</a>
            <a href="#" class="top-header-link-right">이벤트</a>
            <a href="#" class="top-header-link-right">스마트픽</a>
            <a href="#" class="top-header-link-right">고객센터</a>
            <a href="#" class="top-header-link-right">박상현님 로그아웃</a>
            
        </div>

        <h1 class="main-title">FLEX-Tem</h1>
        <div class="main-contents-3">
            3개 짜리 상품들어갈 공간
        </div>
        <div class="main-contents-5">
            5개 짜리 상품들어갈 공간
        </div>   
        <div>header</div>
        <div>menus</div>
        <div>contents</div>
        <div>footer</div>
    </div>
</template>

<script>
    export default {
        name: "Sample"
    }
</script>

<style scoped>
    .main-top-header {
        height: 50px;
        background-color: gray;
    }

    .top-header-link-left {
        color: white;
        margin-left: 10px;
    }

    .top-header-link-right {
        color: white;
        float: right;
        margin-left: 10px;
    }

    top-header-link:hover {
        color: white;
    }

    .main-contents-3 {
        height: 300px;
        background-color: wheat;
    }

    .main-contents-5 {
        height: 300px;
        background-color: thistle;
    }

    .main-title {
        width: 100%;
        text-align: center;
    }
</style>