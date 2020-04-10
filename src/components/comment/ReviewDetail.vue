<template>

    <div class="review-detail">
        <sui-item-group divided>
            <sui-item>
                <sui-item-content>
                    <sui-item-header>{{review.starPoint}}<sui-rating id="starAvg" :rating="review.starPoint" :max-rating="5" /></sui-item-header>
                    <sui-item-meta>
                        <img class='detail-image' v-if="review.myPhoto != ''" style="margin-right: 3%;" :src="review.myPhoto" width='99' height='99'>
                        <img class='detail-image' v-if="review.myPhoto == ''" style="margin-right: 3%;" :src="require('../../assets/frame.png')" width='99' height='99'>              
                    </sui-item-meta>

                     <sui-item-description>
                        <span>배송:<span v-if="review.deliveryValue==1">적당해요</span><span v-if="review.deliveryValue==2">생각보다 빨라요</span><span v-if="review.deliveryValue==3">생각보다 느려요</span></span>
                        <span style="margin-left: 3%;">디자인:<span v-if="review.designValue==1">적당해요</span><span v-if="review.designValue==2">생각보다 예뻐요</span><span v-if="review.designValue==3">생각보다 별로에요</span></span>
                        <span style="margin-left: 3%;">사이즈:<span v-if="review.sizeValue==1">적당해요</span><span v-if="review.sizeValue==2">생각보다 커요</span><span v-if="review.sizeValue==3">생각보다 작아요</span></span>
                        <p style="margin-top: 1%;">{{review.reviewContent}}</p>
                    </sui-item-description>

                    <sui-button @click='openReviewModal(review)' class="modify-button" size="tiny">수정</sui-button>
                    <sui-button @click='deleteReview(review.orderId)' class="delete-button" size="tiny">삭제</sui-button>

                    <sui-modal v-model="open">
                        <sui-modal-content scrolling image>
                            <ReviewForm :orderInfo='orderInfo' :goodsInfo='goodsInfo' :currentReview='copyReview'/>
                        </sui-modal-content>

                        <sui-modal-actions>
                            <sui-button basic @click="cancelAddComment()">취소</sui-button>
                            <sui-button @click='setReview()' color="black">작성완료</sui-button>
                        </sui-modal-actions>
                    </sui-modal>
                </sui-item-content>
            </sui-item>
        </sui-item-group>
    </div>
                                    
</template>

<script>
import ReviewForm from './ReviewForm.vue';

    export default {
        name: "ReviewDetail",
        props:['review', 'orderInfo', 'goodsInfo', 'userId'],
        data() {
            return {
                open: false,
                copyReview:{},
            }
        },
        methods:{
            openReviewModal(review){

                this.open = true;
                this.copyReview = JSON.parse (JSON.stringify(review)); //리뷰 복사
            },
            setReview(){

                if(confirm("해당 상품평을 수정하시겠습니까?")) {
                    this.$store.dispatch('UPDATE_COMMENT', this.userId);

                    alert("수정되었습니다.");
                    this.open = false;
                }
            },
            async deleteReview(orderId){
                let info = {
                    orderId: orderId,
                    userId: this.userId,
                }

                if(confirm("해당 상품평을 삭제하시겠습니까?")) {

                    this.$store.dispatch('DELETE_COMMENT', info);
                    alert("삭제되었습니다.");

                    this.cancelCount -= 1;
                    this.myReviews = this.$store.state.commentStore.myReviews;
                }
            },
            async cancelAddComment(){
                await this.$store.commit('updateComment', this.review);
                this.open = false;
            },
        },
        components:{
            ReviewForm,
        }

    }
</script>

<style scoped>
.review-detail {
        background-color: #fafafa;
        width: 95%;
        padding: 2%;
        float: left;
    }

    .detail-image{
        float: left;
    }

    .modify-button{
        margin-top: 4%;
        float: right;
    }

    .delete-button{
        margin-top: 4%;
        float: right;
    }

    span{
        font-weight: bold;
    }
</style>
