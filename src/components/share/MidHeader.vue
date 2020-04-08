<template>
    <div class="search_box">
        <img @click="goToHome" class="logo-img" src="../../assets/PlateerMall.png">

        <div class="util">
            <div class="search_area">
                <input type="text" :placeholder="placeholder" value autocomplete="off" size="40"
                       v-model="searchKeyword" @keyup.enter="goToResult">
                <sui-icon name="search" class="search_btn" size="large" @click="goToResult"/>
            </div>
        </div>

        <div class="my_info">
            <router-link to="/myPageMain">
                <sui-icon name="user" size="large"/>
            </router-link>
            <router-link to="/wishlist">
                <sui-icon name="heart" size="large"/>
            </router-link>
            <router-link to="/cart">
                <sui-icon name="shopping bag" size="large"/>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MidHeader",
        data() {
            return {
                placeholder: "나이키 봄 컬렉션",
                searchKeyword: "",
            }
        },
        methods: {
            goToHome() {
                this.$router.push('/');
            },
            goToResult() {
                this.$router.replace({name: "searchResult", query: {query: this.searchKeyword}})
            },
            getQuery() {
                this.searchKeyword = this.$route.query.query;
            },
        },
        created() {
            this.getQuery();
        }
    }
</script>

<style scoped>

    .logo-img {
        cursor: pointer;
    }

    a:link {
        color: black;
        text-decoration: none;
    }

    a:visited {
        color: black;
        text-decoration: none;
    }


    .search_btn {
        margin-top: 0;
        cursor: pointer;
    }

    img {
        position: relative;
        display: inline-block;
        vertical-align: bottom;
        top: 5px;
        margin: 0;
        margin-right: 20px;
        padding: 0;
        min-width: 52px;
        max-width: 128px;
        width: auto;
        max-height: 52px;
    }

    .util {
        display: inline-block;
        width: auto;
        font-width: 400;
        font-size: 14px;
    }

    .search_box {
        min-width: inherit;
        max-width: 1680px;
        margin: 0 auto;
        position: relative;
        overflow: inherit;
        padding: 0 40px;
        font-width: 400;
        display: block;
    }

    .search_area input {
        display: inline;
        height: 45px;
        margin-top: 10px;
        padding: 8px 35px 1px 4px;
        background: transparent;
        border: 0;
        border-bottom: 2px solid #000;
    }

    input:focus {
        outline: none;
    }

    .my_info {
        float: right;
        height: 50px;
    }

    i {
        margin-right: 20px;
        margin-top: 30px;
    }
</style>