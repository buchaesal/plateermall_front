<template>
  <div>
    <div class="my-cancel" v-if="wishProductCount.length===0">
      <i class="huge exclamation icon"></i>
      <br />
      <br />
      <p>위시리스트에 담은 상품이 없습니다.</p>
      <p>장기간 보관하고 싶은 상품을 위시하세요</p>
      
    </div>

    <div v-else>
        <div>
            <sui-card-group :items-per-row="4">
                <sui-card class="goods-card" v-for="(goodsData, index) in wishListGoods" :key="index" @click="goToGoodsDetail">
                    <sui-image :src=" goodsData.imgUrl" width="100%"/>
                    <sui-card-content>
                        <sui-card-header class="title">{{goodsData.title}}</sui-card-header>
                        <sui-card-meta class="seller">{{goodsData.seller}}</sui-card-meta>
                        <sui-card-description class="price">
                            {{pricing(goodsData.originalPrice,
                            goodsData.dcRate)}}<span class="unit">원</span>
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
                wishListGoodsCodes : [],
                wishListGoods : [],
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
            }
        },
        methods: {
            async setGoodsFromGoodsCodes() {
                console.log("test")
                let goodsApi = new GoodsApi();
                for(let index in this.wishListGoodsCodes){
                    this.wishListGoods.push(await goodsApi.getGoods(this.wishListGoodsCodes[index]));
                }
            }
            ,
            pricing(originalPrice, dcRate) {
                var price = originalPrice * (100 - dcRate) / 100;
                    price = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                return price;
            },
            goToGoodsDetail(goodsCode) {
                this.$router.push('/goodsDetail/'+goodsCode);
            },
            async setWishList() {
                console.log("setWishList")
                let wishListApi = new WishListApi();
                this.wishListGoodsCodes = await wishListApi.getWishListGoodsCodes();
                await this.setGoodsFromGoodsCodes();
                // this.$store.commit('getWishListFromApi');
            }
        },
        created: function () {
            this.setWishList();
        },
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
</style>
