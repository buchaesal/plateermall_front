<template>
    <div class="prod_cont">
        <sui-item-group divided>
            <sui-item class='order-item' v-for='(cart, index) in orderData.selectedGoods' :key='index'>
                <sui-item-image size="small" :src='cart.imgUrl'/>
                    <sui-item-content class='order'>
                        <sui-item-header>{{cart.seller}}</sui-item-header>
                        <sui-item-meta>                            
                        <p class="itemName">{{cart.title}}</p>
                        <p class="option">{{cart.text}} / 수량: {{cart.quantity}}개</p>
                    </sui-item-meta>
                    <br>
                    <sui-item-description>
                        <span class="original-price">{{cart.originalPrice.toLocaleString()}}원</span>
                        <span class="price" style="font-size: 18px;">{{cart.benefitPrice.toLocaleString()}} 원</span>
                    </sui-item-description>
                </sui-item-content>
            </sui-item>
        </sui-item-group>
    </div>
</template>

<script>
 
    export default {
        name: "Order",
        components: {

        },
        data() {
            return {
                orderData:{},
                priceInfo:{
                    allPrice:0,
                    shippingPrice:0,
                    discountPrice:0,
                    
                },
            }
        },
        methods: {
        },
        async created(){
            this.orderData = this.$route.params.orderData;

            let shippingMap = new Map();
            let goodsInfo = [];

            for(let index in this.orderData.selectedGoods){
                this.priceInfo.allPrice += this.orderData.selectedGoods[index].originalPrice*this.orderData.selectedGoods[index].quantity;
                this.priceInfo.discountPrice += (this.orderData.selectedGoods[index].originalPrice - this.orderData.selectedGoods[index].benefitPrice)*this.orderData.selectedGoods[index].quantity;
                shippingMap.set(this.orderData.selectedGoods[index].goodsCode, this.orderData.selectedGoods[index].shippingFee);
            
                goodsInfo.push({
                    goodsId: this.orderData.selectedGoods[index].goodsCode,
                    selectedOptions: this.orderData.selectedGoods[index].text,
                    goodsCount: this.orderData.selectedGoods[index].quantity,
                    orderPrice: this.orderData.selectedGoods[index].benefitPrice,
                    originalPrice: this.orderData.selectedGoods[index].originalPrice,
                    shippingFee: this.orderData.selectedGoods[index].shippingFee,
                })
            }

            for(let [key, value] of shippingMap){
                
                this.priceInfo.shippingPrice += value;
                shippingMap.delete(key);
            }

            this.$store.commit('loadOriginalPrice', this.priceInfo);
            this.$store.commit('loadGoodsInfo', goodsInfo);
            

        },

    }
</script>

<style scoped>
    .title{
        padding: 5% 5% 0% 5%;
    }

    h2{
        padding-bottom: 2%;
        border-bottom: 3px solid;
    }

    .sub-title{
        padding: 1% 5% 1% 5%;
    }

    h3{
        padding-bottom: 1%;
        border-bottom: 1px solid #D9D9D9;
    }

    .prod_cont{
        padding: 2% 5% 2% 5%;
    }

    .original-price{
        text-decoration: line-through;
        font-size:15px;
        color:gray;
        margin-right: 2%;
    }
</style>
