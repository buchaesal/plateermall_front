<template>
    <div class="min_inner">
        <h3 class="section_title ui">{{section_title}}</h3>
        <div>
            <sui-card-group :items-per-row="items_per_row">
                <sui-card class="goods-card" v-for="(goodsData, index) in goodsList" :key="index"
                          @click="goToGoodsDetail(goodsData.goodsCode)">
                    <sui-image :src="goodsData.imgUrl" width="100%"/>
                    <sui-card-content>
                        <sui-card-header class="copy">{{goodsData.copy}}</sui-card-header>
                        <sui-card-meta class="title"></sui-card-meta>
                        <sui-card-description>
                            {{goodsData.saleCnt}}<span>개 구매</span>
                        </sui-card-description>
                    </sui-card-content>
                    <sui-card-content extra class="price">
                        <sui-icon name="won sign icon"/>
                        <span class="price">{{goodsData.benefitPrice.toLocaleString()}} ~</span><span class="unit"></span>
                        <span class="original-price">{{goodsData.originalPrice}}</span>
                        <span slot="right" class="dcrate">{{goodsData.dcRate}}%</span>
                    </sui-card-content>
                </sui-card>
            </sui-card-group>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsListCol3",
        data() {
            return {
                section_title: "FLEX-Tem",
                items_per_row: 3,
                categoryCode: "10001",
            }
        },
        methods: {
            goToGoodsDetail(goodsCode) {
                this.$router.push('/goodsDetail/' + goodsCode);
            },
        },
        created() {
            this.$store.commit("getGoodsModelListCol3",
                {
                    categoryCode: this.categoryCode,
                    quantity: this.items_per_row * 2
                });
        },
        computed: {
            goodsList() {
                return this.$store.state.goodsStore.goodsModelsCol3;
            }
        },
    }
</script>

<style scoped>
    .min_inner {
        width: 1240px;
        max-width: 1600px;
        min-width: 1240px;
        margin: 0 auto;
    }

    .section_title {
        position: relative;
        margin-bottom: 56px;
        font-size: 32px;
        line-height: 44px;
        font-weight: 400;
        text-align: center;
    }

    .original-price {
        text-decoration: line-through;
        font-size: 0.8em;
    }

    .unit {
        margin-left: 2px;
    }

    .goods-card {
        cursor: pointer;
    }
</style>