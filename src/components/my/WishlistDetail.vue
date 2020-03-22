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
                <sui-card v-for="(goodsData, index) in wishListGoods" :key="index" @click="goToGoodsDetail">
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
    export default {
        name: "Sample",
        computed: {
            wishListGoodsCodes: function () {
                return this.$store.state.wishListStore.wishListGoodsCodes;
            },
            wishListGoods: function () {
                let wishListGoodsCodes = this.wishListGoodsCodes;
                let wishListGoods = [];
                wishListGoodsCodes.forEach(goodsCode => {
                    this.$store.commit('getGoodsModel', goodsCode);
                    wishListGoods.push(this.$store.state.goodsStore.goodsModel);
                });
                return wishListGoods;
            },
            wishProductCount: function () {
                return this.wishListGoodsCodes.length;
            }
        },
        methods: {
            pricing(originalPrice, dcRate) {
                var price = originalPrice * (100 - dcRate) / 100;
                    price = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                return price;
            },
            goToGoodsDetail(goodsCode) {
                this.$router.push('/goodsDetail/'+goodsCode);
            },
            setWishList() {
                this.$store.commit('getWishListFromApi');
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
</style>
