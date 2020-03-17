<template>
    <div id="side-banner-container">
        <div id="side-banner" style="text-align:center;">
            <div>
                <img src="https://image.ellotte.com/ellt.static.lotteeps.com/front/desktop/assets/img/icons/ico_shallot.png">
            </div>
            <div class="recent">
                <div @click="handleToggle" class="recent-shopping">
                    <p class="recent-shopping-title">최근 본 쇼핑</p>
                    <p class="recent-shopping-length">{{goods.length}}</p>
                </div>
                <div class="go-top" @click="scrollToTop">
                    <a inverted>TOP</a>
                </div>
            </div>
        </div>
        <div id="side-banner-addon">
            <div>
                <h3 class="banner-title">최근 본 쇼핑정보</h3>
                <sui-label v-if="isVisible" class="addon-label" floating>
                    {{goods.length}}
                </sui-label>
            </div>
            <div>
                <p @click="totalRemoveGoods" style="text-align:right; margin-left:200px; cursor:pointer;">전체 삭제</p>
            </div>
            <!-- 상품 들어갈 곳 -->

            <ul>
                <li v-if="goods.length==0">
                    <div>
                        최근 본 쇼핑정보가 없습니다.
                    </div>
                </li>
                <li v-else v-for="(good, index) in goods" v-bind:key="index" class="shopping-info">
                    <div>
                        <div class="banner-info-img">
                            <img :src=good.imgSrc>
                        </div>
                        <div class="banner-info-text">
                            <a href="#">
                                <p>{{good.title}}</p>
                                <p>{{good.contents}}</p>
                                <p>{{good.price}}<span class="price">원</span></p>
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

    import SideBannerGoodsModel from "./model/SideBannerGoodsModel";

    export default {
        name: "SideBanner.vue",
        data() {
            return {
                isVisible: false,
                goods: [],
            }
        },
        components: {},
        methods: {
            handleToggle() {
                if (this.isVisible) {
                    this.isVisible = false;
                    let sideBanner = document.getElementById('side-banner');
                    sideBanner.style.width = '100%';

                    let addon = document.getElementById('side-banner-addon');
                    addon.style.width = '0%';

                    let sideBannerContainer = document.getElementById('side-banner-container');
                    sideBannerContainer.style.width = '120px';
                } else {
                    this.isVisible = true;
                    let sideBanner = document.getElementById('side-banner');
                    sideBanner.style.width = '30%';

                    let addon = document.getElementById('side-banner-addon');
                    addon.style.width = '70%';

                    let sideBannerContainer = document.getElementById('side-banner-container');
                    sideBannerContainer.style.width = '400px';
                }
            },
            totalRemoveGoods() {
                this.goods = [];
            },
            scrollToTop() {
                window.scrollTo(0, 0);
            }
        },
        created: function () {
            this.goods.push(new SideBannerGoodsModel(
                "https://image.ellotte.com/ellt.static.lotteeps.com/goods/img/72/80/04/04/12/1204048072_1.jpg/chg/resize/72x72/extent/72x72/optimize",
                "비에스코스",
                "[정상가 15,900원] BSKOS 아토렌 손소독젤 500ml ★초특가★",
                "6,720"
            ));

            this.goods.push(new SideBannerGoodsModel(
                "https://image.ellotte.com/ellt.static.lotteeps.com/goods/img/72/80/04/04/12/1204048072_1.jpg/chg/resize/72x72/extent/72x72/optimize",
                "비에스코스",
                "[정상가 15,900원] BSKOS 아토렌 손소독젤 500ml ★초특가★",
                "6,720"
            ));
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
    }

    .addon-label {
        color: red;
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
        width: 100%;
    }
    .recent {
        background-color: black;
        height: 110px;
        padding: 15px 0;
    }

    .banner-info-img {
        width: 20%;
        display: inline-block;
    }

    .banner-info-text {
        width: 80%;
        display: inline-block;
        font-size: 11px;
    }

    #side-banner-addon {
        display: inline-block;
        width: 0%;
        height: 10%;
        background-color: black;
    }

    .addon-label {
        top: 0em;
        left: 87%;
    }

    li {
        list-style: none;
    }

    #open_chatbot {
        display: block;
        position: relative;
        right: -4px;
        width: 69px;
        height: 61px;
        animation: shallot_rot 10s infinite linear;
        background: url('https://image.ellotte.com/ellt.static.lotteeps.com/front/desktop/assets/img/icons/ico_shallot.png') 0 0 no-repeat;
        background-size: 69px 61px;
        margin: 0 auto;
        background-color: white;
    }

    .go-top a {
        color: white;
        text-decoration: none;
        cursor: pointer;
    }

    .recent-shopping-title, .recent-shopping, .go-top {
        font-size: 0.8rem;
    }
</style>