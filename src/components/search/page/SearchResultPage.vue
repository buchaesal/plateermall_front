<template>
    <div id="main-page-container">
        <Header :searchKeyword="query"></Header>
        <div class="container">
            <div class="fix-inner">
                <div class="search-top">
                    <h3 class="title">“{{query}}” 검색결과 <em
                            id="titleCount">{{searchResultGoods.length.toLocaleString()}}</em></h3>
                </div>
                <Navigation :categoryList="categoryList" :isActive="isActive" v-on:changeCategory="changeCategory"/>
                <div class="goods-area">
                    <sui-loader active centered inline v-if="searchResultGoods[0].GoodsModel != undefined"/>
                    <GoodsListCards v-else
                                    :goodsList="searchResultGoods" :items_per_row="4"
                                    :noItemMessage="noItemMessage"
                                    v-on:reSort="reSort"/>
                </div>
            </div>
        </div>
        <Footer></Footer>
        <SideBanner></SideBanner>
    </div>

</template>

<script>

    import Header from "../../share/Header";
    import Footer from "../../share/Footer";
    import SideBanner from "../../share/SideBanner";
    import GoodsListCards from "../../share/GoodsListCards";
    import Navigation from "../../share/Navigation";

    export default {
        name: "SearchResultPage",
        components: {
            Navigation,
            GoodsListCards,
            Header,
            Footer,
            SideBanner,
        },
        data() {
            return {
                query: "",
                isActive: false,
                sort: "goodsCode/DESC",
                resultCount: 0,
                noItemMessage: "검색 결과가 없습니다."
            }
        },
        methods: {
            getQuery() {
                this.query = this.$route.query.query;
            },
            getSearchResult() {
                this.$store.commit("getSearchResultList",
                    {
                        query: this.query,
                        sort: this.sort,
                        categoryCode: this.categoryCode,
                    }
                );
            },
            //getCategoryList() {},
            changeCategory(categoryCode) {
                this.categoryCode = categoryCode;
            },
            reSort(sort) {
                this.sort = sort;
                this.getSearchResult();
            },
        },
        created() {
            this.getQuery();
            this.getSearchResult();
        },
        computed: {
            categoryList() {
                return this.$store.state.categoryStore.categoryList;
            },
            searchResultGoods() {
                return this.$store.state.goodsStore.searchResultGoodsModels;
            },
        },
        watch: {
            "query": "getQuery",
            "$route": ["searchResultGoods", "getCategoryList"],
            "categoryCode": ["getCategoryInfo", "getCategoryGoods"],
        },
    }
</script>

<style scoped>
    .container {
        width: 100%;
        min-height: 600px;
        padding-top: 80px;
        margin-top: 185px;
        margin-bottom: 80px;
        overflow: hidden;
    }

    .fix-inner {
        min-width: 1240px;
        margin: 0 20px;
    }

    .search-top {
        text-align: center;
        margin-bottom: 40px;
    }

    .title {
        font-size: 32px;
        font-weight: 700;
    }

    .title em {
        font-style: normal;
        color: #2185d0;
    }

    .goods-area {
        float: left;
        width: 83.0%;
        width: calc(100% - 272px);
        font-size: 14px;
    }
</style>