<template>
    <div class="payment-info">
        <span style="margin-right: 10%;">카드선택</span>
        <sui-dropdown style="margin-right: 3%;" text="선택해주세요" selection :options="cardOptions" v-model="currentCard"/>
        <br><br>
        <span style="margin-right: 10%;">할부선택</span>
        <sui-dropdown  style="margin-right: 3%;" text="선택해주세요" selection :options="installment" v-model="currentInstallment"/>
    </div>
    
</template>

<script>
    

    export default {
        name: "OrderPayment",
        components: {
           
        },
        data() {
            return {
                orderData:{},
                price:0,
                discountPrice:0,
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
                        text: 'KB국민카드',
                        value: 'KB국민카드',
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
        async created(){
            
            this.orderData = this.$route.params.orderData;
            console.log(this.orderData);
        },
        watch:{
            currentCard:function(){
                
                let copy = {
                    discountName: 'copy',
                    price: this.discountPrice*(-1),
                }
                this.$store.commit('changeDiscountPrice', copy);
                this.discountPrice = 0;
                this.price = 0;
                
                let usePromotion={
                    uuid:'',
                    promotionId:'',
                    card:'',
                    maximum:0,
                    minimum:0,
                    percentage:0,
                };

                for(let goodsIndex in this.orderData.selectedGoods){

                    let goods = this.orderData.selectedGoods[goodsIndex];
                    for(let promotionIndex in goods.cardPromotions){
                        if(goods.cardPromotions[promotionIndex].card == this.currentCard){
                            usePromotion = goods.cardPromotions[promotionIndex];
                            this.price += goods.benefitPrice;
                        }
                    }
                }

                if(usePromotion.uuid != ''){
                    if(this.price < usePromotion.maximum){
                        alert(usePromotion.maximum + '원 이상 구매하셔야 할인이 적용됩니다.');
                    }else{

                        
                        this.discountPrice = this.price * usePromotion.percentage / 100;

                        if(this.discountPrice > usePromotion.minimum) this.discountPrice = usePromotion.minimum;

                        let info = {
                            discountName: '카드 할인',
                            price: this.discountPrice,
                        }

                        this.$store.commit('changeDiscountPrice', info);
                    }
                }

                let cardInfo={
                    cardName: this.currentCard,
                    installments: this.currentInstallment,
                }

                this.$store.commit('loadCardInfo', cardInfo);
            },
            currentInstallment: function(){
                let cardInfo={
                    cardName: this.currentCard,
                    installments: this.currentInstallment,
                }

                this.$store.commit('loadCardInfo', cardInfo);
            }
        },
    }
</script>

<style scoped>

    
</style>
