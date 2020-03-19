<template>
    <div>
        <div class="order_header">
         <FaqHeader :title="'주문배송조회'"></FaqHeader>
        </div>
        <div class="order-box-div">
            <ul class="total-order-box">
                <li class="order-box">
                    <a href="#" class="order-quantity">0</a>
                    <p class="order-state">주문접수</p>
                </li>
                <li class="order-box">
                    <sui-icon name="chevron right" class="search_btn" size="big" color="grey"/>
                </li>
                <li class="order-box">
                    <a href="#" class="order-quantity">0</a>
                    <p class="order-state">결재완료</p>
                </li>
                <li class="order-box">
                    <sui-icon name="chevron right" class="search_btn" size="big" color="grey"/>
                </li>
                <li class="order-box">
                    <a href="#" class="order-quantity">0</a>
                    <p class="order-state">배송준비중</p>
                </li>
                <li class="order-box">
                    <sui-icon name="chevron right" class="search_btn" size="big" color="grey"/>
                </li>
                <li class="order-box">
                    <a href="#" class="order-quantity">0</a>
                    <p class="order-state">배송중</p>
                </li>
                <li class="order-box">
                    <sui-icon name="chevron right" class="search_btn" size="big" color="grey"/>
                </li>
                <li class="order-box">
                    <a href="#" class="order-quantity">0</a>
                    <p class="order-state">배송완료</p>
                </li>
            </ul>
        </div>
        <hr>

        <div>
            <div v-for="(cart, index) in sampleData" v-bind:key="index"  class="goods-list">
                <div style="background-color:#ededed; height:50px;">
                    <p style="text-align:right; line-height:50px; margin-right:10px;">무료배송</p>
                </div>
                <div>
                    <sui-grid :columns="5">
                        <sui-grid-row stretched class="cart-grid-row">
                            <sui-grid-column style="width:10%;">
                                <sui-segment style="position:absolute; top:50%;">
                                    <sui-checkbox class="goods-checkbox" :id="cart.cartCode" :value="cart.cartCode" v-model="checkedIndexList"/>
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

    </div>
</template>

<script>
    import FaqHeader from "../faq/FaqHeader";

    export default {
        name: "OrderList",
        data() {
            return {
                checkedIndexList: [],
                sampleData : [
                    {
                    cartCode: "code1",
                    userId: "1",
                    cartStock: 5,
                    imgUrl: "https://image.ellotte.com/ellt.static.lotteeps.com/goods/img/71/17/50/01/12/1201501771_mast.jpg/chg/resize/160x160/extent/160x160/optimize",
                    goodsCode: "123",
                    seller: "판매자1",
                    title: "필립스(아울렛)\n" +
                        "필립스 소닉케어 다이아몬드 클린 매트화이트 HX9338/04\n" +
                        "모델명:HX9338/04",
                    originalPrice: 1206000,
                    dcRate: 3.5,
                    saleCnt: 5
                }
                ],
            }
        },
        methods:{
            priceFormatting(price) {
                return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            },
        },
        components: {
            FaqHeader
        }
    }
</script>

<style scoped>
    .order_header{
        border-top: 3px solid #000;
        border-bottom: 1px solid rgba(179, 179, 179, 0.58);
    }

    .order-box-div {
        text-align: center;
        height: 120px;
        padding-left: 8%;
        background-color: GhostWhite;
        margin: 20px 0;
    }
    .total-order-box {
        list-style: none;
        padding: 0;
    }

    .order-quantity {
        font-weight: bold;
        font-size: 30px;
        text-decoration: none;
        color: black;
    }

    .order-box {
        float: left;
        height: 150px;
        padding-top: 35px;
        /*position: relative;*/
        width: 10%;
    }

    .order-state {
        margin-top: 15px;
    }









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