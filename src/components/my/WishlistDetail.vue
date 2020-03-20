<template>
  <div>
    <div class="my-cancel" v-if="wishProductCount==0">
      <i class="huge exclamation icon"></i>
      <br />
      <br />
      <p>위시리스트에 담은 상품이 없습니다.</p>
      <p>장기간 보관하고 싶은 상품을 위시하세요</p>
      
    </div>

    <div v-else>
        <div>
            <sui-card-group :items-per-row="4">
                <sui-card v-for="(goodsData, index) in goods" :key="index" @click="goToGoodsDetail">
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
                goods: [
                    {
                    imgUrl: "https://image.ellotte.com/ellt.static.lotteeps.com/goods/img/00/77/91/03/12/1203917700_1.jpg/chg/resize/308x308/extent/308x308/optimize",
                    goodsCode: "1203917700",
                    seller: "SOUP",
                    copy: "플라워 패턴이 예쁜 원피스",
                    title: "플라워 원피스",
                    originalPrice: 49000,
                    dcRate: 20,
                    saleCnt: 14,
                },
                ],
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
        },
        computed: {
            wishList: function () {
                //store 등록
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
</style>
