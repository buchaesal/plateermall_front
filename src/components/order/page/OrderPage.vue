<template>
    <div class="container" style="margin-top: 185px;">
    <Header/>
    <div class="order-page">
        <div class="title">
            <h2>주문결제</h2>        
        </div>

        <div class="sub-title">
            <h3>주문상품</h3>        
        

            <div class="order">
                <sui-item-group divided>
                    <sui-item class='item'>
                        <sui-item-image size="small" :src='orderData.selectedGoods[0].imgUrl'/>
                            <sui-item-content>
                                <p style="text-align: center; margin-top: 2%; font-size: 15px;">{{orderData.selectedGoods[0].title}} 외 {{orderData.selectedGoods.length-1}}건의 상품을 주문합니다.</p>
                                <p style="text-align: center; font-size: 12px;">선택하신 상품의 상세정보는 주문상품 모두보기를 클릭하시면 확인할 수 있습니다.</p>
                            </sui-item-content>
                    </sui-item>
                </sui-item-group>

                <sui-button @click="showOrder()" fluid content="주문상품 모두보기" style="margin-bottom: 2%;"/>
                <OrderCart v-show="showFlag == true"/>
            </div>
        </div>

        <div class="sub-title">
            <h3>주문고객</h3>
            <OrderUser/>        
        </div>

        <div class="sub-title">
            <h3>배송정보</h3>
            <OrderDelivery/>        
        </div>

        <div class="sub-title">
            <h3>할인/포인트</h3>
            <OrderPoint/>
        </div>

        <div class="sub-title">
            <h3>결제수단</h3>
            <OrderPayment/>
        </div>

        <div class="sub-title">
            <h3>주문동의</h3>
            <sui-checkbox v-model="isChecked" label="주문, 결제 서비스에 동의합니다." />
        </div>
    </div>

        <OrderInfo/>
        <Footer/>
    </div>
    
</template>

<script>
    import Header from "../../share/Header";
    import Footer from "../../share/Footer";
    import OrderCart from "../OrderCart";
    import OrderInfo from "../OrderInfo";
    import OrderUser from "../OrderUser";
    import OrderDelivery from "../OrderDelivery";
    import OrderPoint from "../OrderPoint";
    import OrderPayment from "../OrderPayment";

    export default {
        name: "OrderPage",
        components: {
            Header,
            Footer,
            OrderCart,
            OrderInfo,
            OrderUser,
            OrderDelivery,
            OrderPoint,
            OrderPayment,
        },
        data() {
            return {
                goods:[],
                orderData:{},
                showFlag: false,
                isChecked:false,
            }
        },
        methods: {
            showOrder(){
                if(!this.showFlag) this.showFlag=true;
                else this.showFlag=false;
            }
        },
        async created(){
            this.orderData = this.$route.params.orderData;
        },
        watch:{
            isChecked:function(){
                this.$store.commit('changeCheckedValue', this.isChecked);
            }
        }
    }
</script>

<style scoped>
    .title{
        padding: 5% 5% 0% 7%;
    }

    .sub-title{
        border-top: 3px solid;
        margin: 2% 2% 5% 5%;
    }

    h3{
        margin-top: 2%;
        padding-bottom: 1%;
        border-bottom: 1px solid #D9D9D9;
    }

    .prod_cont{
        padding: 2% 5% 2% 7%;
    }

    .order-page{
        float: left;
        width: 65%;
    }


</style>
