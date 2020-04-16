<template>
    <div>
        <sui-loader active centered inline v-if="wishListCheck === 0"/>

        <div v-else>
            <div class="wishlist-result" v-if="wishProductCount === 0">
                <i class="huge exclamation icon"></i>
                <br/>
                <br/>
                <p>위시리스트에 담은 상품이 없습니다.</p>
                <p>장기간 보관하고 싶은 상품을 위시하세요</p>

            </div>

            <div v-else-if="wishListGoodsCount === 0">
                <div class="search-wishlist">
                    <sui-input v-on:keyup.enter="searchWish" placeholder="상품 이름 입력" icon="search" v-model="searchTxt" />
                </div>
                <div class="wishlist-result">
                    <i class="huge exclamation icon"></i>
                    <br/>
                    <br/>
                    <p>일치하는 상품이 없습니다.</p>
                </div>
            </div>

            <div v-else>
                <div class="search-wishlist">
                    <sui-input v-on:keyup.enter="searchWish" placeholder="상품 이름 입력" icon="search" v-model="searchTxt" />
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
    </div>
</template>

<script>

    import GoodsApi from "../../api/GoodsApi";
    import WishListApi from "../../api/WishListApi";
    import {getCurrentUserInfo} from "../../api/UserApi";

    export default {
        name: "WishlistDetail",
        data() {
            return {
                wishListGoodsCodes: [],
                wishListGoods: [],
                searchTxt: "",
                userInfo: {},
                wishListCheck: 0,
            }
        },
        methods: {
            async setGoodsFromGoodsCodes() {
                let goodsApi = new GoodsApi();

                let tempWishListGoods = [];

                for (let index in this.wishListGoodsCodes) {
                    tempWishListGoods.push(await goodsApi.getGoods(this.wishListGoodsCodes[index]));
                }

                if (this.searchTxt !== "") {
                    tempWishListGoods = tempWishListGoods.filter((goods) => goods.title.includes(this.searchTxt));
                }

                this.wishListGoods = tempWishListGoods;
            },
            goToGoodsDetail(goodsCode) {
                this.$router.push('/goodsDetail/' + goodsCode);
            },
            async setWishList() {
                let wishListApi = new WishListApi();
                this.wishListGoodsCodes = await wishListApi.getWishListGoodsCodes(this.userInfo.email);

                await this.setGoodsFromGoodsCodes();
            },
            cancelWish(goodsCode) {
                let wishListApi = new WishListApi();
                wishListApi.deleteGoodsWish(goodsCode)
                    .then(() => {
                        this.setWishList();
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            searchWish() {
                this.setWishList();
            }
        },
        async created() {
            this.userInfo = await getCurrentUserInfo();
            await this.setWishList();
        },
        computed: {
            wishProductCount: function () {
                return this.wishListGoodsCodes.length;
            },
            wishListGoodsCount: function() {
                return this.wishListGoods.length;
            }
        },
        watch: {
            wishListGoodsCodes() {
                this.wishListCheck = 0;
            },
            wishListGoods() {
                this.wishListCheck = 1;
            }
        }
    }
</script>

<style scoped>
    .wishlist-result {
        margin-top: 10%;
        margin-bottom: 10%;
        text-align: center;
        clear:both;
    }

    .wishlist-result > p {
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

    .search-wishlist {
        float: right;
    }

    .wishlist-container {
        clear: both;
    }
</style>
