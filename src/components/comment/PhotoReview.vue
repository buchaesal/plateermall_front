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
    
    
</style>