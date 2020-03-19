<template>
    <div class="search_faq-form">
        <form>
            <fieldset>
            <input type="text" placeholder="자주 묻는 질문을 검색해보세요.">
                <sui-icon size="large" name="search"></sui-icon>
            </fieldset>
        </form>

        <ul class="rank">
            <li><a href="#">주문내역확인</a></li>
            <li><a href="#">배송확인</a></li>
            <li><a href="#">L.POINT</a></li>
            <li><a href="#">반품접수</a></li>
            <li><a href="#">교환접수</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Faq-search"
    }
</script>

<style scoped>
    .search_faq-form {
        position: relative;
        margin: 0 0 100px;
        padding: 40px 58px 0;
        border-top: 1px solid #ededed;
    }
    fieldset {
        border: 0;
        margin: 0;
        padding: 0;
    }
    .search_faq-form input[type="text"] {
        width: 100%;
        height: 54px;
        padding-left: 20px;
        padding-right: 60px;
        border: 0;
        border-radius: 2px;
        background-color: #f2f2f2;
        font-size: 18px;
    }
    .search_faq-form i {
        position: absolute;
        right: 70px;
        top: 57px;
        width: 44px;
        height: 30px;
        display: inline-block;
        vertical-align: middle;
        background-size: 480px auto;
        background-repeat: no-repeat;
        background-position: -5px -84px;
        cursor: pointer;
    }
    .rank {
        margin-top: 16px;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .rank li {
        float: left;
        color: #666;
    }
    .search_faq-form .rank li:not(:first-child) {
        margin-left: 20px;
        padding-left: 20px;
        position: relative;
    }
    .search_faq-form .rank li:not(:first-child):before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 50%;
        width: 1px;
        height: 15px;
        margin-top: -8px;
        background-color: #d8d8d8;
    }
    a{
        color: inherit;
    }
</style>