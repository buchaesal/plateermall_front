<template>
    <div class="order-info">
        <div class="title">
            <h3>결제정보</h3>        
        </div>

        <div class="info">
            <p>상품금액</p>
            <p>배송비</p>
            <p style="border-bottom: 1px solid #D9D9D9; margin-bottom: 3%;">할인금액</p>
            <p style="padding-top: 5%;">총 결제금액</p>
            <p style="font-size: 12px; float: right; color: blue;">적립 예정 포인트</p>
        </div>

        <div class="button">
            <sui-button secondary size="big">주문하기</sui-button>
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
            
        },
        async created(){
            
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

    .info p{
        padding-bottom: 5%;
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