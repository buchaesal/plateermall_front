<template>
    <div id="main-page-container">
        <Header></Header>
        <div class="loading-area" v-if="categoryCode != categoryCode">
            <sui-loader active centered inline/>
        </div>
        <div class="fix-inner" v-else>
            <h2 class="page-title">{{categoryCode.name}}</h2>

            <div class="product-sort" role="group">
                <ul class="option-field sort-setting">
                    <li>
                        <input type="radio" name="sort" id="sort-result1" value="RANK/DESC,DATE/DESC" checked="checked"><label
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
                        <input type="radio" name="sort" id="sort-result4" value="DATE/DESC"><label for="sort-result4">최근등록순</label>
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

            {{categoryCode}}
            <sui-card-group :items-per-row="items_per_row">
                <sui-card class="goods-card" v-for="(goodsData, index) in goodsList" :key="index"
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
        },
        created() {
            this.categoryCode = this.$route.params.categoryCode;
            this.$store.commit("getCategoryGoodsModelList", this.categoryCode);
        },
        computed: {
            goodsList() {
                return this.$store.state.goodsStore.categoryGoodsModels;
            },
        },
        watch: {}
    }
</script>

<style scoped>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .product-sort .sort-setting {
        margin-bottom: 20px;
        border: solid 1px #e6e6e6;
    }

    .product-sort .sort-setting li {
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

    .product-sort .sort-setting li:after {
        content: '';
        display: inline-block;
        width: 1px;
        height: 15px;
        background-color: #d8d8d8;
        vertical-align: middle;
    }
</style>