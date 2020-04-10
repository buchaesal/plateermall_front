<template>
    <div class="order-info">
        <div class="title">
            <h3>결제정보</h3>        
        </div>

        <div class="info" style="border-bottom: 1px solid #D9D9D9;">
            <p style="float: left; margin-left: 5%;">상품금액</p><p style="font-size: 20px; margin-left: 70%;">{{getAllPrice.originalPrice.toLocaleString()}} 원</p>
            <p style="float: left; margin-left: 5%;">배송비</p><p style="font-size: 20px; margin-left: 70%;">+ {{getAllPrice.shippingPrice.toLocaleString()}} 원</p>
            <p style="float: left; margin-left: 5%; margin-bottom: 3%;">할인금액</p><p style="font-size: 20px; margin-left: 70%;">- {{getDiscountPrice.toLocaleString()}} 원</p>
        </div>
        <div class="info">
            <p style="float: left; margin-left: 5%; font-size: 15px;">총 결제금액</p><p style="font-size: 20px; margin-left: 70%;">{{getAllPrice.paymentPrice.toLocaleString()}} 원</p>
            <p style="font-size: 12px; color: blue; float: right;">적립 예정 포인트: {{getAllPrice.savePoint.toLocaleString()}} 점</p>
        </div>

        <div class="button">
            <sui-button @click="requestOrder" secondary size="big">주문하기</sui-button>
        </div>
    </div>
</template>

<script>
    

    export default {
        name: "OrderInfo",
        components: {

        },
        data() {
            return {
                
            }
        },
        methods: {
            requestOrder(){
                if(this.getCheckedValue == false){
                    alert("주문 동의를 확인해주세요.");
                }else{
                    alert("주문넣자!");
                    this.$store.dispatch('ADD_ORDER');
                }
            }
        },
        async created(){
            
        },
        computed: {
            getAllPrice(){
                return this.$store.state.orderDetailStore.priceInfo;
            },
            getDiscountPrice(){
                return this.$store.state.orderDetailStore.priceInfo.discountPrice;
            },
            getCheckedValue(){
                return this.$store.state.orderDetailStore.isChecked;
            }
        },

    }
</script>

<style scoped>
    .order-info{
        padding: 1%;
        margin-left: 67%;
        margin-right: 10%;
        margin-top: 6.5%;
        width: 30%;
        border-top: 3px solid;
        border-left: 1px solid #D9D9D9;
        border-right: 1px solid #D9D9D9;
        border-bottom: 3px solid;
        position: fixed;
    }

    .info{
        padding: 7% 0% 1% 0%;
    }

    h3{
        padding-top: 3%;
        padding-bottom: 3%;
        border-bottom: 1px solid #D9D9D9;
    }

    .button{
        padding: 5% 3% 5% 0%;
        width: 80%;

    }
</style>
