<template>
    <div id="main-page-container">
        <Header></Header>
        <div class="container">
            <div class="fix-inner" v-if="goodsData.goodsCode != goodsCode">
                <sui-loader active centered inline/>
            </div>
            <div class="fix-inner" v-else>
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
                                <del>
                                    {{(goodsData.originalPrice).toLocaleString()}}
                                </del>
                                <span>{{goodsData.benefitPrice.toLocaleString()}}</span><span
                                    class="unit">원</span>
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
                                            <button class="circular ui icon basic button url"><i
                                                    class="linkify icon"></i>
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
                                <dt v-if="!isEmpty(goodsData.cardPromotions)">카드할인</dt>
                                <dd v-if="!isEmpty(goodsData.cardPromotions)">
                                    <span id="dcMaxInfoTxt">{{goodsData.cardPromotions[0].card}} {{goodsData.cardPromotions[0].percentage}}% 청구할인</span>
                                    <div class="tooltip">
                                        <button class="circular ui icon basic button btn-tooltip"
                                                @mouseover="onTooltip1"
                                                @mouseleave="offTooltip1"><i class="info icon"></i>
                                        </button>
                                        <div role="tooltip" class="tooltip-conts" v-if="tooltip1Display">
                                            <p class="desc-tit">카드 할인 혜택</p>
                                            <ul class="benefit-list">
                                                <li><p class="item">청구할인</p>
                                                    <div class="cards"
                                                         v-for="(cardPromotion, index) in goodsData.cardPromotions"
                                                         :key="index">
                                                        <p>{{cardPromotion.card}}
                                                            {{cardPromotion.percentage}}%</p>
                                                        <ul class="list-square">
                                                            <li>- {{(cardPromotion.minimum).toLocaleString()}}원 이상
                                                                {{cardPromotion.percentage}}% 청구할인
                                                            </li>
                                                            <li>- 1일 할인한도 최대
                                                                {{(cardPromotion.maximum).toLocaleString()}}원
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </dd>
                                <dt>포인트</dt>
                                <dd>
                                <span class="oners-txt mt-none">플래티어 오너스 L.POINT 0.5% 적립
                                <div class="tooltip tooltip-oners-saving">
                                    <button class="circular ui icon basic button btn-tooltip" @mouseover="onTooltip2"
                                            @mouseleave="offTooltip2"><i class="info icon"></i>
                                    </button>
                                    <div role="tooltip" class="tooltip-conts" v-if="tooltip2Display">
                                        <p class="desc-tit">플래티어 오너스 적립 안내</p>
                                        <div class="saving-info">
                                            <dl>
                                                <dt>대상회원</dt>
                                                <dd>플래티어 오너스 유료회원 가입</dd>
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
                                              :options="goodsData.options"
                                              v-model="option"
                                />
                            </div>
                            <div class="selected-list">
                                <sui-message
                                        v-for="(option, index) in selectedOptions"
                                        :key="index"
                                        :header="option.text"
                                        dismissable
                                        @dismiss="handleDismiss(index)"
                                >
                                    <div class="option-body">
                                        <div class="amount">
                                            <sui-button circular icon="plus" class="ico-plus"
                                                        @click="OptionQuantityPlus(index)"/>
                                            <input type="number" transparent class="output" :value="option.quantity"
                                                   disabled>
                                            <sui-button circular icon="minus" class="ico-minus"
                                                        @click="OptionQuantityMinus(index)"/>
                                        </div>
                                        <div class="option-price">
                                            <span>{{(selectedOptions[index].price).toLocaleString()}}</span>
                                            <span class="unit">원</span>
                                        </div>
                                    </div>
                                </sui-message>
                            </div>
                            <div class="subtotal" id="priceSumInfo">
                                <input type="hidden" id="orderSumQty" :value="orderSumQuantity">
                                <p class="price"><span class="item"
                                                       id="orderSumQtyTxt">총 {{orderSumQuantity}}개 : </span>
                                    <span id="orderDcSumPrcTxt">{{(orderSumPrice).toLocaleString()}}</span> <span
                                            class="unit">원</span></p>
                            </div>
                            <div>
                                <sui-button-group class="two shipping-option">
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
                                </sui-button-group>
                            </div>
                            <div>
                                <sui-button-group class="two cart-or-now">
                                    <sui-button content="쇼핑백" @click.native="addCart"></sui-button>
                                    <sui-modal size="tiny" v-model="open">
                                        <div class="modal-inner">
                                            <p>선택하신 상품이 <b>쇼핑백</b>에 담겼습니다.</p>
                                            <sui-button-group class="modal-inner-button">
                                                <sui-button content="계속 쇼핑하기" @click.native="toggle"></sui-button>
                                                <sui-button color="black" content="쇼핑백 보러가기"
                                                            @click="goToCart"></sui-button>
                                            </sui-button-group>
                                        </div>
                                    </sui-modal>
                                    <sui-button secondary content="바로구매" @click="directOrder"></sui-button>
                                </sui-button-group>
                            </div>
                            <div class="summary">
                                <dl class="detail">
                                    <dt>모델번호</dt>
                                    <dd>{{goodsData.modelNo}}</dd>
                                    <dt>상품번호</dt>
                                    <dd>{{goodsData.goodsCode}}</dd>
                                    <dt>배송정보</dt>
                                    <dd id="deliveryInfoTxt">{{calculateDays(goodsData.shippingDays)}} 이내 택배 도착예정<br>(도착
                                        예정일은 상품재고 현황에 따라 변경될 수 있습니다.)
                                    </dd>
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
                        <div v-if="!isEmpty(goodsData.notice)">
                            <sui-accordion exclusive>
                                <sui-accordion-title active class="accordion-title">
                                    <sui-icon name="dropdown"/>
                                    NOTICE
                                </sui-accordion-title>
                                <sui-accordion-content active class="accordion-content">
                                    <p>
                                        {{goodsData.notice}}
                                    </p>
                                </sui-accordion-content>
                            </sui-accordion>
                        </div>
                        <h4 class="subheading">상품 상세 설명</h4>
                        <div class="goods-more-detail">
                            {{goodsData.goodsDetail}}
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
                            <a href="#">{{goodsData.seller}}</a>
                        </div>
                    </div>
                    <div class="detail-tab">
                        <sui-tab>
                            <sui-tab-pane title="구매정보" v-if="!isEmpty(goodsData.infoTable)">
                                <table class="ui definition table">
                                    <tbody>
                                    <tr class="hidden-tr">
                                        <td class="two wide column"></td>
                                    </tr>
                                    <tr v-for="(row, index) in goodsData.infoTable"
                                        :key="index">
                                        <td>{{row.head}}</td>
                                        <td>{{row.body}}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </sui-tab-pane>
                            <sui-tab-pane title="배송/결제/교환/반품 정보">
                                <h3 is="sui-header" dividing>
                                    배송안내
                                </h3>
                                <table class="ui definition table">
                                    <tbody>
                                    <tr>
                                        <td class="two wide column">배송비</td>
                                        <td>{{(goodsData.shippingFee).toLocaleString()}}원 (30,000원이상 무료배송)<br>
                                            제주/도서산간 지역의 경우, 추가비용 발생 가능
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>배송정보</td>
                                        <td>택배
                                            {{calculateDays(goodsData.shippingDays)}} 이내 택배 도착예정<br>
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
                                    1. 마이플래티어 > 주문/배송조회로 이동
                                    2. 주문건에서 '교환/반품접수' 버튼 선택
                                    주문배송조회 바로가기
                                    MY PLATEER에서 접수가 어려우신 경우, 고객만족센터 02-554-4668 으로 문의하여 주시기 바랍니다.
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
                                                    <sui-list-item>예상 반품비 :
                                                        {{(goodsData.shippingFee).toLocaleString()}}원,
                                                        예상 교환비 : {{(goodsData.shippingFee * 2).toLocaleString()}}원 (주문
                                                        상품을
                                                        1개씩 각각 반품/교환 시
                                                        상품 별로 발생하는 비용임)
                                                    </sui-list-item>
                                                    <sui-list-item>정확한 반품/교환비는 MY PLATEER에서 반품/교환 접수 시 또는 고객센터로 문의 시 확인
                                                        가능합니다.
                                                    </sui-list-item>
                                                    <sui-list-item>고객님의 단순변심으로 인하여 교환/반품을 하시는 경우에는 상품등의 반환에 필요한 비용을 고객님이
                                                        부담하셔야 합니다.
                                                    </sui-list-item>
                                                    <sui-list-item>고객님이 받으신 상품 등의 내용이 표시/광고 내용과 다르거나 계약내용과 다르게 이행되어
                                                        교환/반품을
                                                        하시는 경우에는, 교환·반품 배송비는 무료입니다.
                                                    </sui-list-item>
                                                    <sui-list-item>고객님께서 직접 택배로 발송하실 경우 택배비는 본인 부담입니다.</sui-list-item>
                                                    <sui-list-item>중/대형 가전, 가구등 설치상품의 경우 상품, 지역, 설치비 등에 따라 반품/교환 비용이 상이할
                                                        수
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
                                                <sui-list-item>단순변심으로 인한 교환/반품은 상품을 받으신 날부터 7일 이내 신청 가능합니다.
                                                </sui-list-item>
                                                <sui-list-item>상품의 상세정보 등이 표기/광고한 내용과 다르거나, 계약내용이 다르게 이행되어 교환/반품을 하는 경우
                                                    상품을
                                                    받으신 날부터 3개월 이내 혹은 사실을 알게 된 날 또는 알 수 있었던 날부터 30일 이내 신청 가능합니다.
                                                </sui-list-item>
                                                <sui-list-item>상품 교환·반품 안내</sui-list-item>
                                                <sui-list-item>식품 7일 이내, 의류·보석 15일 이내, 그 밖의 일반 상품 30일 이내 교환 반품 가능합니다.
                                                </sui-list-item>
                                                <sui-list-item>주문제작 상품 등 일부 상품은 교환·반품 기준이 상이할 수 있습니다.</sui-list-item>
                                                <sui-list-item>전자상거래법에 따른 교환·반품 규정이 상품공급업체가 개별적으로 지정한 교환·반품 조건 보다 우선
                                                    합니다.
                                                </sui-list-item>
                                                <sui-list-item>방문 수령 픽업 배송상품은 해당 픽업 지점에 상품도착일로부터 5일까지 픽업 가능합니다. 픽업가능일 경과
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
                                    상품 정보 페이지에 협력업체가 개별적으로 게시한 "반품, 교환, 환불"(이하 "청약철회"라 합니다)에 관한 내용이
                                    "전자상거래등에서의소비자보호에관한법률"
                                    (이하 전상법이라 합니다)에서 규정한 내용보다 고객님께 유리한 경우에는 개별적으로 게시한 해당 "청약철회" 내용을 우선 적용하며, "전상법"의 규정보다
                                    불리한
                                    경우에는 "전상법"의 규정을 우선하여 적용합니다.
                                </div>
                            </sui-tab-pane>
                        </sui-tab>
                    </div>
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
    import {requestAddCart} from "../../../api/CartListApi";
    import WishListApi from "../../../api/WishListApi";
    import {getCurrentUserInfo} from "../../../api/UserApi";

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
                userInfo: "",
                goodsCode: "",
                option: "",
                current: "",
                shareDisplay: false,
                isLike: false,
                tooltip1Display: false,
                tooltip2Display: false,
                radioButtons: [true, false, false],
                radioButtonsColor: ["blue", "grey", "grey"],
                selectedOptions: [],
                orderSumQuantity: 0,
                orderSumPrice: 0,
                open: false,
            }
        },
        methods: {
            isEmpty(obj) {
                if (
                    obj === null ||
                    obj === undefined ||
                    obj === "" ||
                    obj.length < 1
                ) {
                    return true;
                } else {
                    return false;
                }
            },
            isDiscount(dcRate) {
                if (dcRate !== "0" && dcRate !== null && dcRate !== 0) {
                    return true;
                } else {
                    return false;
                }
            },
            shippingRadio(index) {
                let changedRadio = [false, false];
                changedRadio[index] = true;
                this.radioButtons = changedRadio;

                let changedRadioColor = ["grey", "grey"];
                changedRadioColor[index] = "blue";
                this.radioButtonsColor = changedRadioColor;
            },
            addOptions(option) {
                let addOptions = this.selectedOptions;

                if (addOptions.filter(optionObject => optionObject.text === option).length === 0) {
                    let data = {
                        text: option,
                        quantity: 1,
                        price: this.goodsData.benefitPrice,
                        originalPrice: this.goodsData.originalPrice,
                        dcRate: this.goodsData.dcRate,
                        benefitPrice: this.goodsData.benefitPrice,
                        shippingFee: this.goodsData.shippingFee,
                    };

                    addOptions.push(data);
                    this.selectedOptions = addOptions;
                }
            },
            calculateDays(days) {
                let week = ["일", "월", "화", "수", "목", "금", "토"];

                let date = new Date();
                let weekday = date.getDay();

                if (weekday === 0 || weekday === 1) {
                    days += 2;
                }

                date.setDate(date.getDate() + days);

                let month = "" + (date.getMonth() + 1);
                let day = "" + date.getDate();

                if (month.length < 2) {
                    month = "0" + month;
                }

                if (day.length < 2) {
                    day = "0" + day;
                }

                return month + "/" + day + "(" + week[date.getDay()] + ")";
            },
            handleDismiss(index) {
                if (index > -1) {
                    this.selectedOptions.splice(index, 1);
                }
            },
            OptionQuantityPlus(index) {
                this.selectedOptions[index].quantity++;
                this.optionPricing(index);
                this.calculateOrderSum();
            },
            OptionQuantityMinus(index) {
                if (this.selectedOptions[index].quantity > 1) {
                    this.selectedOptions[index].quantity--;
                    this.optionPricing(index);
                    this.calculateOrderSum();
                }
            },
            optionPricing(index) {
                this.selectedOptions[index].price =
                    this.goodsData.benefitPrice *
                    this.selectedOptions[index].quantity
            },
            calculateOrderSum() {
                this.orderSumPrice = 0;
                this.orderSumQuantity = 0;
                for (let i = 0; i < this.selectedOptions.length; i++) {
                    this.orderSumPrice += this.selectedOptions[i].price;
                    this.orderSumQuantity += this.selectedOptions[i].quantity;
                }
            },
            onShareList() {
                this.shareDisplay = true;
            },
            offShareList() {
                this.shareDisplay = false;
            },
            likeBtnClick() {
                this.isLike = !this.isLike;

                let wishListApi = new WishListApi();

                if (this.isLike) {
                    wishListApi.addGoodsWish({
                        "goodsCode": this.$route.params.goodsCode
                    });

                    alert("위시리스트에 담겼습니다.")
                } else {
                    wishListApi.deleteGoodsWish({
                        "goodsCode": this.$route.params.goodsCode
                    });
                }
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
            addCart() {
                requestAddCart({
                    userId: (this.userInfo).email,
                    goodsCode: this.$route.params.goodsCode,
                    selectedOptions: this.selectedOptions
                });
                this.toggle();
            },
            toggle() {
                this.open = !this.open;
            },
            goToCart() {
                this.$router.push("/cart");
            },
            directOrder() {
                if (this.selectedOptions.length == 0) {
                    alert("옵션을 먼저 선택해주세요.");
                } else {
                    this.$router.push({
                        name: "ordercomplete", params: {
                            orderData:
                                {
                                    goodsCode: this.$route.params.goodsCode,
                                    selectedOptions: this.selectedOptions,
                                }
                        }
                    });
                }
            }
        },
        async created() {
            this.userInfo = await getCurrentUserInfo();
            this.goodsCode = this.$route.params.goodsCode;
            this.$store.commit("getGoodsModel", this.goodsCode);
            this.$store.commit("loadCommentByGoodsCode", this.goodsCode);
            this.$store.commit("addSawList", this.goodsCode);
        },
        computed: {
            goodsData() {
                return this.$store.state.goodsStore.goodsModel;
            },
        },
        watch: {
            option() {
                this.addOptions(this.option);
            },
            selectedOptions() {
                this.calculateOrderSum();
            },
            orderSumPrice() {
            },
            orderSumQuantity() {
            },
        }
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

    ul {
        list-style: none;
    }

    .container {
        width: 100%;
        min-height: 600px;
        padding-top: 80px;
    }

    .fix-inner {
        width: 1200px;
        margin: 0 auto;
    }

    .goods-detail {
        position: static;
        margin-bottom: 80px;
        overflow: hidden;
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

    .discount {
        display: inline-block;
        font-size: 32px;
        vertical-align: bottom;
    }

    .price {
        display: inline-block;
        font-size: 24px;
        line-height: 33px;
    }

    .price del {
        text-decoration: line-through;
        display: block;
        font-size: 14px;
        line-height: 20px;
        color: #999;
    }

    .discount .unit {
        margin-right: 29px;
        font-size: 24px;
    }

    .price .unit {
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
        right: -100px;
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

    .selected-list {
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

    .ui.basic.blue.active.button {
        background-color: #2185d0 !important;
        color: white !important;
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
        margin-top: 20px;
        vertical-align: middle;
    }

    .amount .ico-plus {
        float: right;
        position: relative;
        display: inline-block;
        vertical-align: middle;
        font-size: 0.7rem;
        margin-top: 5px;
    }

    .amount .ico-minus {
        float: left;
        position: relative;
        display: inline-block;
        vertical-align: middle;
        font-size: 0.7rem;
        margin-top: 5px;
    }

    .option-price {
        display: inline-block;
        float: right;
        margin-top: 20px;
        font-size: 18px;
        text-align: right;
    }

    .cart-or-now {
        width: 100%;
        height: 5rem;
        margin-bottom: 20px;
    }

    .cart-or-now .button {
        font-size: 1.3rem;
    }

    .modal-inner {
        padding: 40px;
        text-align: center;
    }

    .modal-inner-button {
        height: 3rem;
    }

    .modal-inner-button .button {
        font-size: 14px;
    }

    .modal-inner p {
        font-size: 24px;
        text-align: center;
        margin-bottom: 2rem;
    }

    .promotion-banner {
        background-color: black;
        color: white;
    }

    .brand-banner {
        background-color: black;
        color: white;
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

    .hidden-tr {
        visibility: hidden !important;
    }

    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
</style>