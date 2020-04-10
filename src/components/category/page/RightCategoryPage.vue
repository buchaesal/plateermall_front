<template>
    <div id="main-page-container">
        <Header></Header>
        <div class="container">
            <div class="fix-inner">
                <div class="banner">
                    {{categoryInfo.comment}}
                </div>

                <div class="goods-area">
                    <sui-loader active centered inline v-if="categoryCode !== categoryInfo.categoryCode"/>

                    <div v-else-if="goodsList">
                        <h2 class="page-title">{{categoryInfo.name}}</h2>

                        <GoodsListCards :goodsList="goodsList" :items_per_row="5"
                                        :noItemMessage="noItemMessage"
                                        v-on:reSort="reSort"/>
                    </div>
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
    import QueryModel from "../../share/model/QueryModel";

    export default {
        name: "RightCategoryPage",
        components: {
            GoodsListCards,
            Header,
            Footer,
            SideBanner,
        },
        data() {
            return {
                categoryCode: "",
                sort: "goodsCode/DESC",
                noItemMessage: "현재 등록된 상품이 없습니다.",
            }
        },
        methods: {
            getCategoryCode() {
                this.categoryCode = this.$route.params.categoryCode;
            },
            getCategoryInfo() {
                this.$store.commit("getCategory", this.categoryCode);
            },
            getCategoryList() {
                this.$store.commit("getCategoryList", this.categoryCode);
            },
            getGoodsList() {
                this.$store.commit("getPageGoodsModelList", new QueryModel("", this.sort, this.categoryCode, "", "")
                );
            },
            changeCategory(categoryCode) {
                this.categoryCode = categoryCode;
            },
            reSort(sort) {
                this.sort = sort;
                this.getGoodsList();
            },
        },
        created() {
            this.getCategoryCode();
            this.getCategoryInfo();
            this.getCategoryList();
            this.getGoodsList();
        },
        beforeUpdate() {
            if (this.categoryInfo.categoryCode == null) {
                this.$router.push("/404");
            }
        },
        computed: {
            categoryInfo() {
                return this.$store.state.categoryStore.categoryInfo;
            },
            categoryList() {
                return this.$store.state.categoryStore.categoryList;
            },
            errorState() {
                return this.$store.state.categoryStore.errorInfo;
            },
            goodsList() {
                return this.$store.state.goodsStore.pageGoodsModels;
            }
        },
        watch: {
            "$route": ["getCategoryCode", "getCategoryList"],
            "categoryCode": ["getCategoryInfo", "getGoodsList"],
            errorState() {
                this.getCategoryCode();
            },
            "goodsList": [],
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

    .banner {
        overflow: hidden;
        position: relative;
        width: 100%;
        height: 150px;
        line-height: 150px;
        font-size: 30px;
        background-color: black;
        color: white;
        text-align: center;
        margin-bottom: 80px;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    li {
        margin-top: 12px;
    }

    .goods-area {
        float: left;
        width: 100%;
        font-size: 14px;
    }
</style>