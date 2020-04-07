<template>
        <div id="main-page-container">
            <Header></Header>
            <div class="container">
                <div class="fix-inner">
                    <div class="search-top">
                        <h3 class="title">“{{query}}” 검색결과 <em id="titleCount">{{resultCount}}</em></h3>
                    </div>
                    <div class="category-nav">
                        <sui-accordion exclusive>
                            <sui-accordion-title class="nav-title">
                                <div class="title-text">카테고리</div>
                                <div class="title-icon">
                                    <sui-icon name="dropdown"/>
                                </div>
                            </sui-accordion-title>
                            <sui-accordion-content>
                                <div class="nav-content">
                                    <ul>
                                        <li class="sub-category" v-for="(categoryData, index) in categoryList"
                                            :key="index"
                                            @click="changeCategory(categoryData.categoryCode)">{{categoryData.name}}
                                        </li>
                                    </ul>
                                </div>
                            </sui-accordion-content>
                            <sui-accordion-title>
                                <div class="nav-title">
                                    <div class="title-text">가격대</div>
                                    <div class="title-icon">
                                        <sui-icon name="dropdown"/>
                                    </div>
                                </div>
                            </sui-accordion-title>
                            <sui-accordion-content>
                                <div class="nav-content">
                                    <sui-form>
                                        <sui-form-field>
                                            <sui-checkbox radio label="전체" value="1" v-model="priceOption"/>
                                        </sui-form-field>
                                        <sui-form-field>
                                            <sui-checkbox radio label="5만원 이하" value="2" v-model="priceOption"/>
                                        </sui-form-field>
                                        <sui-form-field>
                                            <sui-checkbox radio label="5만원 ~ 10만원" value="3" v-model="priceOption"/>
                                        </sui-form-field>
                                        <sui-form-field>
                                            <sui-checkbox radio label="10만원 ~ 30만원" value="4" v-model="priceOption"/>
                                        </sui-form-field>
                                        <sui-button secondary type="submit">검색</sui-button>
                                    </sui-form>
                                </div>
                            </sui-accordion-content>
                        </sui-accordion>
                    </div>
                    <div class="goods-area">
                        <sui-loader active centered inline v-if="query == null"/>
                        <SearchGoodsCards :items_per_row="4" v-else/>
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
    import SearchGoodsCards from "../SearchGoodsCards";

    export default {
        name: "SearchResultPage",
        components: {
            SearchGoodsCards,
            Header,
            Footer,
            SideBanner,
        },
        data() {
            return {
                isActive: true,
                priceOption: "",
                resultCount: 0,
                query: "",
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
        },
        created() {
            this.getQuery();
        },
        computed: {
        //     categoryInfo() {
        //         return this.$store.state.categoryStore.categoryInfo;
        //     },
            categoryList() {
                return this.$store.state.categoryStore.categoryList;
            },
            errorState() {
                return this.$store.state.categoryStore.errorInfo;
            }
        },
        watch: {
            "$route": ["getCategoryCode", "getCategoryList"],
            errorState() {
                this.getCategoryCode();
            }
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
</style>