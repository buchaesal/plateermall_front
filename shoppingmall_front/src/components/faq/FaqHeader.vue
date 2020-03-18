<template>
    <div>
    <header>
        <h3 class="page_title">{{ title }}</h3>
        <p class="title_button" v-if="isButton">
            <router-link to="/orderList" class="btn_normal">주문배송조회</router-link>
            <a href="#" class="btn_normal">취소/교환/반품 조회</a>
        </p>
    </header>
    </div>
</template>

<script>
    export default {
        name: "Faq-header",
        props:{
            isButton:{
                type: Boolean,
                default: false
            },
            title: String
        }
    }
</script>

<style scoped>
    .page_title{
        padding: 16px 0 14px;
        font-size: 24px;
        font-weight: normal;
    }

    h3{
        margin:0
    }
    header{
        position: relative;
    }
    .sub_cont header .title_button {
        position: absolute;
        right: 0;
        font-size: 0;
    }
    .title_button{
        top: 7px;
    }
    .title_button [class^="btn_"] {
        height: 40px;
        padding: 0 24px;
        font-size: 14px;
        line-height: 38px;
    }
    [class^="btn_normal"] {
        border: 1px solid #b3b3b3;
        background-color: #fff;
        color: #000;
    }
    [class^="btn_"] {
        display: inline-block;
        text-align: center;
    }
    a{
        cursor: pointer;
    }
</style>