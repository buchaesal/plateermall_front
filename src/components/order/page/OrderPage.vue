<template>
    <div class="order-page">
        <Header/>
        <div class="title">
            <h2>주문결제</h2>        
        </div>

        <div class="sub-title">
            <h3>주문상품</h3>        
        </div>

        <sui-item-group divided>
            <sui-item class='item'>
                <sui-item-image size="small" :src='orderData.selectedGoods[0].imgUrl'/>
                    <sui-item-content >
                        <p>{{orderData.selectedGoods[0].title}}외 {{orderData.selectedGoods.length-1}}건의 상품을 주문합니다.</p>
                        <p>선택하신 상품의 상세정보는 주문상품 모두보기를 클릭하시면 확인할 수 있습니다.</p>
                    </sui-item-content>
            </sui-item>
        </sui-item-group>


        <OrderCart/>
        <Footer/>
    </div>
</template>

<script>
    import Header from "../../share/Header";
    import Footer from "../../share/Footer";
    import OrderCart from "../OrderCart";

    export default {
        name: "OrderPage",
        components: {
            Header,
            Footer,
            OrderCart
        },
        data() {
            return {
                goods:[],
                orderData:{},
            }
        },
        methods: {
        },
        async created(){
            this.orderData = this.$route.params.orderData;

            // let goodsApi = new GoodsApi();

            // for(let index in this.orderData.selectedGoods){
            //     this.goods.push(await goodsApi.getGoods(this.orderData.selectedGoods[index].goodsCode));
            // }
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