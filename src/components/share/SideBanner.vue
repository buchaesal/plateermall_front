<template>
    <div id="side-banner-container">
        <div id="side-banner" style="text-align:center;">
            <div>
                <sui-image src="static/images/wireframes/image.png" size="small" />
            </div>
            <div>
                <p>최근 본 쇼핑</p>
                <p>1</p>
            </div>
            <div>
                <sui-button @click="handleToggle" style="width:100%;" basic color="black" inverted>TOP</sui-button>
            </div>
        </div>
        <div id="side-banner-addon">
            <div>
                <h3 style="text-align:center;">최근 본 쇼핑정보</h3>
                <sui-label v-if="isVisible" id="addon-label" color="red" floating>
                    22
                </sui-label>
            </div>
            <div>
                <p style="text-align:right;">전체 삭제</p>
            </div>
            
            <!-- 상품 들어갈 곳 -->
            <ul>
                <li>
                    <div style="width:20%; display:inline-block;">
                        <sui-image src="https://image.ellotte.com/ellt.static.lotteeps.com/goods/img/72/80/04/04/12/1204048072_1.jpg/chg/resize/72x72/extent/72x72/optimize" size="small" />
                    </div>
                    <div style="width:80%; display:inline-block;">
                        <a href="#">
                            <p>비에스코스</p>
                            <p>[정상가 15,900원] BSKOS 아토렌 손소독젤 500ml ★초특가★</p>
                            <p>6,720원</p>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SideBanner.vue",
        data() {
            return {
                isVisible: false,
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
            }
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
</style>