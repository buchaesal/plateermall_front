<template>
    <div class='total-review'>
        <div class='total'>
            <p class='count'>
                총 <span>{{customerCount}}</span> 개 고객 평점
            </p>
            
            <div>
                <span class="average-grade"><strong>{{starPoint}}</strong><span><sui-rating :interactive="false" id="starAvg" :rating="starPoint" :max-rating="5" /></span></span>
            </div>
        </div>
    </div>
    
</template>

<script>

    export default {
        name: "RatingStarPoint",
        data(){
            return{
                customerCount: 10,
                starPoint: 1,
            }
        },
    }
</script>

<style scoped>
    .total{
        padding-top: 2%;
        padding-left: 3%;

        display: inline-block;
        float: left;
    }

    .count{
        font-size: 15px;
    }

    #starAvg{
        padding-left: 5%;
        font-size: 17px;
    }

    .average-grade{
        font-size: 30px;
    }
    
</style>