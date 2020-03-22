<template>
  <div>
    <div class="my-cancel" v-if="goods.length===0">
      <i class="huge exclamation icon"></i>
      <br />
      <br />
      <p>위시리스트에 담은 상품이 없습니다.</p>
      <p>장기간 보관하고 싶은 상품을 위시하세요</p>
      
    </div>

    <div v-else>
        <div>
            <sui-card-group :items-per-row="4">
                <sui-card class="goods-card" v-for="(goodsData, index) in goods" :key="index" @click="goToGoodsDetail">
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
        data() {
            return {
                wishProductCount: 1,
                // goodss: [
                //     {
                //     imgUrl: "https://image.ellotte.com/ellt.static.lotteeps.com/goods/img/00/77/91/03/12/1203917700_1.jpg/chg/resize/308x308/extent/308x308/optimize",
                //     goodsCode: "1203917700",
                //     seller: "SOUP",
                //     copy: "플라워 패턴이 예쁜 원피스",
                //     title: "플라워 원피스",
                //     originalPrice: 49000,
                //     dcRate: 20,
                //     saleCnt: 14,
                // },
                // ],
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
        computed: {
            wishList: function () {
                console.log('computed 1');
                return this.$store.state.wishListStore.wishList;
            },
            goods: function () {
                console.log('computed 2')
                console.log(this.$store.state.wishListStore.wishList);
                // let wishList = this.wishList;
                let arr = [];
                for(var goodsCode in this.$store.state.wishListStore.wishList){
                    console.log(goodsCode);
                    this.$store.commit('getGoodsModel', goodsCode);
                    arr.push(this.$store.state.goodsStore.goodsModel);
                }
                console.log(arr);
                return arr;
            }
        },
        created: function () {
            this.setWishList();
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


</style>
