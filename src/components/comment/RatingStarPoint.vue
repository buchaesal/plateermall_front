<template>
    <div class='total-review'>
        <div class='total'>
            <p class='count'>
                총 <span>{{getRequestComments.customerCount}}</span> 개 고객 평점
            </p>
            
            <div>
                <div id="grade">
                    <span class="average-grade"><strong>{{getRequestComments.averageStarPoint}}</strong></span>
                </div>
                <div id="star-average">
                    <span><sui-rating id="starAvg" :rating="getRequestComments.averageStarPoint" :max-rating="5" /></span>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>

    export default {
        name: "RatingStarPoint",
        data(){
            return{
            }
        },
        computed: {
            getRequestComments(){
                return this.$store.state.commentStore.reviews;
            }
        }
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
    
    #grade{
        display: inline-block;
        padding-bottom: 5%;
    }

    #star-average{
        display: inline-block;
    }
</style>