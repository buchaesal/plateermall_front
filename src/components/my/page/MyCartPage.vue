<template>
    <div id="main-page-container">
        <Header></Header>
        <sui-container>
            <div style="margin-bottom:30px;">
                <h1>쇼핑백</h1>
            </div>

            <div>
                <sui-menu :widths="3">
                    <sui-menu-item active>일반배송</sui-menu-item>
                    <sui-menu-item>스마트픽</sui-menu-item>
                    <sui-menu-item>해외직구</sui-menu-item>
                </sui-menu>
            </div>
            <div class="empty-cart" v-if="cartListCount === 0">
                <i class="huge exclamation icon"></i>
                <br/>
                <br/>
                <p>장바구니에 담은 상품이 없습니다.</p>

            </div>
            <div class="goods-main-container" v-else>
                <div class="goods-list-container">
                    <div class="goods-options">
                        <div style="display:inline-block;">
                            <sui-checkbox @change="checkWholeItem" class="goods-checkbox" label="택배배송" v-model="isTotalChecked"  />
                        </div>
                        <div style="display:inline-block; float:right;">
                            <a @click="checkedDeleteCartList" href="javascript:void(0)" style="margin-right:10px;">선택삭제</a>
                            <a href="javascript:void(0)" @click="containWishList">위시담기</a>
                        </div>
                    </div>
                    <div v-for="(cart, index) in getCartList" v-bind:key="index" class="goods-list">
                        <div style="background-color:#ededed; height:50px;">
                            <p style="text-align:right; line-height:50px; margin-right:10px;">무료배송</p>
                        </div>
                        <div>
                            <sui-grid :columns="5">
                                <sui-grid-row stretched class="cart-grid-row">
                                    <sui-grid-column style="width:10%;">
                                        <sui-segment style="position:absolute; top:50%;">
                                            <sui-checkbox class="goods-checkbox" :id="index" :value="cart" v-model="checkedCartList" />
                                        </sui-segment>
                                    </sui-grid-column>
                                    <sui-grid-column style="width:20%;">
                                        <sui-segment @click="goToGoodsDetail(cart.goodsCode)">
                                            <sui-image :src="cart.imgUrl"  class="cart-img" />
                                        </sui-segment>
                                    </sui-grid-column>
                                    <sui-grid-column style="width:40%;">
                                        <sui-segment @click="goToGoodsDetail(cart.goodsCode)">
                                            <p style="font-family:Georgia, serif;">{{cart.title}}</p>
                                            <p style="font-family:Georgia, serif; color:gray">옵션 : {{cart.text}}</p>
                                        </sui-segment>
                                    </sui-grid-column>
                                    <sui-grid-column style="width:15%; padding-bottom:5%;">
                                        <sui-segment>
                                            <div class="quantity-box">
                                                <sui-button class="minus" @click="quantityMinus(cart)">-</sui-button>
                                                <sui-input :value="cart.quantity" v-model="cart.quantity" style="margin-left:18px; width:40px;" />
                                                <sui-button class="plus" @click="quantityPlus(cart)">+</sui-button>
                                            </div>
                                            <div>
                                                <sui-button @click="changeQuantity(cart)" class="quantity-change-btn" basic secondary>변경</sui-button>
                                            </div>
                                        </sui-segment>
                                    </sui-grid-column>
                                    <sui-grid-column style="width:15%; padding-bottom: 6%;">
                                        <sui-segment>
                                            <div @click="deleteCart(cart)" style="text-align:center; cursor:pointer"><a href="javascript:void(0)">X</a></div>
                                        </sui-segment>
                                        <sui-segment>
                                            <div>
                                                <span class="goods-original-price">{{cart.originalPrice.toLocaleString()}}원</span>
                                            </div>
                                            <div>
                                                <span class="goods-dc-price">{{cart.benefitPrice.toLocaleString()}}원</span>
                                            </div>
                                        </sui-segment>
                                    </sui-grid-column>
                                </sui-grid-row>
                            </sui-grid>
                        </div>
                    </div>
                </div>

                <div class="goods-price-container">
                    <div>
                        <h3>상품 {{totalCartCount()}}개</h3>
                        <sui-divider />
                        <div class="goods-price-info">
                            <div class="goods-price-info-won">
                                <span>상품금액</span>
                            </div>
                            <div class="goods-price-won">
                                <span>{{totalGoodsPrice().toLocaleString()}}원</span>
                            </div>
                        </div>
                        <div class="goods-price-info">
                            <div class="goods-price-info-won">
                                <span>배송비</span>
                            </div>
                            <div class="goods-price-won">
                                <span>+{{totalShippingFee().toLocaleString()}}원</span>
                            </div>
                        </div>
                        <div class="goods-price-info">
                            <div class="goods-price-info-won">
                                <span>할인금액</span>
                            </div>
                            <div class="goods-price-won">
                                <span>-{{totalDcRatePrice().toLocaleString()}}원</span>
                            </div>
                        </div>
                        <sui-divider />
                        <div class="goods-price-info">
                            <div class="goods-price-info-won">
                                <span>결제예정금액</span>
                            </div>
                            <div class="goods-price-won">
                                <span>{{totalCartPrice().toLocaleString()}}원</span>
                            </div>
                        </div>
                        <div class="goods-price-info">
                            <sui-button secondary @click="orderCartList">구매하기</sui-button>
                        </div>
                        <div class="goods-price-info">
                            <h3>카드 청구할인 정보</h3>
                        </div>

                        <div v-for="(cardInfoObj, index) in cardInfoList" v-bind:key="index" class="goods-price-info">
                            <h3>{{cardInfoObj.cardName}}</h3>
                            <p v-html="cardInfoObj.cardInfo">

                            </p>
                        </div>
                        <sui-divider />
                        <div class="goods-price-info">
                            <span>* 체크/법인/기프트/선불카드 제외</span>
                        </div>
                    </div>
                </div>
            </div>
        </sui-container>
        <!--
        <div>
            <div>
                <hr/>
                state에 cartList 값
                <br />
                {{getCartList}}
                <hr/>
            </div>

            <div>
                <hr/>
                data에 checkedCartList 값
                <br />
                {{checkedCartList}}
                <hr/>
            </div>
            <div>
                {{isTotalChecked}}
            </div>
        </div>
        -->
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from '../../share/Header';
    import Footer from '../../share/Footer.vue';
    import {requestCardDiscountInfo} from "../../../api/CartListApi";

    export default {
        name: "MyCart",
        data() {
            return {
                isTotalChecked:false,
                checkedCartList:[],
                cardInfoList:[],
            }
        },
        components: {
            Header,
            Footer,
        },
        methods: {
            checkWholeItem() {
                if(this.isTotalChecked) {
                    this.checkedCartList = this.$store.state.cartListStore.cartList;
                } else {
                    this.checkedCartList = [];
                }
            },
            totalCartCount() {
                return this.checkedCartList.length;
            },
            totalShippingFee() {
                let totalShippingFee = 0;

                this.checkedCartList.map((cart) => {
                    totalShippingFee += cart.shippingFee;
                });
                return totalShippingFee;
            },
            totalDcRatePrice() {
                let totalDcRatePrice = 0;
                this.checkedCartList.map((cart) => {
                    totalDcRatePrice += (cart.originalPrice - cart.benefitPrice);
                });
                return totalDcRatePrice;
            },

            totalGoodsPrice() {
                let totalGoodsPrice = 0;

                this.checkedCartList.map((cart) => {
                    totalGoodsPrice += (cart.originalPrice * cart.quantity);
                });
                return totalGoodsPrice;
            },
            totalCartPrice() {
                let totalCartPrice = 0;

                this.checkedCartList.map((cart) => {
                    totalCartPrice += ((cart.originalPrice * cart.quantity) + cart.shippingFee - (cart.originalPrice - cart.benefitPrice));
                });
                return totalCartPrice;
            },
            quantityMinus(cart) {
                if (cart.quantity === 1) {
                    alert('최소 1개 구매 가능합니다.');
                    return;
                }
                cart.quantity -= 1;
            },
            quantityPlus(cart) {
                cart.quantity += 1;
            },

            async deleteCart(deletedCart) {
                const result = confirm("해당 상품을 삭제 하시겠습니까?");
                if (result) {
                    await this.$store.dispatch('deleteCart', deletedCart);
                    this.checkedCartList = [];
                }
            },

            async checkedDeleteCartList() {
                const result = confirm("선택된 " + this.checkedCartList.length + "개 상품을 삭제 하시겠습니까?");
                if (result) {
                    await this.$store.dispatch('checkedDeleteCartList', this.checkedCartList);
                    this.checkedCartList = [];
                    this.isTotalChecked = false;
                }
            },

            containWishList() {
                let goodsCodeArr = [];
                this.checkedCartList.map((cart) => {
                    goodsCodeArr.push({
                        "goodsCode" : cart.goodsCode,
                        "userId" : this.$store.state.cartListStore.userInfo.email
                    });
                });

                this.$store.dispatch('containWishList', goodsCodeArr);
            },

            goToGoodsDetail(goodsCode) {
                this.$router.push('/goodsDetail/' + goodsCode);
            },

            changeQuantity(cart) {
                const result = confirm("수량을 변경하시겠습니까?");
                if (result) {
                    this.$store.dispatch('changeQuantity', cart);
                }
            },

            orderCartList() {
                if (this.checkedCartList.length == 0) {
                    alert("구매하실 상품을 먼저 선택해주세요.");
                } else {
                    this.$router.push({
                        name: "order", params: {
                            orderData:
                                {
                                    goodsCode: this.$route.params.goodsCode,
                                    selectedGoods: this.checkedCartList,
                                }
                        }
                    });
                }
            },
        },
        async created() {
            await this.$store.dispatch('getLoginUserInfo');
            await this.$store.dispatch('getCartList');
            this.cardInfoList = await requestCardDiscountInfo();
        },

        computed: {
            getCartList() {
                  return this.$store.state.cartListStore.cartList;
            },
            cartListCount() {
                return this.$store.state.cartListStore.cartList.length;
            }
        },
    }
</script>

<style scoped>
    .goods-options {
        height:50px;
        width:100%;
        padding-top:30px;
    }
    .goods-list-container {
        float:left;
        width:70%;
        margin:100px 0px;
    }
    .goods-price-container {
        float:right;
        width:25%;
        margin:100px 0px;
        border:1px solid #ccc;
        padding:30px 30px 30px 30px;
    }
    .goods-main-container {
        width:100%;
    }

    .ui.segment {
        border: 0px;
        box-shadow: 0 0 0 0;
    }

    .ui.input {
        width:37px;
    }

    .quantity-box {
        position:relative;
    }

    .quantity-box .minus {
        position:absolute;
        left:-20px;
        background:#fff;
    }
    .quantity-box .plus {
        position:absolute;
        left:47px;
        background:#fff;
        padding-left: 10px;
        margin-left: 12px;
        padding-right: 15px;
    }
    .cart-grid-row {
        /* border:1px solid #ccc; */
        border-bottom:1px solid #ccc;
    }
    #cart-grid-row .column {
        box-shadow: none;
    }
    .goods-list {
        margin-bottom:50px;
    }
    .goods-price-info {
        margin-bottom:25px;
    }
    .goods-price-info-won {
        display:inline-block;
    }
    .goods-price-won {
        display:inline-block;
        float:right;
    }

    .goods-original-price {
        text-decoration: line-through;
        font-size:12px;
        color:gray;
    }

    .quantity-change-btn {
        width: 83px;
        margin-top: 40%;
    }

    .ui.container {
        overflow: hidden;
    }

    #main-page-container {
        margin-top: 250px;
    }

    .empty-cart {
        margin-top: 10%;
        margin-bottom: 20%;
        text-align: center;
    }

    .empty-cart > p {
        font-size: 15px;
    }
</style>
