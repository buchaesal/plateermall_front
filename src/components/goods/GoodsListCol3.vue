<template>
    <div class="min_inner">
        <h3 class="section_title ui center aligned">{{section_title}}</h3>
        <div>
            <sui-card-group :items-per-row="3">
                <sui-card v-for="(goodsData, index) in goods" :key="index">
                    <sui-image :src="goodsData.imgUrl"/>
                    <sui-card-content>
                        <sui-card-header class="copy">{{goodsData.copy}}</sui-card-header>
                        <sui-card-meta class="title"></sui-card-meta>
                        <sui-card-description>
                            {{goodsData.saleCnt}}<span>개 구매</span>
                        </sui-card-description>
                    </sui-card-content>
                    <sui-card-content extra class="price">
                        <sui-icon name="won sign icon"/>
                        <span class="price">{{pricing(goodsData.originalPrice,
                            goodsData.dcRate)}} ~</span><span class="unit"></span>
                        <span class="original-price">{{goodsData.originalPrice}}</span>
                        <span slot="right" class="dcrate">{{goodsData.dcRate}}%</span>
                    </sui-card-content>
                </sui-card>
                <sui-card>
                    <sui-image :src="goodsData.imgUrl"/>
                    <sui-card-content>
                        <sui-card-header class="copy">{{goodsData.copy}}</sui-card-header>
                        <sui-card-meta class="title"></sui-card-meta>
                        <sui-card-description>
                            {{goodsData.saleCnt}}<span>개 구매</span>
                        </sui-card-description>
                    </sui-card-content>
                    <sui-card-content extra class="price">
                        <sui-icon name="won sign icon"/>
                        <span class="price">{{pricing(goodsData.originalPrice,
                            goodsData.dcRate)}} ~</span><span class="unit"></span>
                        <span class="original-price">{{goodsData.originalPrice}}</span>
                        <span slot="right" class="dcrate">{{goodsData.dcRate}}%</span>
                    </sui-card-content>
                </sui-card>
                <sui-card>
                    <sui-image :src="goodsData.imgUrl"/>
                    <sui-card-content>
                        <sui-card-header class="copy">{{goodsData.copy}}</sui-card-header>
                        <sui-card-meta class="title"></sui-card-meta>
                        <sui-card-description>
                            {{goodsData.saleCnt}}<span>개 구매</span>
                        </sui-card-description>
                    </sui-card-content>
                    <sui-card-content extra class="price">
                        <sui-icon name="won sign icon"/>
                        <span class="price">{{pricing(goodsData.originalPrice,
                            goodsData.dcRate)}} ~</span><span class="unit"></span>
                        <span class="original-price">{{goodsData.originalPrice}}</span>
                        <span slot="right" class="dcrate">{{goodsData.dcRate}}%</span>
                    </sui-card-content>
                </sui-card>
                <sui-card>
                    <sui-image :src="goodsData.imgUrl"/>
                    <sui-card-content>
                        <sui-card-header class="copy">{{goodsData.copy}}</sui-card-header>
                        <sui-card-meta class="title"></sui-card-meta>
                        <sui-card-description>
                            {{goodsData.saleCnt}}<span>개 구매</span>
                        </sui-card-description>
                    </sui-card-content>
                    <sui-card-content extra class="price">
                        <sui-icon name="won sign icon"/>
                        <span class="price">{{pricing(goodsData.originalPrice,
                            goodsData.dcRate)}} ~</span><span class="unit"></span>
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
                goodsData: {
                    imgUrl: "https://image.ellotte.com/ellt.static.lotteeps.com/goods/img/00/77/91/03/12/1203917700_1.jpg/chg/resize/308x308/extent/308x308/optimize",
                    goodsCode: "1203917700",
                    seller: "SOUP",
                    copy: "플라워 패턴이 예쁜 원피스",
                    title: "플라워 원피스",
                    originalPrice: 49000,
                    dcRate: 20,
                    saleCnt: 14,
                },
            }
        },
        methods: {
            pricing(originalPrice, dcRate) {
                var price = originalPrice * (100 - dcRate) / 100;
                    price = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                return price;
            },
        }
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
    }

    .original-price {
        text-decoration: line-through;
        font-size: 0.8em;
    }

    .unit {
        margin-left: 2px;
    }
</style>