<template>
    <div class="nav_set">
        <nav>
            <ul class="nav_question">
                <li><a href="#">1:1 문의하기</a></li>
                <li><a href="#">1:1 답변확인</a></li>
                <li><router-link to="/myreview"><a href="#">상품평/이용후기 관리</a></router-link></li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "Faq-main"
    }
</script>

<style scoped>
.nav_set{
    float: left;
    width: 180px;
    margin-right: 24px;
    padding: 31px 0;
    border-top: 3px solid #000;
    border-bottom: 3px solid #000;
    font-size: 14px;
    height: 1200px;
}

    li{
        font-size: 18px;
        font-weight: 500;
    }
    .nav_set .nav_question li+li {
    margin-top: 17px;
}
    a{
        color:inherit;
    }
</style>