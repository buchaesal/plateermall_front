<template>
    <div id="main-page-container">
        <Header></Header>
        <div class="container">
            <div class="fix-inner" v-if="categoryCode != categoryInfo.categoryCode">
                <sui-loader active centered inline/>
            </div>
            <div class="fix-inner" v-else>
                <div class="category-nav">
                    <sui-accordion exclusive>
                        <sui-accordion-title active>
                            <div class="nav-title">
                                <div class="title-text">카테고리</div>
                                <div class="title-icon">
                                    <sui-icon name="dropdown"/>
                                </div>
                            </div>
                        </sui-accordion-title>
                        <sui-accordion-content active>
                            <div class="nav-content">
                                <div v-for="(categoryData, index) in categoryList" :key="index"
                                     @click="changeCategory(categoryData.categoryCode)">{{categoryData.name}}
                                </div>
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
                            <sui-form>
                                <sui-form-field>
                                    <sui-checkbox radio label="Small" value="1" v-model="priceOption"/>
                                </sui-form-field>
                                <sui-form-field>
                                    <sui-checkbox radio label="Medium" value="2" v-model="priceOption"/>
                                </sui-form-field>
                                <sui-form-field>
                                    <sui-checkbox radio label="Large" value="3" v-model="priceOption"/>
                                </sui-form-field>
                                <sui-form-field>
                                    <sui-checkbox radio label="X-Large" value="4" v-model="priceOption"/>
                                </sui-form-field>
                            </sui-form>
                        </sui-accordion-content>
                    </sui-accordion>
                </div>
                <CategoryGoodsCards :categoryInfo="categoryInfo"/>
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
    import CategoryGoodsCards from "../CategoryGoodsCards";

    export default {
        name: "CategoryPage",
        components: {
            CategoryGoodsCards,
            Header,
            Footer,
            SideBanner,
        },
        data() {
            return {
                categoryCode: "",
                priceOption: "",
            }
        },
        methods: {
            getCategoryCode() {
                this.categoryCode = this.$route.params.categoryCode;
                console.log(this.categoryCode);
            },
            changeCategory(categoryCode) {
                this.categoryCode = categoryCode;
            },
            getCategoryInfo() {
                this.$store.commit("getCategory", this.categoryCode);
            },
            getCategoryList() {
                this.$store.commit("getCategoryList", this.categoryCode);
            },
        },
        async created() {
            this.getCategoryCode();
            await this.getCategoryInfo();
            await this.getCategoryList();
        },
        computed: {
            categoryInfo() {
                return this.$store.state.categoryStore.categoryInfo;
            },
            categoryList() {
                return this.$store.state.categoryStore.categoryList;
            },
            errorState(){
                return this.$store.state.categoryStore.errorInfo;
            }
        },
        watch: {
            "$route": ["getCategoryCode", "getCategoryInfo"],
            "categoryCode": "getCategoryInfo",
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
        margin-bottom: 80px;
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

</style>