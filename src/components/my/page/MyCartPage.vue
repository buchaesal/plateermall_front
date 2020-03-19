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
                            <sui-checkbox @change="checkWholeItem" class="goods-checkbox" label="택배배송"  />
                            <a href="#" class="goods-option" >선택삭제</a>
                            <a href="#" class="goods-option" style="margin-right:10px;">품절삭제</a>
                            <a href="#" class="goods-option" style="margin-right:10px;">위시담기</a>
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
                                                <sui-checkbox class="goods-checkbox" :id="cart.cartCode" :value="cart" v-model="checkedCartList"/>
                                            </sui-segment>
                                        </sui-grid-column>
                                        <sui-grid-column style="width:20%;">
                                            <sui-segment>
                                                <sui-image :src="cart.imgUrl" size="small" class="cart-img" />
                                            </sui-segment>
                                        </sui-grid-column>
                                        <sui-grid-column style="width:40%;">
                                            <sui-segment>
                                                <p>
                                                    {{cart.title}}
                                                </p>
                                            </sui-segment>
                                        </sui-grid-column>
                                        <sui-grid-column style="width:15%; padding-bottom:5%;">
                                            <sui-segment>
                                                <div class="quantity-box">
                                                    <sui-button class="minus">-</sui-button>
                                                    <sui-input :value="cart.cartStock" style="margin-left:18px;"/>
                                                    <sui-button class="plus">+</sui-button>
                                                </div>
                                            </sui-segment>
                                            <sui-segment>
                                                <div>
                                                    <sui-button basic content="변경" style="width:100px; margin-top:15px; margin-left:-15px;" />
                                                </div>
                                            </sui-segment>
                                        </sui-grid-column>
                                        <sui-grid-column style="width:15%; padding-bottom: 6%;">
                                            <sui-segment>
                                                <div style="text-align:center;"><a href="#">X</a></div>
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
                                <sui-button secondary>구매하기</sui-button>
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
                <div>{{JSON.stringify(checkedCartList)}}</div>
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
                if(!this.isChecked) {
                    this.$store.state.cartListStore.cartList.map((cart) => {
                        this.checkedCartList.push(cart);
                    });
                    this.isChecked = true;
                } else {
                    this.checkedCartList = [];
                    this.isChecked = false;
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
    .goods-checkbox {
        float:left;
    }
    .goods-option {
        float:right;
    }
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