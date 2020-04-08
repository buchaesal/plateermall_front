<template>
    <div class="payment-info">
        <span style="margin-right: 10%;">카드선택</span>
        <sui-dropdown  style="margin-right: 3%;" text="선택해주세요" selection :options="cardOptions" v-model="currentCard"/>
        <br><br>
        <span style="margin-right: 10%;">할부선택</span>
        <sui-dropdown  style="margin-right: 3%;" text="일시불" selection :options="installment" v-model="currentInstallment"/>
    </div>
    
</template>

<script>
    

    export default {
        name: "OrderPayment",
        components: {
           
        },
        data() {
            return {
                currentCard: null,
                currentInstallment: null,
                cardOptions: [
                    {
                        text: '비씨카드',
                        value: '비씨카드',
                    },
                    {
                        text: '신한카드',
                        value: '신한카드',
                    },
                    {
                        text: '롯데카드',
                        value: '롯데카드',
                    },
                    {
                        text: '삼성카드',
                        value: '삼성카드',
                    },
                ], 
                installment:[
                    {
                        text: '일시불',
                        value: '일시불',
                    },
                    {
                        text: '2개월(무이자)',
                        value: '2개월(무이자)',
                    },
                    {
                        text: '3개월(무이자)',
                        value: '3개월(무이자)',
                    },
                    {
                        text: '6개월',
                        value: '6개월',
                    },
                ]
            }
        },
        methods: {
            
        },
        async created(){
            
        },

    }
</script>

<style scoped>

    
</style>