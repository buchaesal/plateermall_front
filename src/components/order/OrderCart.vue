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
                        <span class="price" style="font-size: 18px;">{{cart.benefitPrice}} 원</span>
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
            }
        },
        methods: {
        },
        async created(){
            this.orderData = this.$route.params.orderData;
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
</style>