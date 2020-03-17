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
                                <button class="circular ui icon basic button btn-tooltip" @mouseover="onTooltip"
                                        @mouseleave="offTooltip"><i class="info icon"></i>
                                </button>
                                <div role="tooltip" class="tooltip-conts" v-if="tooltipDisplay">
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
                        <span class="oners_txt mt_none">롯데 오너스 L.POINT 0.5% 적립
                        <div class="tooltip tooltip_oners_saving">

                                <button class="circular ui icon basic button btn-tooltip"><i class="info icon"></i>
                                </button>
                            <div role="tooltip" class="tooltip_conts">
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
            </div>
        </section>
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
                shareDisplay: false,
                isLike: false,
                tooltipDisplay: false,
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
            onTooltip() {
                this.tooltipDisplay = true;
            },

            offTooltip() {
                this.tooltipDisplay = false;
            }
        },
    }
</script>

<style scoped>
    h1, h2, h3, h4, h5, h6, ul, ol, dl, li, dt, dd, p, img, button {
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    .fix-inner {
        width: 1200px;
        margin: 0 auto;
    }

    ul {
        list-style: none;
    }

    .goods-detail {
        position: relative;
        margin-bottom: 80px;
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

    .detail > dd {
        float: left;
        width: calc(100% - 86px);
    }

    .detail > dt {
        float: left;
        width: 86px;
        color: #666;
        padding-top: 16px;
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

    .detail > dd .oners-txt {
        display: block;
        margin: 10px 0 5px;
        color: #773dbd;
    }
</style>