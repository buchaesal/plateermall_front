<template>
    <div>
        <div class="my-cancel" v-if="wishProductCount === 0">
            <i class="huge exclamation icon"></i>
            <br/>
            <br/>
            <p>위시리스트에 담은 상품이 없습니다.</p>
            <p>장기간 보관하고 싶은 상품을 위시하세요</p>

        </div>

        <div v-else>
            <div class="category-option">
                <sui-dropdown
                        placeholder="카테고리 전체"
                        selection
                        :options="options"
                        v-model="selectOption"

                />
            </div>
            <div class="wishlist-container">
                <sui-card-group :items-per-row="4">
                    <sui-card class="goods-card" v-for="(goodsData, index) in wishListGoods" :key="index"
                              @click="goToGoodsDetail(goodsData.goodsCode)">
                        <sui-image :src=" goodsData.imgUrl" width="100%"/>
                        <sui-card-content>
                            <sui-card-header class="title">{{goodsData.title}}</sui-card-header>
                            <sui-card-meta class="seller">{{goodsData.seller}}</sui-card-meta>
                            <sui-card-description class="price">
                                <div class="price-area">
                                    {{goodsData.benefitPrice.toLocaleString()}}<span class="unit">원</span>
                                </div>
                                <div class="cancel-wish" @click.stop="cancelWish(goodsData.goodsCode)">
                                    <i class="close icon"></i>
                                </div>
                            </sui-card-description>
                        </sui-card-content>
                    </sui-card>
                </sui-card-group>
            </div>
        </div>
    </div>
</template>

<script>

    import GoodsApi from "../../api/GoodsApi";
    import WishListApi from "../../api/WishListApi";

    export default {
        name: "Sample",
        data() {
            return {
                wishListGoodsCodes: [],
                wishListGoods: [],
                selectOption: "",
                options: [],
            }
        },
        computed: {
            // wishListGoodsCodes: function () {
            //     console.log("wishListGoodsCode")
            //     return this.$store.state.wishListStore.wishListGoodsCodes;
            // },
            // wishListGoods: function () {
            //     console.log("wishListGoods")
            //     let wishListGoodsCodes = this.wishListGoodsCodes;
            //     let wishListGoods = [];
            //     wishListGoodsCodes.forEach(goodsCode => {
            //         let goodsApi = new GoodsApi();
            //         // this.$store.commit('getGoodsModel', goodsCode);
            //         // wishListGoods = goodsApi.getGoods(goodsCode)
            //         wishListGoods.push(goodsApi.getGoods(goodsCode));
            //     });
            //     return wishListGoods;
            // },
            wishProductCount: function () {
                return this.wishListGoodsCodes.length;
            },
        },
        methods: {
            async setGoodsFromGoodsCodes() {
                let goodsApi = new GoodsApi();

                for (let index in this.wishListGoodsCodes) {
                    this.wishListGoods.push(await goodsApi.getGoods(this.wishListGoodsCodes[index]));
                }
            },
            goToGoodsDetail(goodsCode) {
                this.$router.push('/goodsDetail/' + goodsCode);
            },
            async setWishList() {
                let wishListApi = new WishListApi();
                this.wishListGoodsCodes = await wishListApi.getWishListGoodsCodes();
                console.log("wishListGoodsCodes : " + this.wishListGoodsCodes);
                await this.setGoodsFromGoodsCodes();
                // this.$store.commit('getWishListFromApi');
            },
            cancelWish(goodsCode) {
                let wishListApi = new WishListApi();
                wishListApi.deleteGoodsWish(goodsCode)
                    .then(() => {
                        this.wishListGoodsCodes = [];
                        this.wishListGoods = [];
                        this.setWishList();
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        },
        created: function () {
            this.setWishList();
        },
        watch: {
            selectOption() {
                console.log(this.selectOption);
            }
        }
    }
</script>

<style scoped>
    .my-cancel {
        margin-top: 10%;
        text-align: center;
    }

    .my-cancel > p {
        font-size: 15px;
    }

    .goods-card {
        cursor: pointer;
    }

    .price {
        display: block;
    }

    .price-area {
        float: left;
    }

    .cancel-wish {
        float: right;
    }

    .category-option {
        float: right;
    }

    .wishlist-container {
        clear: both;
    }
</style>
