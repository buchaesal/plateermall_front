<template>
    <div id="side-banner-container">
        <div id="side-banner" style="text-align:center;">
            <div>
                <a href="javascript:;" id="open_chatbot"></a>
            </div>
            <div @click="handleToggle" style="cursor:pointer;">
                <p>최근 본 쇼핑</p>
                <p>{{goods.length}}</p>
            </div>
            <div>
                <sui-button style="width:100%;" basic color="black" inverted>TOP</sui-button>
            </div>
        </div>
        <div id="side-banner-addon">
            <div>
                <h3 style="text-align:center;">최근 본 쇼핑정보</h3>
                <sui-label v-if="isVisible" id="addon-label" color="red" floating>
                    {{goods.length}}
                </sui-label>
            </div>
            <div>
                <p @click="totalRemoveGoods" style="text-align:right; margin-left:200px; cursor:pointer;">전체 삭제</p>
            </div>
            <!-- 상품 들어갈 곳 -->
            <ul>
                <li v-for="(good, index) in goods" v-bind:key="index" style="margin-bottom:15px;">
                    <div style="width:20%; display:inline-block;">
                        <sui-image src="https://image.ellotte.com/ellt.static.lotteeps.com/goods/img/72/80/04/04/12/1204048072_1.jpg/chg/resize/72x72/extent/72x72/optimize" size="small" />
                    </div>
                    <div style="width:80%; display:inline-block; font-size:11px;">
                        <a href="#">
                            <p>비에스코스</p>
                            <p>[정상가 15,900원] BSKOS 아토렌 손소독젤 500ml ★초특가★</p>
                            <p>6,720<span class="price">원</span></p>
                        </a>
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
                goods:[],
            }
        },
        components: {

        },
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
            }
        },
        created: function() {
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
    #side-banner-container {
        display: inline-block;
        position: fixed;
        bottom: 5%;
        right: 0px;
        width: 120px;
        color: white;
    }

    #side-banner {
        display: inline-block;
        width: 100%;
        background-color: black;
    }

    #side-banner-addon {
        display: inline-block;
        width: 0%;
        background-color: black;
    }

    #addon-label {
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
        background:url('https://image.ellotte.com/ellt.static.lotteeps.com/front/desktop/assets/img/icons/ico_shallot.png') 0 0 no-repeat;
        background-size: 69px 61px;
        margin:0 auto;
        background-color:white;
    }
</style>