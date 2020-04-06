<template>
    <div class="order-page">
        <Header/>
        <div class="title">
            <h2>주문결제</h2>        
        </div>

        <div class="sub-title">
            <h3>주문상품</h3>        
        </div>

        <Footer/>
    </div>
</template>

<script>
    import Header from "../../share/Header";
    import Footer from "../../share/Footer";
    import GoodsApi from "../../../api/GoodsApi";
    export default {
        name: "OrderPage",
        components: {
            Header,
            Footer,
        },
        data() {
            return {
                goods:{},
                orderData:{},
            }
        },
        methods: {
        },
        async created(){
            this.orderData = this.$route.params.orderData;

            let goodsApi = new GoodsApi();
            this.goods = await goodsApi.getGoods(this.orderData.goodsCode);
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
</style>