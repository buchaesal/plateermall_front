<template>
    <div class='inner'>
        <div class='total'>
            <p class='count'>
                총 <span>10</span> 개 고객 평점
            </p>
            
            <div>
                <sui-rating id="starAvg" :rating="value" :max-rating="5" />
            </div>
        </div>
    
        <div class='ranking'>
            <p class='menu'><strong>배송</strong></p>
            <div class='ranking-delivery'>
                    <sui-progress size="tiny" progress label="적당해요" percent="63" />
                    <sui-progress size="tiny" progress label="생각보다 빨라요" percent="0" />
                    <sui-progress size="tiny" progress label="생각보다 느려요" percent="0" />
            </div> 
            <p class='menu'><strong>디자인</strong></p>
            <div class='ranking-design'>
                <sui-progress size="tiny" progress label="적당해요" percent="20" />
                <sui-progress size="tiny" progress label="생각보다 예뻐요" percent="50" />
                <sui-progress size="tiny" progress label="생각보다 별로에요" percent="0" />
            </div>
            <p class='menu'><strong>사이즈</strong></p>
            <div class='ranking-size'>
                <sui-progress size="tiny" progress label="적당해요" percent="20" />
                <sui-progress size="tiny" progress label="생각보다 커요" percent="50" />
                <sui-progress size="tiny" progress label="생각보다 작아요" percent="0" />
            </div>
        </div>
    </div>
    
</template>

<script>

    export default {
        name: "Rating",
        data(){
            return{
               value: 1,
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
    .total{
        width: 30%;
        display: inline-block;
        float: left;
    }

    .ranking{
        width: 30%;
        display: inline-block;
        float: left;
    }

    .count{
        padding-top: 20%;
        padding-right: 5%;
        font-size: 20px;
    }

    #starAvg{
        font-size: 20px;
    }

    .menu{
        text-align: left;
    }
</style>