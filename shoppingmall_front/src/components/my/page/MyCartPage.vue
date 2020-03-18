<template>
    <div id="main-page-container">
        <Header></Header>
            <sui-container>
                <div style="margin-top:30px; margin-bottom:30px;">
                    <h1>쇼핑백</h1>
                </div>

                <div>
                    <sui-menu :widths="3">
                        <sui-menu-item>일반배송</sui-menu-item>
                        <sui-menu-item>스마트픽</sui-menu-item>
                        <sui-menu-item active>해외직구</sui-menu-item>
                    </sui-menu>
                </div>
                <div class="goods-main-container">
                    <div class="goods-list-container">
                        <div class="goods-options">
                            <sui-checkbox class="goods-checkbox" label="택배배송" v-model="value" />
                            <a href="#" class="goods-option" >선택삭제</a>
                            <a href="#" class="goods-option" style="margin-right:10px;">품절삭제</a>
                            <a href="#" class="goods-option" style="margin-right:10px;">위시담기</a>
                        </div>
                        <div class="goods-list">
                            <div style="background-color:#ededed; height:50px;">
                                <p style="text-align:right; line-height:50px; margin-right:10px;">무료배송</p>
                            </div>
                            <div>
                                <sui-grid :columns="5">
                                    <sui-grid-row stretched class="cart-grid-row">
                                        <sui-grid-column style="width:10%;">
                                            <sui-segment style="position:absolute; top:50%;">
                                                <sui-checkbox class="goods-checkbox" v-model="value" />
                                            </sui-segment>
                                        </sui-grid-column>
                                        <sui-grid-column style="width:20%;">
                                            <sui-segment>
                                                <sui-image src="https://image.ellotte.com/ellt.static.lotteeps.com/goods/img/71/17/50/01/12/1201501771_mast.jpg/chg/resize/160x160/extent/160x160/optimize" size="small" class="cart-img" />
                                            </sui-segment>
                                        </sui-grid-column>
                                        <sui-grid-column style="width:40%;">
                                            <sui-segment>
                                                <p>
                                                    필립스(아울렛)
                                                    필립스 소닉케어 다이아몬드 클린 매트화이트 HX9338/04
                                                </p>
                                                <p>
                                                    모델명:HX9338/04
                                                </p>
                                            </sui-segment>
                                        </sui-grid-column>
                                        <sui-grid-column style="width:15%; padding-bottom:5%;">
                                            <sui-segment>
                                                <div class="quantity-box">
                                                    <sui-button class="minus">-</sui-button>
                                                    <sui-input value="1" style="margin-left:18px;"/>
                                                    <sui-button class="plus">+</sui-button>
                                                </div>
                                            </sui-segment>
                                            <sui-segment>
                                                <div>
                                                    <sui-button @click="changeState" basic content="변경" style="width:100px; margin-top:15px; margin-left:-15px;" />
                                                    <p>{{getCartListData}}</p>
                                                </div>
                                            </sui-segment>
                                        </sui-grid-column>
                                        <sui-grid-column style="width:15%; padding-bottom: 6%;">
                                            <sui-segment>
                                                <div style="text-align:center;"><a href="#">X</a></div>
                                            </sui-segment>
                                            <sui-segment>
                                                <div><span class="goods-price">1,206,000원</span></div>
                                            </sui-segment>
                                        </sui-grid-column>
                                    </sui-grid-row>
                                </sui-grid>
                            </div>
                        </div>
                        <div class="goods-list">
                            <div style="background-color:#ededed; height:50px;">
                                <p style="text-align:right; line-height:50px; margin-right:10px;">무료배송</p>
                            </div>
                            <div>
                                <sui-grid :columns="5">
                                    <sui-grid-row stretched class="cart-grid-row">
                                        <sui-grid-column style="width:10%;">
                                            <sui-segment style="position:absolute; top:50%;">
                                                <sui-checkbox class="goods-checkbox" v-model="value" />
                                            </sui-segment>
                                        </sui-grid-column>
                                        <sui-grid-column style="width:20%;">
                                            <sui-segment>
                                                <sui-image src="https://image.ellotte.com/ellt.static.lotteeps.com/goods/img/71/17/50/01/12/1201501771_mast.jpg/chg/resize/160x160/extent/160x160/optimize" size="small" />
                                            </sui-segment>
                                        </sui-grid-column>
                                        <sui-grid-column style="width:40%;">
                                            <sui-segment>
                                                <p>
                                                    필립스(아울렛)
                                                    필립스 소닉케어 다이아몬드 클린 매트화이트 HX9338/04
                                                </p>
                                                <p>
                                                    모델명:HX9338/04
                                                </p>
                                            </sui-segment>
                                        </sui-grid-column>
                                        <sui-grid-column style="width:15%; padding-bottom:5%;">
                                            <sui-segment>
                                                <div class="quantity-box">
                                                    <sui-button class="minus">-</sui-button>
                                                    <sui-input value="1" style="margin-left:18px;"/>
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
                                                <div><span class="goods-price">1,206,000원</span></div>
                                            </sui-segment>
                                        </sui-grid-column>
                                    </sui-grid-row>
                                </sui-grid>
                            </div>
                        </div>
                        <div class="goods-list">
                            <div style="background-color:#ededed; height:50px;">
                                <p style="text-align:right; line-height:50px; margin-right:10px;">무료배송</p>
                            </div>
                            <div>
                                <sui-grid :columns="5">
                                    <sui-grid-row stretched class="cart-grid-row">
                                        <sui-grid-column style="width:10%;">
                                            <sui-segment style="position:absolute; top:50%;">
                                                <sui-checkbox class="goods-checkbox" v-model="value" />
                                            </sui-segment>
                                        </sui-grid-column>
                                        <sui-grid-column style="width:20%;">
                                            <sui-segment>
                                                <sui-image src="https://image.ellotte.com/ellt.static.lotteeps.com/goods/img/71/17/50/01/12/1201501771_mast.jpg/chg/resize/160x160/extent/160x160/optimize" size="small" />
                                            </sui-segment>
                                        </sui-grid-column>
                                        <sui-grid-column style="width:40%;">
                                            <sui-segment>
                                                <p>
                                                    필립스(아울렛)
                                                    필립스 소닉케어 다이아몬드 클린 매트화이트 HX9338/04
                                                </p>
                                                <p>
                                                    모델명:HX9338/04
                                                </p>
                                            </sui-segment>
                                        </sui-grid-column>
                                        <sui-grid-column style="width:15%; padding-bottom:5%;">
                                            <sui-segment>
                                                <div class="quantity-box">
                                                    <sui-button class="minus">-</sui-button>
                                                    <sui-input value="1" style="margin-left:18px;"/>
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
                                                <div><span class="goods-price">1,206,000원</span></div>
                                            </sui-segment>
                                        </sui-grid-column>
                                    </sui-grid-row>
                                </sui-grid>
                            </div>
                        </div>
                    </div>

                    <div class="goods-price-container">
                        <div>
                            <h3>상품 0개</h3>
                            <sui-divider />
                            <div class="goods-price-info">
                                <div class="goods-price-info-won">
                                    <span>상품금액</span>
                                </div>
                                <div class="goods-price-won">
                                    <span>0원</span>
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
                                    <span>0원</span>
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

            }
        },
        components: {
            Header,
            Footer,
        },
        methods: {
            changeState(){
                this.$store.commit('getCartList');
            },
        },
        created() {

        },
        computed: {
            getCartListData() {
                return this.$store.state.cartListStore.cartListCount;
            }
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