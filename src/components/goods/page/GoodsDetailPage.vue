<template>
    <div id="main-page-container">
        <Header></Header>
        <div class="fix-inner">
            <section class="goods-detail">
                <div class="gallery">
                    <img :src="getGoodsData.imgUrl" width="714px">
                </div>
                <div class="info">
                    <p class="seller">
                        <a href="#">{{getGoodsData.seller}}</a>
                    </p>
                    <h3 class="title">{{getGoodsData.title}}</h3>
                    <div class="price-area">
                        <p class="discount" v-if="isDiscount(getGoodsData.dcRate)">
                            {{getGoodsData.dcRate}}<span class="unit">%</span>
                        </p>
                        <p class="price">
                            {{pricing(getGoodsData.originalPrice,
                            getGoodsData.dcRate)}}<span class="unit">원</span>
                        </p>
                        <ul class="utils">
                            <li class="share" @mouseover="onShareList" @mouseleave="offShareList">
                                <button class="circular ui icon basic button btn-share">
                                    <i class="share alternate icon"></i>
                                </button>
                                <ul class="share-list" v-if="shareDisplay">
                                    <li>
                                        <button class="circular ui icon basic button facebook"><i
                                                class="facebook icon"></i>
                                        </button>
                                        <br><span class="share-text">페이스북</span>
                                    </li>
                                    <li>
                                        <button class="circular ui icon basic button twitter"><i
                                                class="twitter icon"></i>
                                        </button>
                                        <br><span class="share-text">트위터</span>
                                    </li>
                                    <li>
                                        <button class="circular ui icon basic button kakaotalk"><i
                                                class="comment icon"></i>
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
                            <dd><span id="dcMaxInfoTxt">{{getGoodsData.cardPromotions[0].card}} {{getGoodsData.cardPromotions[0].percentage}}% 청구할인</span>
                                <div class="tooltip">
                                    <button class="circular ui icon basic button btn-tooltip" @mouseover="onTooltip1"
                                            @mouseleave="offTooltip1"><i class="info icon"></i>
                                    </button>
                                    <div role="tooltip" class="tooltip-conts" v-if="tooltip1Display">
                                        <p class="desc-tit">카드 할인 혜택</p>
                                        <ul class="benefit-list">
                                            <li><p class="item">청구할인</p>
                                                <div class="cards"
                                                     v-for="(cardPromotion, index) in getGoodsData.cardPromotions"
                                                     :key="index">
                                                    <p>{{cardPromotion.card}}
                                                        {{cardPromotion.percentage}}%</p>
                                                    <ul class="list-square">
                                                        <li>- {{priceFormatting(cardPromotion.minimum)}}원 이상
                                                            {{cardPromotion.percentage}}% 청구할인
                                                        </li>
                                                        <li>- 1일 할인한도 최대
                                                            {{priceFormatting(cardPromotion.maximum)}}원
                                                        </li>
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
                            <p class="desc-tit">롯데 오너스 적립 안내</p>
                                <div class="saving-info">
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
                        <div class="option-select">
                            <sui-dropdown class="option-dropdown"
                                          placeholder="옵션 선택"
                                          selection
                                          :options="getGoodsData.options"
                                          v-model="current"
                            />
                        </div>
                        <div class="option-select-box">
                            <sui-message v-for="(option, index) in selectedOptions"
                                         :key="index"
                                         :header="option.name"
                                         dismissable
                                         @dismiss="handleDismiss(index)"
                            >
                                <div class="amount">
                                    <sui-button circular icon='plus' class="ico-plus"/>
                                    <input transparent class="output" :value="option.qauantity">
                                    <sui-button circular icon='minus' class="ico-minus"/>
                                </div>
                            </sui-message>
                        </div>
                        <div class="subtotal" id="priceSumInfo">
                            <input type="hidden" id="orderSumQty" :value="orderSumQuantity">
                            <p class="price"><span class="item" id="orderSumQtyTxt">총 {{orderSumQuantity}}개 : </span>
                                <span id="orderDcSumPrcTxt">{{priceFormatting(orderSumPrice)}}</span> <span
                                        class="unit">원</span></p>
                        </div>
                        <div>
                            <sui-button-group class="shipping-option">
                                <sui-button toggle
                                            content="택배"
                                            basic="basic"
                                            :color="radioButtonsColor[0]"
                                            :active="radioButtons[0]"
                                            @click="shippingRadio(0)"></sui-button>
                                <sui-button toggle basic
                                            content="방문 수령"
                                            :color="radioButtonsColor[1]"
                                            :active="radioButtons[1]"
                                            @click="shippingRadio(1)"></sui-button>
                                <sui-button toggle basic
                                            content="빠른 배송"
                                            :color="radioButtonsColor[2]"
                                            :active="radioButtons[2]"
                                            @click="shippingRadio(2)"></sui-button>
                            </sui-button-group>
                        </div>
                        <div>
                            <sui-button-group class="cart-or-now">
                                <sui-button color="black" content="쇼핑백"></sui-button>
                                <sui-button color="blue" content="바로구매"></sui-button>
                            </sui-button-group>
                        </div>
                        <div class="summary">
                            <dl class="detail">
                                <dt>모델번호</dt>
                                <dd>921733-100</dd>
                                <dt>상품번호</dt>
                                <dd>1203973748</dd>
                                <dt>배송정보</dt>
                                <dd id="deliveryInfoTxt">03/24(화) 이내 택배 도착예정<br>(도착 예정일은 상품재고 현황에 따라 변경될 수 있습니다.)</dd>
                            </dl>
                        </div>
                        <div class="review-summary-box">
                            <RatingStarPoint class="review-summary"/>
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
                                <div>
                                    <RatingStarPoint/>
                                    <RatingGraph/>
                                    <ReviewList/>
                                </div>
                            </sui-accordion-content>
                        </sui-accordion>
                    </div>

                </section>
                <div class="brand-banner">
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
                                Q&A Vue
                            </p>
                        </sui-tab-pane>
                        <sui-tab-pane title="배송/결제/교환/반품 정보">
                            <h3 is="sui-header" dividing>
                                배송안내
                            </h3>
                            <table class="ui definition table">
                                <tbody>
                                <tr>
                                    <td class="two wide column">배송비</td>
                                    <td>2,500원 (30,000원이상 무료배송)<br>
                                        제주/도서산간 지역의 경우, 추가비용 발생 가능
                                    </td>
                                </tr>
                                <tr>
                                    <td>배송정보</td>
                                    <td>택배
                                        03/20(금) 이내 택배 도착예정<br>
                                        (도착 예정일은 상품재고 현황에 따라 변경될 수 있습니다.)
                                    </td>
                                </tr>
                                <tr>
                                    <td>배송지역</td>
                                    <td>전국(일부지역 제외)</td>
                                </tr>
                                </tbody>
                            </table>

                            <h3 is="sui-header" dividing>
                                교환/반품 접수안내
                            </h3>
                            <div>교환/반품 접수 방법 안내
                                1. 마이롯데 >주문/배송조회로 이동
                                2. 주문건에서 '교환/반품접수' 버튼 선택
                                주문배송조회 바로가기
                                MY LOTTE에서 접수가 어려우신 경우, 엘롯데 고객만족센터 1899-2500 으로 문의하여 주시기 바랍니다.
                            </div>

                            <h3 is="sui-header" dividing>
                                교환/반품 규정안내
                            </h3>
                            <table class="ui definition table">
                                <tbody>
                                <tr>
                                    <td class="two wide column">교환/반품 비용</td>
                                    <td>
                                        <div>
                                            <sui-list bulleted>
                                                <sui-list-item>예상 반품비 : 5,000원, 예상 교환비 : 7,500원 (주문 상품을 1개씩 각각 반품/교환 시
                                                    상품 별로 발생하는 비용임)
                                                </sui-list-item>
                                                <sui-list-item>정확한 반품/교환비는 MY Lotte에서 반품/교환 접수 시 또는 고객센터로 문의 시 확인
                                                    가능합니다.
                                                </sui-list-item>
                                                <sui-list-item>고객님의 단순변심으로 인하여 교환/반품을 하시는 경우에는 상품등의 반환에 필요한 비용을 고객님이
                                                    부담하셔야 합니다.
                                                </sui-list-item>
                                                <sui-list-item>고객님이 받으신 상품 등의 내용이 표시/광고 내용과 다르거나 계약내용과 다르게 이행되어 교환/반품을
                                                    하시는 경우에는, 교환·반품 배송비는 무료입니다.
                                                </sui-list-item>
                                                <sui-list-item>고객님께서 직접 택배로 발송하실 경우 택배비는 본인 부담입니다.</sui-list-item>
                                                <sui-list-item>중/대형 가전, 가구등 설치상품의 경우 상품, 지역, 설치비 등에 따라 반품/교환 비용이 상이할 수
                                                    있습니다.
                                                </sui-list-item>
                                                <sui-list-item>회원등급에 따라 반품·교환 비용이 상이할 수 있습니다.</sui-list-item>
                                            </sui-list>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>교환/반품 신청일 기준</td>
                                    <td>
                                        <sui-list bulleted>
                                            <sui-list-item>단순변심으로 인한 교환/반품은 상품을 받으신 날부터 7일 이내 신청 가능합니다.</sui-list-item>
                                            <sui-list-item>상품의 상세정보 등이 표기/광고한 내용과 다르거나, 계약내용이 다르게 이행되어 교환/반품을 하는 경우 상품을
                                                받으신 날부터 3개월 이내 혹은 사실을 알게 된 날 또는 알 수 있었던 날부터 30일 이내 신청 가능합니다.
                                            </sui-list-item>
                                            <sui-list-item>롯데쇼핑 상품 교환·반품 안내</sui-list-item>
                                            <sui-list-item>식품 7일 이내, 의류·보석 15일 이내, 그 밖의 일반 상품 30일 이내 교환 반품 가능합니다.
                                            </sui-list-item>
                                            <sui-list-item>주문제작 상품 등 일부 상품은 교환·반품 기준이 상이할 수 있습니다.</sui-list-item>
                                            <sui-list-item>전자상거래법에 따른 교환·반품 규정이 상품공급업체가 개별적으로 지정한 교환·반품 조건 보다 우선 합니다.
                                            </sui-list-item>
                                            <sui-list-item>스마트픽 픽업 배송상품은 해당 스마트픽 픽업 지점에 상품도착일로부터 5일까지 픽업 가능합니다. 픽업가능일 경과
                                                시 자동으로 반품되며 반품배송비 차감 후 환불됩니다.
                                            </sui-list-item>
                                        </sui-list>
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                            <h3 is="sui-header" dividing>
                                교환/반품 규정 안내
                            </h3>
                            <div>
                                상품 정보 페이지에 협력업체가 개별적으로 게시한 "반품, 교환, 환불"(이하 "청약철회"라 합니다)에 관한 내용이 "전자상거래등에서의소비자보호에관한법률"
                                (이하 전상법이라 합니다)에서 규정한 내용보다 고객님께 유리한 경우에는 개별적으로 게시한 해당 "청약철회" 내용을 우선 적용하며, "전상법"의 규정보다 불리한
                                경우에는 "전상법"의 규정을 우선하여 적용합니다.
                            </div>


                        </sui-tab-pane>
                    </sui-tab>
                </div>
            </div>
        </div>
        <Footer></Footer>
        <SideBanner></SideBanner>
    </div>
</template>

<script>

    import Header from "../../share/Header";
    import Footer from "../../share/Footer";
    import SideBanner from "../../share/SideBanner";
    import RatingStarPoint from "../../comment/RatingStarPoint";
    import RatingGraph from "../../comment/RatingGraph";
    import ReviewList from "../../comment/ReviewList";


    export default {
        name: "GoodsDetail",
        components: {
            RatingStarPoint,
            RatingGraph,
            Header,
            Footer,
            SideBanner,
            ReviewList,
        },
        data() {
            return {
                current: null,
                shareDisplay: false,
                isLike: false,
                tooltip1Display: false,
                tooltip2Display: false,
                radioButtons: [true, false, false],
                radioButtonsColor: ["blue", "grey", "grey"],
                selectedOptions: [
                    {
                        name: '220',
                        qauantity: 1,
                    }, {
                        name: '230',
                        qauantity: 1,
                    },
                ],
                orderSumQuantity: 1,
                orderSumPrice: 0,
            }
        },
        methods: {
            priceFormatting(price) {
                return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            },
            pricing(originalPrice, dcRate) {
                let price = originalPrice * (100 - dcRate) / 100;
                price = this.priceFormatting(price);
                return price;
            },
            isDiscount(dcRate) {
                if (dcRate !== "0" && dcRate !== null && dcRate !== 0) {
                    return false;
                } else {
                    return true;
                }
            },
            shippingRadio(index) {
                let changedRadio = [false, false, false];
                changedRadio[index] = true;
                this.radioButtons = changedRadio;

                let changedRadioColor = ["grey", "grey", "grey"];
                changedRadioColor[index] = "blue";
                this.radioButtonsColor = changedRadioColor;
            },
            addOptions(option) {
                let addOptions = this.selectedOptions;
                addOptions.push(option);
                this.selectedOptions = addOptions;


            },
            onShareList() {
                this.shareDisplay = true;
            },
            offShareList() {
                this.shareDisplay = false;
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
            },
        },
        created() {
            this.$store.commit('getGoodsModel', this.$route.params.goodsCode);
            this.$store.commit('loadCommentByGoodsCode', this.$route.params.goodsCode);
        },
        computed: {
            getGoodsData() {
                let goodsData = this.$store.state.goodsStore.goodsModel

                return goodsData;
            },
            changeOption() {
                this.addOptions(this.current);
                return this.current;
            },
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
        margin: 0 auto;
        min-height: 600px;
        padding-top: 80px;
    }

    ul {
        list-style: none;
    }

    .goods-detail {
        position: static;
        margin-bottom: 80px;
        min-height: 1000px;
    }

    .gallery {
        width: 714px;
        float: left;
    }

    .seller {
        margin-bottom: 5px;
        font-size: 16px;
        color: #666;
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
        top: 50px;
        right: -45px;
        z-index: 11;
        width: 314px;
        padding: 24px 20px 16px;
        border: 1px solid #999;
        background: #fff;
        text-align: center;
    }

    .share-list:before {
        content: "";
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

    .summary {
        padding: 24px 0;
        border-top: 1px solid #ededed;
        border-bottom: 1px solid #ededed;
        font-size: 12px;
        line-height: 17px;
    }

    .detail {
        content: "";
        display: block;
        clear: both;
        height: 90px;
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
        font-size: 0.7em;
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

    .tooltip .benefit-list .cards p:first-child {
        margin-top: 0;
    }

    .tooltip .benefit-list {
        font-size: 14px;
    }

    .tooltip .benefit-list > li {
        margin-top: 24px;
        padding-bottom: 16px;
        border-bottom: 1px solid #e6e6e6;
    }

    .tooltip .benefit-list .item {
        float: left;
        width: 80px;
        color: #000;
    }

    .tooltip .benefit-list .list-square {
        margin-bottom: 32px;
        padding-top: 20px;
        border-bottom: 0;
    }

    .tooltip .tooltip-conts {
        position: absolute;
        top: 25px;
        right: -160px;
        z-index: 50;
        width: 282px;
        padding: 24px;
        border: 1px solid #b3b3b3;
        background: #fff;
        color: #666;
        text-align: left;
        display: block;
    }

    .oners-txt {
        display: block;
        color: #773dbd;
    }

    .subtotal {
        overflow: hidden;
        margin-bottom: 16px;
    }

    .subtotal .price {
        float: right;
        font-size: 32px;
        text-align: right;
    }

    .subtotal .price .item {
        font-size: 14px;
    }

    .subtotal .price .unit {
        font-size: 18px;
    }

    .option-select {
        margin-top: 32px;
        margin-bottom: 20px;
        width: 100%;
    }

    .option-select-box {
        margin-bottom: 20px;
        font-size: 16px;
    }

    .option-dropdown {
        width: 100%;
    }

    .shipping-option {
        width: 100%;
        height: 3rem;
        margin-bottom: 20px;
    }

    .output {
        display: inline-block;
        width: 40%;
        height: 32px;
        padding: 0 5px;
        border: 0;
        text-align: center;
        vertical-align: middle;
        background-color: transparent;
    }

    .amount {
        display: inline-block;
        position: relative;
        width: 100px;
        margin-top: 7px;
        vertical-align: middle;
    }

    .amount .ico-plus {
        float: right;
        position: relative;
        display: inline-block;
        vertical-align: middle;
        font-size: 0.7rem;
    }

    .amount .ico-minus {
        float: left;
        position: relative;
        display: inline-block;
        vertical-align: middle;
        font-size: 0.7rem;
    }

    .cart-or-now {
        width: 100%;
        height: 5rem;
        margin-bottom: 20px;
    }

    .promotion-banner {
        background-color: rgb(125, 115, 103);
    }

    .brand-banner {
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
        margin-bottom: 40px;
    }

    .summary .detail > dt:not(:first-of-type),
    .summary .detail > dd:not(:first-of-type) {
        padding-top: 16px;
    }

    .review-summary {
        float: none !important;
        overflow: auto;
    }

    .review-summary-box {
        padding: 24px 0 27px;
        font-size: 18px;
    }
</style>