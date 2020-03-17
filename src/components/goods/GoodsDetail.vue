<template>
    <div class="fix-inner">
        <section class="goods-detail">
            <div class="gallery">
                <img :src="goodsData.imgUrl" width="714px">
            </div>
            <div class="info">
                <p class="seller">
                    <a href="#">{{goodsData.seller}}</a>
                </p>
                <h3 class="title">{{goodsData.title}}</h3>
                <div class="price-area">
                    <p class="discount" v-if="isDiscount(goodsData.dcRate)">
                        {{goodsData.dcRate}}<span class="unit">%</span>
                    </p>
                    <p class="price">
                        {{pricing(goodsData.originalPrice,
                        goodsData.dcRate)}}<span class="unit">원</span>
                    </p>
                    <ul class="utils">
                        <li class="share">
                            <button class="circular ui icon basic button btn-share" @click="shareBtnClick">
                                <i class="share alternate icon"></i>
                            </button>
                            <ul class="share-list" v-if="shareDisplay">
                                <li>
                                    <button class="circular ui icon basic button facebook"><i class="facebook icon"></i>
                                    </button>
                                    <br><span class="share-text">페이스북</span>
                                </li>
                                <li>
                                    <button class="circular ui icon basic button twitter"><i class="twitter icon"></i>
                                    </button>
                                    <br><span class="share-text">트위터</span>
                                </li>
                                <li>
                                    <button class="circular ui icon basic button kakaotalk"><i class="comment icon"></i>
                                    </button>
                                    <br><span class="share-text">카카오톡</span>
                                </li>
                                <li>
                                    <button class="circular ui icon basic button url"><i class="linkify icon"></i>
                                    </button>
                                    <br><span class="share-text">URL복사</span>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <button class="circular ui icon basic button btn-like" @click="likeBtnClick">
                                <i class="heart icon red" v-if="isLike"></i>
                                <i class="heart outline icon" v-else></i>
                            </button>
                        </li>
                    </ul>
                </div>
                <div class="summary">
                    <dl class="detail">
                        <dt>카드할인</dt>
                        <dd><span id="dcMaxInfoTxt">KB국민카드 10%청구할인</span>
                            <div class="tooltip">
                                <button class="circular ui icon basic button btn-tooltip" @mouseover="onTooltip1"
                                        @mouseleave="offTooltip1"><i class="info icon"></i>
                                </button>
                                <div role="tooltip" class="tooltip-conts" v-if="tooltip1Display">
                                    <p class="desc-tit">카드 할인 혜택</p>
                                    <ul class="benefit_list">
                                        <li><p class="item">청구할인</p>
                                            <div class="conts"><p>KB국민카드 10%</p>
                                                <ul class="bull_list-square">
                                                    <li>70,000원 이상 10% 청구할인</li>
                                                    <li>1일 할인한도 최대 70,000원</li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </dd>
                        <dt>포인트</dt>
                        <dd class="">
                        <span class="oners-txt mt-none">롯데 오너스 L.POINT 0.5% 적립
                        <div class="tooltip tooltip-oners-saving">
                                <button class="circular ui icon basic button btn-tooltip" @mouseover="onTooltip2"
                                        @mouseleave="offTooltip2"><i class="info icon"></i>
                                </button>
                            <div role="tooltip" class="tooltip-conts" v-if="tooltip2Display">
                            <p class="desc_tit">롯데 오너스 적립 안내</p>
                                <div class="saving_info">
                                    <dl>
                                        <dt>대상회원</dt>
                                        <dd>롯데 오너스 유료회원 가입</dd>
                                    </dl>
                                    <dl>
                                        <dt>적립유형</dt>
                                        <dd>L.POINT</dd>
                                    </dl>
                                    <dl>
                                        <dt>적립금액</dt>
                                        <dd>결제금액의 0.5%</dd>
                                    </dl>
                                    <dl>
                                        <dt>적립시점</dt>
                                        <dd>상품발송 완료 후 자동 적립</dd>
                                    </dl>
                                    <dl>
                                        <dt>유효기간</dt>
                                        <dd>발급일부터 5년</dd>
                                    </dl>
                                    <dl>
                                        <dt>유의사항</dt>
                                        <dd>본 혜택은 당사 사정에 따라 변경/삭제 될 수 있으며, 실제 적립 내역과 상이할 수 있습니다.</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </span>
                            *오너스 회원가로 결제 시, 표기 된 카드혜택가 및 적립 내역과 상이할 수 있습니다.
                        </dd>
                    </dl>
                </div>
                <div class="goods-option">
                    <div>
                        <sui-dropdown class="option-select option-dropdown"
                                      placeholder="옵션 선택"
                                      selection
                                      :options="options"
                                      v-model="current"
                        />
                    </div>
                    <div style="height:64px;">
                        옵션 선택 목록
                    </div>
                    <div style="height:64px;">
                        가격
                    </div>
                    <div style="height:64px;">
                        배송 방법 선택
                    </div>
                    <div style="height:64px;">
                        쇼핑백 / 바로구매
                    </div>
                    <div style="height:64px;">
                        상품 정보
                    </div>
                    <div style="height:64px;">
                        상품평
                    </div>
                </div>


            </div>

        </section>
        <div class="promotion-banner">
            <div class="banner-text">
                <a href="#">프로모션 배너</a>
            </div>
        </div>
        <div class="details">
            <section class="md-details">
                <div>
                    <sui-accordion exclusive>
                        <sui-accordion-title active class="accordion-title">
                            <sui-icon name="dropdown"/>
                            NOTICE
                        </sui-accordion-title>
                        <sui-accordion-content active class="accordion-content">
                            <p>
                                MD공지
                            </p>
                        </sui-accordion-content>
                    </sui-accordion>
                </div>
                <h4 class="subheading">상품 상세 설명</h4>
                <div class="goods-more-detail">
                    상품상세
                </div>
                <div>
                    <sui-accordion exclusive>
                        <sui-accordion-title active class="accordion-title">
                            <sui-icon name="dropdown"/>
                            상품평
                        </sui-accordion-title>
                        <sui-accordion-content active class="review-content">
                            <p>
                                상품평
                            </p>
                        </sui-accordion-content>
                    </sui-accordion>
                </div>

            </section>
            <div class="promotion-banner">
                <div class="banner-text">
                    <a href="#">브랜드 배너</a>
                </div>
            </div>
            <div class="detail-tab">
                <sui-tab>
                    <sui-tab-pane title="구매정보">
                        <table class="ui definition table">
                            <tbody>
                            <tr>
                                <td class="two wide column">Size</td>
                                <td>1" x 2"</td>
                            </tr>
                            <tr>
                                <td>Weight</td>
                                <td>6 ounces</td>
                            </tr>
                            <tr>
                                <td>Color</td>
                                <td>Yellowish</td>
                            </tr>
                            <tr>
                                <td>Odor</td>
                                <td>Not Much Usually</td>
                            </tr>
                            </tbody>
                        </table>
                    </sui-tab-pane>
                    <sui-tab-pane title="Q&A">
                        <p>
                            Cascading Style Sheets (CSS) is a stylesheet language used to describe
                            the presentation of a document written in HTML or XML (including XML
                            dialects such as SVG or XHTML). CSS describes how elements should be
                            rendered on screen, on paper, in speech, or on other media.
                        </p>
                    </sui-tab-pane>
                    <sui-tab-pane title="배송/결제/교환/반품 정보">
                        <p>
                            JavaScript (JS) is a lightweight interpreted or JIT-compiled
                            programming language with first-class functions. While it is most
                            well-known as the scripting language for Web pages, many non-browser
                            environments also use it, such as Node.js, Apache CouchDB and Adobe
                            Acrobat. JavaScript is a prototype-based, multi-paradigm, dynamic
                            language, supporting object-oriented, imperative, and declarative
                            (e.g. functional programming) styles.
                        </p>
                    </sui-tab-pane>
                </sui-tab>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "GoodsDetail",
        data() {
            return {
                goodsData: {
                    imgUrl: "https://image.ellotte.com/ellt.static.lotteeps.com/goods/img/00/77/91/03/12/1203917700_1.jpg/chg/resize/308x308/extent/308x308/optimize",
                    goodsCode: "1203917700",
                    seller: "SOUP",
                    copy: "플라워 패턴이 예쁜 원피스",
                    title: "플라워 원피스",
                    originalPrice: 49000,
                    dcRate: 20,
                    saleCnt: 14,
                },
                options: [
                    {
                        text: 'S',
                        value: 1,
                    },
                    {
                        text: 'M',
                        value: 2,
                    },
                    {
                        text: 'L',
                        value: 3,
                    },
                ],
                shareDisplay: false,
                isLike: false,
                tooltip1Display: false,
                tooltip2Display: false,
            }
        },
        methods: {
            pricing(originalPrice, dcRate) {
                var price = originalPrice * (100 - dcRate) / 100;
                price = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                return price;
            },
            isDiscount(dcRate) {
                if (dcRate !== "0" && dcRate !== null && dcRate !== 0) {
                    return false;
                } else {
                    return true;
                }
            },
            shareBtnClick() {
                this.shareDisplay = !this.shareDisplay;
            },
            likeBtnClick() {
                this.isLike = !this.isLike;
            },
            onTooltip1() {
                this.tooltip1Display = true;
            },

            offTooltip1() {
                this.tooltip1Display = false;
            },
            onTooltip2() {
                this.tooltip2Display = true;
            },

            offTooltip2() {
                this.tooltip2Display = false;
            }
        },
    }
</script>

<style scoped>
    h1, h2, h3, h4, h5, h6, ul, ol, dl, li, dt, dd, p, img, button {
        margin: 0;
        padding: 0;
    }

    dt {
        display: block;
    }

    dd {
        display: block;
        margin-inline-start: 40px;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    .fix-inner {
        width: 1200px;
        height: 1800px;
        margin: 0 auto;
        min-height: 600px;
        padding-top: 80px;
    }

    ul {
        list-style: none;
    }

    .goods-detail {
        position: relative;
        margin-bottom: 80px;
        height: 45%;
    }

    .gallery {
        width: 714px;
        float: left;
    }

    .seller {
        margin-bottom: 5px;
        font-size: 16px;
        color: #666;
        position: relative;
    }

    .info {
        width: 408px;
        float: right;
    }

    .info > .title {
        display: block;
        font-size: 24px;
        font-weight: 400;
        line-height: 35px;
        letter-spacing: -0.04em;
    }

    .utils {
        position: absolute;
        bottom: 4px;
        right: 0;
        text-align: center;
    }

    .utils > li {
        display: inline-block;
        vertical-align: middle;
        margin-left: 16px;
    }

    .price-area {
        position: relative;
        margin: 20px 0;
    }

    .price {
        font-size: 24px;
        line-height: 33px;
    }

    .unit {
        font-size: 14px;
    }

    .share {
        position: relative;
    }

    .share-list {
        position: absolute;
        top: 40px;
        right: 0;
        z-index: 11;
        width: 314px;
        padding: 24px 20px 16px;
        border: 1px solid #999;
        background: #fff;
        text-align: center;
    }

    .share-list:before {
        content: '';
        display: block;
        position: absolute;
        top: -8px;
        right: 58px;
        width: 15px;
        height: 15px;
        border-top: 1px solid #999;
        border-left: 1px solid #999;
        background-color: #fff;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    .share-list li {
        float: left;
        width: 25%;
        font-size: 12px;
        text-align: center;
    }

    .share-list > li > button {
        color: #555;
        text-align: center;
    }

    .share-text {
        font-size: 12px;
        display: block;
        margin-top: 4px;
    }

    .detail {
        content: "";
        display: block;
        clear: both;
    }


    .detail > dt {
        float: left;
        width: 86px;
        color: #666;
    }

    .detail > dd {
        float: left;
        margin: 0;
        width: calc(100% - 86px);
    }

    .summary {
        padding: 24px 0;
        border-top: 1px solid #ededed;
        border-bottom: 1px solid #ededed;
        font-size: 12px;
        line-height: 17px;
    }

    .summary button {
        display: inline-block;
        font-size: 3px;
    }

    .btn-tooltip {
        vertical-align: top;
    }

    .tooltip {
        position: relative;
        vertical-align: middle;
        display: inline-block;
    }

    .tooltip .desc-tit {
        margin-bottom: 24px;
        padding-bottom: 10px;
        border-bottom: 1px solid #d9d9d9;
        font-size: 16px;
        color: #000;
    }

    .tooltip .benefit_list {
        font-size: 14px;
    }

    .tooltip .benefit_list > li {
        margin-top: 24px;
        padding-bottom: 16px;
        border-bottom: 1px solid #e6e6e6;
    }

    .tooltip .benefit_list .item {
        float: left;
        width: 80px;
        color: #000;
    }

    .benefit_list .conts {
        float: left;
    }

    .tooltip .benefit-list .bull-list-square {
        padding-top: 20px;
        border-bottom: 0;
    }

    .tooltip .tooltip-conts {
        position: absolute;
        top: 20px;
        right: 0;
        z-index: 100;
        width: 282px;
        padding: 24px;
        border: 1px solid #b3b3b3;
        background: #fff;
        color: #666;
        text-align: left;
    }

    .oners-txt {
        display: block;
        color: #773dbd;
    }

    .option-select {
        margin-top: 32px;
        width: 100%;
    }

    .option-dropdown {
        width: 100%;
        margin-bottom: 32px;
    }

    .promotion-banner {
        position: static;
        background-color: rgb(125, 115, 103);
    }

    .banner-text a {
        display: block;
        height: 100px;
        padding: 28px 0;
        font-size: 32px;
        line-height: 44px;
        text-align: center;
    }

    .detail {
        position: relative;
        height: 90px;
    }

    .accordion-title {
        position: relative;
        padding-left: 8px;
        width: 100%;
        height: 88px;
        line-height: 90px;
        font-size: 24px !important;
        text-align: left;
        background-color: transparent;
        border: 2px solid #000;
        border-width: 0 0 2px 0;
    }

    .accordion-content {
        font-size: 14px !important;
    }

    .subheading {
        margin-bottom: 40px;
        padding: 80px 0 10px;
        border-bottom: 2px solid #000;
        font-size: 24px;
    }

    .detail-tab {
        margin-top: 40px;
    }

    .summary .detail > dt:not(:first-of-type),
    .summary .detail > dd:not(:first-of-type) {
        padding-top: 16px;
    }
</style>