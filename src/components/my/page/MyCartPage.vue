<template>
    <div id="main-page-container">
        <Header></Header>
            <sui-container>
                <div style="margin-top:30px; margin-bottom:30px;">
                    <h1>쇼핑백</h1>
                </div>

                <div>
                    <sui-menu :widths="3">
                        <sui-menu-item active>일반배송</sui-menu-item>
                        <sui-menu-item>스마트픽</sui-menu-item>
                        <sui-menu-item>해외직구</sui-menu-item>
                    </sui-menu>
                </div>
                <div class="goods-main-container">
                    <div class="goods-list-container">
                        <div class="goods-options">
                            <div style="display:inline-block;">
                                <sui-checkbox @change="checkWholeItem" class="goods-checkbox" label="택배배송"  />
                            </div>
                            <div style="display:inline-block; float:right;">
                                <a @click="checkedDeleteCartList" href="javascript:void(0)" style="margin-right:10px;">선택삭제</a>
                                <a href="javascript:void(0)" @click="containWishList">위시담기</a>
                            </div>
                        </div>
                        <div v-for="(cart, index) in getCartList" v-bind:key="index"  class="goods-list">
                            <div style="background-color:#ededed; height:50px;">
                                <p style="text-align:right; line-height:50px; margin-right:10px;">무료배송</p>
                            </div>
                            <div>
                                <sui-grid :columns="5">
                                    <sui-grid-row stretched class="cart-grid-row">
                                        <sui-grid-column style="width:10%;">
                                            <sui-segment style="position:absolute; top:50%;">
                                                <sui-checkbox @change="checkCart(index)" class="goods-checkbox" :id="index" :value="cart" v-model="checkedCartList"/>
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
                                            </sui-segment>
                                        </sui-grid-column>
                                        <sui-grid-column style="width:15%; padding-bottom:5%;">
                                            <sui-segment>
                                                <div class="quantity-box">
                                                    <sui-button class="minus" @click="cartStockMinus(cart)">-</sui-button>
                                                    <sui-input :value="cart.cartStock" v-model="cart.cartStock" style="margin-left:18px;"/>
                                                    <sui-button class="plus" @click="cartStockPlus(cart)">+</sui-button>
                                                </div>
                                            </sui-segment>
                                        </sui-grid-column>
                                        <sui-grid-column style="width:15%; padding-bottom: 6%;">
                                            <sui-segment>
                                                <div @click="deleteCart(cart)" style="text-align:center; cursor:pointer"><a href="javascript:void(0)">X</a></div>
                                            </sui-segment>
                                            <sui-segment>
                                                <div><span class="goods-price">{{priceFormatting(cart.originalPrice)}}원</span></div>
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
                                    <span>{{totalGoodsPrice()}}원</span>
                                </div>
                            </div>
                            <div class="goods-price-info">
                                <div class="goods-price-info-won">
                                    <span>배송비</span>
                                </div>
                                <div class="goods-price-won">
                                    <span>+0원</span>
                                </div>
                            </div>
                            <div class="goods-price-info">
                                <div class="goods-price-info-won">
                                    <span>할인금액</span>
                                </div>
                                <div class="goods-price-won">
                                    <span>-0원</span>
                                </div>
                            </div>
                            <sui-divider />
                            <div class="goods-price-info">
                                <div class="goods-price-info-won">
                                    <span>결제예정금액</span>
                                </div>
                                <div class="goods-price-won">
                                    <span>{{totalCartPrice()}}원</span>
                                </div>
                            </div>
                            <div class="goods-price-info">
                                <sui-button secondary @click="buyCartList">구매하기</sui-button>
                            </div>
                            <div class="goods-price-info">
                                <h3>카드 청구할인 정보</h3>
                            </div>
                            <div class="goods-price-info">
                                <h3>롯데카드</h3>
                                <p>
                                    - 70,000원 이상 결제시 10% (~03/17)
                                    - 1일 할인한도 최대 70,000원
                                </p>
                            </div>
                            <sui-divider />
                            <div class="goods-price-info">
                                <h3>KB국민카드</h3>
                                <p>
                                    - 70,000원 이상 결제시 10% (~03/17)
                                    - 1일 할인한도 최대 70,000원
                                </p>
                            </div>
                            <sui-divider />
                            <div class="goods-price-info">
                                <span>* 체크/법인/기프트/선불카드 제외</span>
                            </div>
                            <div class="goods-price-info">
                                <sui-button>카드 무이자 할부 안내</sui-button>
                            </div>
                        </div>
                    </div>
                </div>
            </sui-container>
            <div>
                <sui-button @click="addCartList">장바구니 추가</sui-button>
            </div>
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
                    data에 cartList 값
                    <br />
                    {{checkedCartList}}
                    <hr/>
                </div>
            </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from '../../share/Header';
    import Footer from '../../share/Footer.vue';

    export default {
        name: "MyCart",
        data() {
            return {
                isTotalChecked:false,
                isChecked:false,
                checkedCartList:[],
            }
        },
        components: {
            Header,
            Footer,
        },
        methods: {
            priceFormatting(price) {
                return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            },
            addCartList() {
                this.$store.commit('addCartList');
            },
            checkWholeItem() {
                this.checkedCartList = [];

                if(!this.isTotalChecked) {
                    this.$store.state.cartListStore.cartList.map((cart, index) => {
                        Object.assign(cart, {
                            "index":index
                        });
                        this.checkedCartList.push(cart);
                    });
                    this.isTotalChecked = true;
                } else {
                    this.isTotalChecked = false;
                }
            },
            totalCartCount() {
                return this.checkedCartList.length;
            },
            pricingCalculation(originalPrice, cartStock) {
                return originalPrice * cartStock;
            },
            totalGoodsPrice() {
                let totalGoodsPrice = 0;

                this.checkedCartList.map((cart) => {
                    totalGoodsPrice += this.pricingCalculation(cart.originalPrice, cart.cartStock);
                });
                return this.priceFormatting(totalGoodsPrice);
            },
            totalCartPrice() {
                let totalCartPrice = 0;

                this.checkedCartList.map((cart) => {
                    totalCartPrice += this.pricingCalculation(cart.originalPrice, cart.cartStock);
                });
                return this.priceFormatting(totalCartPrice);
            },
            cartStockMinus(cart) {
                if (cart.cartStock === 1) {
                    alert('최소 1개 구매 가능합니다.');
                    return;
                }
                cart.cartStock -= 1;
            },
            cartStockPlus(cart) {
                cart.cartStock += 1;
            },

            deleteCart(deletedCart) {
                const result = confirm("해당 상품을 삭제 하시겠습니까?");
                if (result) {
                    this.$store.commit('deleteCart', deletedCart);
                    this.checkedCartList = this.checkedCartList.filter(function(cart) {
                        return cart !== deletedCart;
                    });
                }
            },

            checkedDeleteCartList() {
                const result = confirm("선택된 " + this.checkedCartList.length + "개 상품을 삭제 하시겠습니까?");
                if (result) {
                    this.$store.commit('checkedDeleteCartList', this.checkedCartList);
                    this.checkedCartList = [];
                }
            },

            checkCart(index) {
                if (!this.isChecked) {
                    let checkCart = this.$store.state.cartListStore.cartList[index];
                    Object.assign(checkCart, {
                        "index":index
                    });
                } else {
                    this.checkedCartList.splice(index, 1);
                }
            },

            containWishList() {
                let goodsCodeArr = [];
                this.checkedCartList.map((cart) => {
                    goodsCodeArr.push(cart.goodsCode);
                });
                this.$store.commit('containWishList', goodsCodeArr);
            },
            goToGoodsDetail(goodsCode) {
                this.$router.push('/goodsDetail/' + goodsCode);
            },
            buyCartList() {

            }
        },
        created() {
            this.$store.commit('getCartList');
        },
        computed: {
            getCartList() {
                return this.$store.state.cartListStore.cartList;
            },
        }
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

    .goods-price {
        font-size:12px;
    }
</style>