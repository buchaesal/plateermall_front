<template>
    <div class='total-review'>
    
        <div class='ranking'>
            <p class='menu'><strong>배송</strong></p>
            <div class='ranking-delivery'>
                    <sui-progress size="tiny" progress label="적당해요" :percent="getRequestComments.deliveryCommon" />
                    <sui-progress size="tiny" progress label="생각보다 빨라요" :percent='getRequestComments.deliveryBest' />
                    <sui-progress size="tiny" progress label="생각보다 느려요" :percent='getRequestComments.deliveryWorst' />
            </div> 
            <p class='menu'><strong>디자인</strong></p>
            <div class='ranking-design'>
                <sui-progress size="tiny" progress label="적당해요" :percent='getRequestComments.designCommon' />
                <sui-progress size="tiny" progress label="생각보다 예뻐요" :percent='getRequestComments.designBest' />
                <sui-progress size="tiny" progress label="생각보다 별로에요" :percent='getRequestComments.designWorst' />
            </div>
            <p class='menu'><strong>사이즈</strong></p>
            <div class='ranking-size'>
                <sui-progress size="tiny" progress label="적당해요" :percent='getRequestComments.sizeCommon' />
                <sui-progress size="tiny" progress label="생각보다 커요" :percent='getRequestComments.sizeBest' />
                <sui-progress size="tiny" progress label="생각보다 작아요" :percent='getRequestComments.sizeWorst' />
            </div>
        </div>
    </div>
    
</template>

<script>

    export default {
        name: "Rating",
        data(){
            return{
               
            }
        },
        methods: {
            handleClick(){  
                this.clicked = true;
            },
        },
        computed: {
            getRequestComments(){
                return this.$store.state.commentStore.reviewInfo;
            }
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