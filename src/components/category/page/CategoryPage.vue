<template>
    <div id="main-page-container">
        <Header></Header>
        <div class="container">
            <div class="fix-inner">
                <Navigation :categoryList="categoryList" :isActive="isActive"
                            v-on:changeCategory="changeCategory"
                            v-on:changePriceRange="changePriceRange"/>

                <div class="goods-area">
                    <sui-loader active centered inline v-if="categoryCode !== categoryInfo.categoryCode"/>

                    <div v-else-if="goodsList">
                        <h2 class="page-title">{{categoryInfo.name}}</h2>

                        <GoodsListCards :goodsList="goodsList" :items_per_row="4"
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
    import Navigation from "../../share/Navigation";
    import QueryModel from "../../share/model/QueryModel";

    export default {
        name: "CategoryPage",
        components: {
            GoodsListCards,
            Header,
            Footer,
            SideBanner,
            Navigation,
        },
        data() {
            return {
                categoryCode: "",
                sort: "goodsCode/DESC",
                minPrice: "",
                maxPrice: "",
                isActive: true,
                priceOption: "",
                query: "",
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
                this.$store.commit("getPageGoodsModelList", new QueryModel(this.query, this.sort, this.categoryCode, this.minPrice, this.maxPrice)
                );
            },
            changeCategory(categoryCode) {
                if (categoryCode != "") {
                    this.categoryCode = categoryCode;
                }
            },
            changePriceRange(minPrice, maxPrice) {
                this.minPrice = minPrice;
                this.maxPrice = maxPrice;
                this.getGoodsList();
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

    .category-nav {
        margin-bottom: 24px;
        margin-right: 62px;
        border-top: 3px solid #000;
        border-bottom: 3px solid #000;
        float: left;
        width: 210px;
    }

    .ui.accordion .title {
        margin: 0;
        padding: 0;
        height: 56px;
        line-height: 56px;
    }

    .nav-title {
        border-top: 1px solid #ededed;
        border-top-width: 1px;
        border-top-style: solid;
        border-top-color: rgb(237, 237, 237);
    }

    .title-text {
        float: left;
        font-size: 14px;
        font-weight: 700;
    }

    .title-icon {
        float: right;
    }

    .nav-content {
        padding-bottom: 15px;
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
        width: 83.0%;
        width: calc(100% - 272px);
        font-size: 14px;
    }

    .page-title {
        padding-bottom: 20px;
        font-size: 32px;
    }
</style>