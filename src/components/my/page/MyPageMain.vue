<template>
    <div>
        <FaqHeader :title="'주문현황 (최근 15일 기준)'"></FaqHeader>
        <OrderStatusBox></OrderStatusBox>
        <Wishlist></Wishlist>
        <div>
            <h2>최근 본 상품 {{getRecentGoodsInfo.recentGoodsLength}}</h2>

            <div v-if="getRecentGoodsInfo.recentGoodsLength > 0">
                <sui-grid :columns="5">
                    <sui-grid-column v-for="(good, index) in getRecentGoodsInfo.recentGoods" v-bind:key="index">
                        <sui-card class="fluid" @click="goToGoodsDetail(good.goodsCode)">
                            <sui-image :src="good.imgUrl" style="width: 200px; height: auto"/>
                            <sui-card-content>
                                <sui-card-header class="recent-goods-title">{{good.title}}</sui-card-header>
                                <sui-card-meta>{{good.originalPrice}} 원</sui-card-meta>
                            </sui-card-content>
                        </sui-card>
                    </sui-grid-column>
                </sui-grid>
            </div>
            <div v-else>
                <NoItem :message="noItemMessage"/>
            </div>
        </div>
    </div>
</template>

<script>
    import FaqHeader from "../../faq/FaqHeader";
    import OrderStatusBox from "../OrderStatusBox";
    import Wishlist from "../Wishlist";
    import NoItem from "../../share/NoItem";

    export default {
        name: "MyPageMain",
        components: {
            FaqHeader,
            OrderStatusBox,
            Wishlist,
            NoItem
        },
        data() {
            return {
                noItemMessage: "데이터가 없습니다.",
            }
        },
        methods: {
            goToGoodsDetail(goodsCode) {
                this.$router.push('/goodsDetail/' + goodsCode);
            },
        },
        computed: {
            getRecentGoodsInfo() {
                return {
                    recentGoodsLength: this.$store.state.recentSawListStore.goodsList.length,
                    recentGoods: this.$store.state.recentSawListStore.goodsList
                }
            }
        }
    }
</script>

<style scoped>
    .recent-goods-title {
        overflow: hidden !important;
        text-overflow: ellipsis !important;
        white-space: nowrap !important;
    }

    .fluid {
        cursor: pointer;
    }
</style>