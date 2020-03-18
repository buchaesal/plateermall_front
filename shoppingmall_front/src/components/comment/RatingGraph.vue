<template>
    <div class='total-review'>
    
        <div class='ranking'>
            <p class='menu'><strong>배송</strong></p>
            <div class='ranking-delivery'>
                    <sui-progress size="tiny" progress label="적당해요" :percent="averageGrade.deliveryCommon" />
                    <sui-progress size="tiny" progress label="생각보다 빨라요" :percent='averageGrade.deliveryBest' />
                    <sui-progress size="tiny" progress label="생각보다 느려요" :percent='averageGrade.deliveryWorst' />
            </div> 
            <p class='menu'><strong>디자인</strong></p>
            <div class='ranking-design'>
                <sui-progress size="tiny" progress label="적당해요" :percent='averageGrade.designCommon' />
                <sui-progress size="tiny" progress label="생각보다 예뻐요" :percent='averageGrade.designBest' />
                <sui-progress size="tiny" progress label="생각보다 별로에요" :percent='averageGrade.designWorst' />
            </div>
            <p class='menu'><strong>사이즈</strong></p>
            <div class='ranking-size'>
                <sui-progress size="tiny" progress label="적당해요" :percent='averageGrade.sizeCommon' />
                <sui-progress size="tiny" progress label="생각보다 커요" :percent='averageGrade.sizeBest' />
                <sui-progress size="tiny" progress label="생각보다 작아요" :percent='averageGrade.sizeWorst' />
            </div>
        </div>
    </div>
    
</template>

<script>

    export default {
        name: "Rating",
        data(){
            return{
               averageGrade:{
                    deliveryCommon: 60,
                    deliveryBest: 0,
                    deliveryWorst: 0,
                    designCommon: 20,
                    designBest: 50,
                    designWorst: 0,
                    sizeCommon: 20,
                    sizeBest: 50,
                    sizeWorst: 0
               }
            }
        },
        methods: {
            handleClick(){  
                this.clicked = true;
            },
        },
    }
</script>

<style scoped>
    
    .ranking{
        width: 30%;
        display: inline-block;
        float: left;
    }

    .menu{
        text-align: left;
    }

    .total-review{
        padding-top: 2%;
        margin-left: 20%;
        height: 450px;
    }
</style>