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
                            <sui-icon name="dropdown"/>
                            What is a dog?
                        </sui-accordion-title>
                        <sui-accordion-content active>
                            <p>
                                A dog is a type of domesticated animal. Known for its loyalty and
                                faithfulness, it can be found as a welcome guest in many households
                                across the world.
                            </p>
                        </sui-accordion-content>
                    </sui-accordion>
                </div>
                <div class="goods-area">
                    <div class="goods-content">
                        <h2 class="page-title">{{categoryInfo.name}}</h2>

                        <div class="goods-sort">
                            <ul class="option-field sort-setting">
                                <li>
                                    <input type="radio" name="sort" id="sort-result1" value="RANK/DESC,DATE/DESC"
                                           checked="checked"><label
                                        for="sort-result1">추천순</label>
                                </li>
                                <li>
                                    <input type="radio" name="sort" id="sort-result2" value="SALESCNT15/DESC"><label
                                        for="sort-result2">판매순</label>
                                </li>
                                <li>
                                    <input type="radio" name="sort" id="sort-result3" value="GSRVCNT/DESC"><label
                                        for="sort-result3">상품평 많은순</label>
                                </li>
                                <li>
                                    <input type="radio" name="sort" id="sort-result4" value="DATE/DESC"><label
                                        for="sort-result4">최근등록순</label>
                                </li>
                                <li>
                                    <input type="radio" name="sort" id="sort-result5" value="BENEFITPRICE/ASC"><label
                                        for="sort-result5">낮은 가격순</label>
                                </li>
                                <li>
                                    <input type="radio" name="sort" id="sort-result6" value="BENEFITPRICE/DESC"><label
                                        for="sort-result6">높은 가격순</label>
                                </li>
                            </ul>
                        </div>
                        <div class="goods-card">
                            <sui-card-group :items-per-row="items_per_row">
                                <sui-card class="goods-card" v-for="(goodsData, index) in categoryGoods" :key="index"
                                          @click="goToGoodsDetail(goodsData.goodsCode)">
                                    <sui-image :src="goodsData.imgUrl" width="100%"/>
                                    <sui-card-content>
                                        <sui-card-header class="title">{{goodsData.title}}</sui-card-header>
                                        <sui-card-meta class="seller">{{goodsData.seller}}</sui-card-meta>
                                        <sui-card-description></sui-card-description>
                                    </sui-card-content>
                                    <sui-card-content extra class="price">
                                        <sui-icon name="won sign icon"/>
                                        <span class="price">{{pricing(goodsData.originalPrice,
                            goodsData.dcRate)}}</span>
                                    </sui-card-content>
                                </sui-card>
                            </sui-card-group>
                        </div>
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

    export default {
        name: "CategoryPage",
        components: {
            Header,
            Footer,
            SideBanner,
        },
        data() {
            return {
                categoryCode: "",
                items_per_row: 4,
            }
        },
        methods: {
            pricing(originalPrice, dcRate) {
                return originalPrice * (100 - dcRate) / 100;
            },
            goToGoodsDetail(goodsCode) {
                this.$router.push('/goodsDetail/' + goodsCode);
            },
            setCategoryInfo() {
                this.categoryCode = this.$route.params.categoryCode;
                this.$store.commit("getCategoryGoodsModelList", this.categoryCode);
                this.$store.commit("getCategory", this.categoryCode);
            }
        },
        created() {
            this.setCategoryInfo();
        },
        computed: {
            categoryGoods() {
                return this.$store.state.goodsStore.categoryGoodsModels;
            },
            categoryInfo() {
                return this.$store.state.categoryStore.categoryInfo;
            }
        },
        watch: {
            '$route': "setCategoryInfo",
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

    .goods-area {
        float: left;
        width: 83.0%;
        width: calc(100% - 272px);
        font-size: 14px;
    }


    .category-nav {
        margin-bottom: 24px;
        margin-right: 62px;
        border-top: 3px solid #000;
        border-bottom: 3px solid #000;
        float: left;
        width: 210px;
    }

    .page-title {
        padding-bottom: 20px;
        font-size: 32px;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .goods-sort .sort-setting {
        margin-bottom: 20px;
        border: solid 1px #e6e6e6;
    }

    .goods-sort .sort-setting:after {
        content: "";
        display: block;
        clear: both;
    }

    .goods-sort .sort-setting li {
        position: relative;
        padding: 20px 0;
        display: list-item;
        float: left;
    }

    input[type="radio"] {
        position: absolute;
        overflow: hidden;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        clip: rect(0, 0, 0, 0);
        border: 0;
        border-radius: 0;
        background: none;
        -webkit-appearance: none;
        cursor: pointer;
        opacity: 0;
    }

    .goods-sort .sort-setting li:after {
        content: '';
        display: inline-block;
        width: 1px;
        height: 15px;
        background-color: #d8d8d8;
        vertical-align: middle;
    }

    .goods-sort .goods-setting li input[type="radio"] {
        position: absolute;
    }

    .goods-sort input[type="radio"] + label {
        padding: 0 20px;
        color: #666;
        font-size: 16px;
    }

    .goods-sort input[type="radio"]:checked + label {
        font-weight: 700;
        color: #000;
        font-size: 16px;
    }

    .goods-card {
        position: relative;
    }

</style>