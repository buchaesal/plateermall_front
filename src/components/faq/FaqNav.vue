<template>
    <div class="nav_set">
        <nav>
            <ul class="nav_question">
                <li>
                    <router-link to="/inquiryForm">1:1 문의하기</router-link>
                </li>
                <li>
                    <router-link to="/inquiryAnswer">1:1 답변확인</router-link>
                </li>
            </ul>
            <ul class="nav_question line">
                <li>
                    <router-link to="/myreview">상품평/후기</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "FaqNav"
    }
</script>

<style scoped>
    .nav_set {
        float: left;
        width: 180px;
        margin-right: 24px;
        padding: 31px 0;
        border-top: 3px solid #000;
        border-bottom: 3px solid #000;
        font-size: 14px;
    }

    li {
        font-size: 18px;
        font-weight: 500;
    }

    .nav_set .nav_question li + li {
        margin-top: 17px;
    }

    a {
        color: inherit;
    }

    .nav_question.line {
        margin-top: 32px;
        padding-top: 33px;
        border-top: 1px solid #b3b3b3;
    }
    ol, ul {
        list-style: none;
    }
</style>