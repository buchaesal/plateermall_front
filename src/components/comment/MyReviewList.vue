<template>
    <div id='my-review'>
        <p>- 작성하신 상품평 내역을 조회하실 수 있습니다. 판매가 종료된 상품은 목록에서 보이지 않습니다.

            <div class='summary'>
        <p id='my-review-count'>작성한 상품평 <strong>{{myReviews.length}}</strong>건</p>
    </div>

    <div class='my-review-list'>
        <p id='no-review' v-if='myReviews.length == 0'>작성한 상품평이 없습니다.</p>

        <div v-else style="min-height: 500px">
            <sui-item-group divided>
                <sui-item class='review-item' v-for='(review, index) in myReviews' :key='index'>
                    <sui-item-image size="tiny" :src='photo'/>
                    <sui-item-content class='review'>
                        <sui-item-header>{{goodsList[index].seller}}</sui-item-header>
                        <sui-item-meta>
                            <p class="itemName">{{goodsList[index].title}}</p>
                            <p class="option">{{orderList[index].selectedOptions}}</p>
                        </sui-item-meta>
                        <sui-item-description>
                            <p>{{review.reviewContent}}</p>
                            {{review.selectedOptions}}
                            <sui-form-field>
                                <sui-accordion>
                                    <a is="sui-accordion-title" style="float:right; padding-right: 5%;">
                                        <sui-icon name="dropdown"/>
                                        상세보기
                                    </a>
                                   
                                    <sui-accordion-content>
                                        <div class="review-detail">
                                            <sui-item-group divided>
                                                <sui-item>
                                                <sui-item-content>
                                                <sui-item-header>{{review.starPoint}}<sui-rating id="starAvg" :rating="review.starPoint" :max-rating="5" /></sui-item-header>
                                                <sui-item-meta>
                                                    <img class='detail-image' style="margin-right: 3%;" :src='photo' width='99' height='99'>    
                                                </sui-item-meta>
                                                    
                                                <sui-item-description>
                                                <span>배송:<span v-if="review.deliveryValue==1">적당해요</span><span v-if="review.deliveryValue==2">생각보다 빨라요</span><span v-if="review.deliveryValue==3">생각보다 느려요</span></span>
                                                    <span style="margin-left: 3%;">디자인:<span v-if="review.designValue==1">적당해요</span><span v-if="review.designValue==2">생각보다 예뻐요</span><span v-if="review.designValue==3">생각보다 별로에요</span></span>
                                                    <span style="margin-left: 3%;">사이즈:<span v-if="review.sizeValue==1">적당해요</span><span v-if="review.sizeValue==2">생각보다 커요</span><span v-if="review.sizeValue==3">생각보다 작아요</span></span>
                                                    <p style="margin-top: 1%;">{{review.reviewContent}}</p>
                                                </sui-item-description>

                                                    <sui-button @click='openReviewModal(review)' class="modify-button" size="tiny">수정</sui-button>
                                                    <sui-button @click='deleteReview(review.orderId)' class="delete-button" size="tiny">삭제</sui-button>

                                                    
                                                </sui-item-content>
                                                </sui-item>
                                            </sui-item-group>
                                        </div>
                                    </sui-accordion-content>
                                </sui-accordion>
                                            <!--모달모달-->
                                <sui-modal v-model="open">
                                    <sui-modal-content scrolling image>
                                        <ReviewForm :orderInfo='orderList[index]' :goodsInfo='goodsList[index]' :currentReview='currentReview'/>
                                    </sui-modal-content>

                                    <sui-modal-actions>
                                        <sui-button basic @click="closeReviewModal()">취소</sui-button>
                                        <sui-button @click='setReview()' color="black">작성완료</sui-button>
                                    </sui-modal-actions>
                                </sui-modal>    
                                                    <!--모달 끝-->
                            </sui-form-field>

                        </sui-item-description>
                    </sui-item-content>
                </sui-item>
            </sui-item-group>
        </div>

    </div>
    </div>
</template>

<script>
import ReviewForm from './ReviewForm.vue';
import {requestMyComments, deleteComment} from '../../api/CommentApi';
import {getOrder} from '../../api/OrderApi';
import GoodsApi from '../../api/GoodsApi';

    export default {
        name: "Sample",
        data() {
            return {
                open: false,
                myReviews:[],
                goodsList:[],
                orderList:[],
                currentReview:{},
                selectedReview:{},
                photo: require('../../assets/review.jpg'),
                review:{},
            }
        },
        created() {
            this.setWrittenInfo("testId");
        },
        computed: {

        },
        methods: {

            openReviewModal(review){
                
                this.open = true;
                this.$store.commit('toggleModalOpen');
                this.currentReview = review;
                this.selectedReview = review;
            },
            closeReviewModal(){
                this.open = false;
                this.$store.commit('toggleModalOpen');

            },
            setReview(){
                this.$store.commit('modifyCommentValue');
                this.closeReviewModal();
            },

            async setWrittenInfo(userId){
                this.myReviews = await requestMyComments(userId);

                console.log("----------------------");
                console.log(this.myReviews);

                for(let index in this.myReviews){
                     this.orderList.push(await getOrder(this.myReviews[index].orderId));
                }

                console.log("---------------------");
                console.log(this.orderList.goodsId);

                for(let index in this.myReviews){
                    
                    let goodsApi = new GoodsApi();
                    this.goodsList.push(await goodsApi.getGoods(this.myReviews[index].goodsCode));
                }
            },
            async deleteReview(orderId){

                if(confirm("해당 상품평을 삭제하시겠습니까?")) {
                    await deleteComment(orderId);
                    alert("삭제되었습니다.")                    
                    this.$router.push("/myreview");
                }
            }
        },
        components:{
            ReviewForm,
        },
    }
</script>

<style scoped>
    #my-review {
        padding: 2%;
    }

    #my-review > p {
        margin-bottom: 5%;
        text-align: left;
    }

    .summary {
        background-color: #fafafa;
        margin-bottom: 5%;
    }

    #my-review-count {
        padding: 1%;
    }

    #no-review {
        padding: 3%;
        text-align: center;

    }

    .my-review-list {
        height: 300px;
        overflow: auto;
    }

    .review {
        text-align: left;
    }

    .review-item {
        padding: 1%;
        border-bottom: 1px solid #ededed;
    }

    .itemName {
        font-size: 13px;
    }

    .option {
        font-size: 13px;
    }

    #detail {
        display: none;
    }

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
