<template>
    <div class="min_inner">
        <h3 class="section_title ui">{{section_title}}</h3>
        <div>
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
                        <span class="price">{{goodsData.benefitPrice.toLocaleString()}}</span>
                    </sui-card-content>
                </sui-card>
            </sui-card-group>
        </div>


    </div>
</template>

<script>
    export default {
        name: "GoodsListCol4",
        data() {
            return {
                section_title: "New Arrival",
                items_per_row: 4,
                categoryCode: "10077",
            }
        },
        methods: {
            goToGoodsDetail(goodsCode) {
                this.$router.push('/goodsDetail/' + goodsCode);
            },
        },
        created() {
            this.$store.commit("getGoodsModelListCol4",
                {
                    categoryCode: this.categoryCode,
                    quantity: this.items_per_row
                });
        },
        computed: {
            goodsList() {
                return this.$store.state.goodsStore.goodsModelsCol4;
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

    .price {
        text-align: center;
    }

    .goods-card {
        cursor: pointer;
    }
</style>