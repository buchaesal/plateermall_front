<template>
    <div id="side-banner-container">
        <div id="side-banner">
            <div>
                <img src="https://image.ellotte.com/ellt.static.lotteeps.com/front/desktop/assets/img/icons/ico_shallot.png">
            </div>
            <div class="recent">
                <div @click="handleToggle" class="recent-shopping">
                    <p class="recent-shopping-title">최근 본 쇼핑</p>

                    <p class="recent-shopping-length">{{getRecentGoodsInfo.recentGoodsLength}}</p>
                </div>
                <div class="go-top" @click="scrollToTop">
                    <a inverted>TOP</a>
                </div>
            </div>
        </div>
        <div id="side-banner-addon">
            <div class="side-banner-addon-title">
                <h3 class="banner-title">
                    최근 본 쇼핑정보
                </h3>
                <sui-label v-if="isVisible" class="addon-label">
                    {{getRecentGoodsInfo.recentGoodsLength}}
                </sui-label>
            </div>
            <div>
                <p @click="clearList" class="cancel-all">
                    <sui-icon name="trash alternate outline" size="small"/>
                    전체 삭제
                </p>
            </div>
            <!-- 상품 들어갈 곳 -->

            <ul class="zzim-list">
                <li v-show="getRecentGoodsInfo.recentGoodsLength===0">
                    <div>
                        최근 본 쇼핑정보가 없습니다.
                    </div>
                </li>
                <li @click="goToDetail(good.goodsCode)" v-show="getRecentGoodsInfo.recentGoodsLength!=0" v-for="(good, index) in getRecentGoodsInfo.recentGoods" v-bind:key="index" class="shopping-info">
                    <div class="banner-item">
                        <div class="banner-item-img">
                            <img :src=good.imgUrl class="goodsImg">
                        </div>
                        <div class="banner-item-text">
                            <a href="#" @click="goToDetail(good.goodsCode)">
                                <p class="banner-item-title">{{good.title}}</p>
                                <p class="banner-item-contents">{{good.copy}}</p>
                                <p class="banner-item-price">{{good.originalPrice}}<span class="price">원</span></p>
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

    // import SideBannerGoodsModel from "./model/SideBannerGoodsModel";

    export default {
        name: "SideBanner",
        data() {
            return {
                isVisible: false,
                goods: [],
                len: 0
            }
        },
        components: {},
        methods: {
            handleToggle() {
                if (this.isVisible) {
                    this.isVisible = false;
                    let sideBanner = document.getElementById('side-banner');
                    sideBanner.style.width = '80px';

                    let addon = document.getElementById('side-banner-addon');
                    addon.style.width = '0%';

                    let sideBannerContainer = document.getElementById('side-banner-container');
                    sideBannerContainer.style.width = '80px';
                } else {
                    this.isVisible = true;
                    let sideBanner = document.getElementById('side-banner');
                    sideBanner.style.width = '80px';

                    let addon = document.getElementById('side-banner-addon');
                    addon.style.width = '80%';

                    let sideBannerContainer = document.getElementById('side-banner-container');
                    sideBannerContainer.style.width = '400px';
                }
            },
            // totalRemoveGoods() {
            //     this.goods = [];
            // },
            scrollToTop() {
                window.scrollTo(0, 0);
            },
            clearList() {
                this.$store.commit("clearList")
            },
            goToDetail(goodsCode) {
                this.$router.push('/goodsDetail/' + goodsCode);
            }
        },
        // computed: {
        //     getGoodsCount(){
        //         return this.$store.state.goodsStore.goodsCount;
        //     },
        //     getRecentSelectedGoods(){
        //         return this.$store.state.recentSawListStore.goodsList;
        //     },
        //     // getGoodsCodeList(){
        //     //     return this.$store.state.recentSawListStore.setListLength;
        //     // }
        //
        // },
        // mounted() {
        //     this.len = this.$store.state.recentSawListStore.goodsList.length;
        //     this.goods = this.$store.state.recentSawListStore.goodsList;
        // }
        computed: {
            getRecentGoodsInfo() {
                return {
                    recentGoodsLength:this.$store.state.recentSawListStore.goodsList.length,
                    recentGoods:this.$store.state.recentSawListStore.goodsList
                }
            }
        }
    }
</script>

<style scoped>
    .recent-shopping {
        cursor: pointer;
        margin-bottom: 10px;
    }

    .recent-shopping-length {
        color: lightgray;
        padding-bottom: 10px;
        border-bottom: 1px solid gray;
    }

    .banner-title {
        text-align: center;
        margin-top: 20px;
    }

    .cancel-all{
        text-align:right;
        font-size: 11px;
        margin: 10px 20px 0 150px;
        cursor:pointer;
    }

    .addon-label {
        color: white;
        background-color: red;
        margin: 0 0 10px 10px;
        vertical-align: middle;
    }

    .banner-title {
        display: inline-block;
    }

    .side-banner-addon-title {
        text-align: center;
        background-color: #181818;
    }

    .shopping-info {
        margin-bottom: 15px;
    }

    #side-banner-container {
        display: inline-block;
        position: fixed;
        bottom: 5%;
        right: 0px;
        width: 80px;
        color: white;
    }

    #side-banner {
        display: inline-block;
        text-align:center;
        width: 100%;
    }
    .recent {
        background-color: black;
        height: 109px;
        padding: 15px 0;
    }

    .banner-item {
        border-bottom: 1px solid gray;
        font-weight: bold;
        text-decoration: none;
    }

    .banner-item-img {
        width: 20%;
        display: inline-block;
    }

    .banner-item-text {
        width: 80%;
        padding-left: 45px;
        display: inline-block;
        font-size: 11px;
    }

    .banner-item-title {
        color: lightgray;
        font-size: 12px;
    }

    .banner-item-contents, .banner-item-price{
        color: white;
    }

    #side-banner-addon {
        display: inline-block;
        width: 0%;
        height: 15%;
        background-color: black;
    }

    li {
        list-style: none;
    }

    .zzim-list {
        max-height: 500px;
        overflow: scroll;
        padding-right: 40px;
    }

    .go-top a {
        color: white;
        text-decoration: none;
        cursor: pointer;
    }

    .recent-shopping-title, .recent-shopping, .go-top {
        font-size: 0.8rem;
    }

    .goodsImg {
        width: 80px;
        height: auto;
    }
</style>