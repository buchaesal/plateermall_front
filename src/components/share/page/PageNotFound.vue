<template>
    <div class="container">
        <div class="min-inner">
            <div class="box-wrap">
                <div class="err-box-top">
                    <i class="icon-logo"></i>
                    <p class="title">쇼핑에 불편을 드려 죄송합니다.</p>
                    <p class="desc">고객님께서 찾으시는 페이지를 찾을 수가 없습니다.<br>찾으시는 페이지 주소가 올바른지 다시 한번 확인 부탁 드립니다.</p>
                    <sui-button-group class="two back-or-home">
                        <sui-button content="이전" @click="goToBack"></sui-button>
                        <sui-button secondary content="홈으로 이동" @click="goToHome"></sui-button>
                    </sui-button-group>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PageNotFound",
        methods: {
            goToBack() {
                this.$router.go(-1);
            },
            goToHome() {
                this.$router.push("/");
            },
        }
    }
</script>

<style scoped>
    body {
        overflow: hidden !important;
    }

    .container {
        padding-top: 15%;
        width: 100%;
        min-height: 600px;
    }

    .min-inner {
        margin: 0 auto;
        padding: 0 20px;
        overflow: hidden;
        max-width: 1240px;
    }

    .box-wrap {
        margin: 0 auto;
        padding: 0 160px;
        width: 800px;
        border: 1px solid #ededed;
        text-align: center;
    }

    .err-box-top {
        padding: 80px 0 40px;
        position: relative;
    }

    .icon-logo {
        display: inline-block;
        width: 80px;
        height: 80px;
        background-size: 80px;
        background-image: url("../../../assets/logo.png");
    }

    p {
        margin: 0;
        padding: 0;
    }

    .title {
        margin-top: 40px;
        font-size: 24px;
        font-weight: 500;
    }

    .desc {
        margin-top: 12px;
        font-size: 14px;
        color: #666;
    }

    .back-or-home {
        margin: 40px 0;
    }

    .back-or-home .button {
        font-size: 1.3rem;
    }
</style>