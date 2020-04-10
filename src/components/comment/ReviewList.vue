<template>
    <div>
        <ReviewOption/>

        <div v-if='getRequestCount != 0' class='review-list'>
            <sui-item-group divided>
                <sui-item v-for='(review, index) in getRequestComments' :key='index'>
                    <sui-item-content>
                    <sui-item-header><sui-rating id="starAvg" :rating="review.starPoint" :max-rating="5" /><span style="font-size: 15px; ">{{review.selectedOptions}}</span></sui-item-header>
                                        
                    <sui-item-meta>
                        <p>{{review.reviewContent}}</p>
                        <img v-if="review.myPhoto != ''" :src='review.myPhoto' width='99' height='99'>
                        <sui-accordion v-if="review.myPhoto != ''">
                            <a is="sui-accordion-title" style="padding-right: 5%;"><sui-icon name="dropdown"/>더보기</a>
                            <sui-accordion-content>
                                <img v-if="review.myPhoto != ''" :src="review.myPhoto" style="width: 300px; height: 300px; margin-right: 5%;">
                                <img v-if="review.myPhoto2 != ''" :src="review.myPhoto2" style="width: 300px; height: 300px; margin-right: 5%;">
                                <img v-if="review.myPhoto3 != ''" :src="review.myPhoto3" style="width: 300px; height: 300px;">
                            </sui-accordion-content>
                        </sui-accordion>
                        <br>
                        <p>{{review.userId}} | {{review.writtenDate}}</p>

                        <span class='report-review'><sui-button @click="recommendComment(index)" size="tiny"  icon="thumbs up outline" floated="right" basic>추천하기{{review.recommendCount}}</sui-button></span>
                    </sui-item-meta>
                <sui-item-description>
            </sui-item-description>
      </sui-item-content>
    </sui-item>
    
    </sui-item-group>
    </div>

        <div v-else class="review-info" >
            <sui-icon name="info" size="huge" circular color="grey" style='margin-bottom: 3%;'/>
            <p>현재 등록된 상품평이 없습니다.</p>
            <p>상품평을 작성하시면 P.POINT를 드립니다.(e쿠폰상품 제외)</p>
            <p>※ P.POINT 는 P.POINT 통합회원에 한해 지급가능합니다. (간편회원 적립 불가)</p>
        </div>
    </div>


</template>

<script>
import {getCurrentUserInfo} from '../../api/UserApi.js'
import ReviewOption from './ReviewOption.vue'

    export default {
        name: "ReviewList",
        data(){
            return{
                info:{
                    orderId:'',
                    email:'',
                    index:0,
                    reviewCount:0,
                },
                goodsCode:'',
            }
        },
        components:{
            ReviewOption,
        },
        computed: {
            getRequestComments(){
                return this.$store.state.commentStore.reviews.commentList;
            },    
            getRequestCount(){
                return this.$store.state.commentStore.reviewCount;
            } 
        },
        methods:{
            async recommendComment(index){
                let user = await getCurrentUserInfo();

                if(user == null){
                    alert('로그인 후에 추천할 수 있습니다.');
                }else{
                    this.info.email = user.email;
                    this.info.index = index;
                    this.$store.dispatch('RECOMMEND_COMMENT', this.info);                    
                }
            },
        },
        created(){
            //this.reviewCount = this.$store.state.commentStore.reviews.commentList.length;
        }
    }
</script>

<style scoped>

    .review-list{
        text-align: left;
        padding-top: 3%;
        padding-left: 5%;
        margin-bottom: 5%;
    }

    .review-info{
        text-align: center;
        margin-top: 5%;
        margin-bottom: 5%;
    }
</style>
