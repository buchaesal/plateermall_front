<template>
    <div class='total-review'>
    
        <div class='ranking'>
            <p class='menu'><strong>배송</strong></p>
            <div class='ranking-delivery'>
                    <sui-progress size="tiny" progress label="적당해요" :percent="averageGrade.deliveryOption1" />
                    <sui-progress size="tiny" progress label="생각보다 빨라요" :percent='averageGrade.deliveryOption2' />
                    <sui-progress size="tiny" progress label="생각보다 느려요" :percent='averageGrade.deliveryOption3' />
            </div> 
            <p class='menu'><strong>디자인</strong></p>
            <div class='ranking-design'>
                <sui-progress size="tiny" progress label="적당해요" :percent='averageGrade.designOption1' />
                <sui-progress size="tiny" progress label="생각보다 예뻐요" :percent='averageGrade.designOption2' />
                <sui-progress size="tiny" progress label="생각보다 별로에요" :percent='averageGrade.designOption3' />
            </div>
            <p class='menu'><strong>사이즈</strong></p>
            <div class='ranking-size'>
                <sui-progress size="tiny" progress label="적당해요" :percent='averageGrade.sizeOption1' />
                <sui-progress size="tiny" progress label="생각보다 커요" :percent='averageGrade.sizeOption2' />
                <sui-progress size="tiny" progress label="생각보다 작아요" :percent='averageGrade.sizeOption3' />
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
                    deliveryOption1: 60,
                    deliveryOption2: 0,
                    deliveryOption3: 0,
                    designOption1: 20,
                    designOption2: 50,
                    designOption3: 0,
                    sizeOption1: 20,
                    sizeOption2: 50,
                    sizeOption3: 0
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
        height: 450px;
    }
</style>