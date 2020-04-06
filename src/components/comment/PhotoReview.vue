<template>
    <div class="photo-review">
            <h3>포토<br>상품평</h3>
            <div class='review-img' v-for='(review, index) in reviews' :key='index'>
                <img :src='review.myPhoto' width='99' height='99'>
            </div>
    </div>
    
</template>

<script>
import {requestPhotoComments} from '../../api/CommentApi'

    export default {
        name: "PhotoReview",
        data(){
            return{
               goodsCode:'',
               reviews:[],
            }
        },
        async created(){
            this.goodsCode = this.$route.params.goodsCode;
            this.reviews = await requestPhotoComments(this.goodsCode);
        }
    }
</script>

<style scoped>
    .photo-review{
        border-top: 1px solid #ededed;
        border-bottom: 1px solid #ededed;
        margin-left: 2%;
        margin-right: 2%;
        margin-bottom: 3%;
        width: 96%;
        height: 150px;
        background-color: #fafafa;
        overflow-x: auto;
    }

    .review-img{
        float: left;
        display: inline-block;
        padding-top: 2%;
        padding-right: 2%;
    }

    h3{
        padding-top: 2%;
        padding-left: 2%;
        text-align: left;
        float: left;
        width: 160px;
        font-size: 18px;
    }
    
</style>