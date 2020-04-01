<template>
    <div id='my-review'>
        <p>- 작성하신 상품평 내역을 조회하실 수 있습니다. 판매가 종료된 상품은 목록에서 보이지 않습니다.
        
        <div class='summary'>
            <p id='my-review-count'>작성한 상품평 <strong>{{cancelCount}}</strong>건</p>
        </div>

    <div class='my-review-list'>
        <p id='no-review' v-if='cancelCount == 0'>작성한 상품평이 없습니다.</p>

        <div v-else style="min-height: 800px">
            <sui-item-group divided>
                <sui-item class='review-item' v-for='(review, index) in goodsList' :key='index'>
                    <sui-item-image size="tiny" :src='goodsList[index].imgUrl'/>
                    <sui-item-content class='review'>
                        <sui-item-header>{{goodsList[index].seller}}</sui-item-header>
                        <sui-item-meta>
                            <p class="itemName">{{goodsList[index].title}}</p>
                            <p class="option">{{orderList[index].selectedOptions}}</p>
                        </sui-item-meta>
                        <sui-item-description>
                            <p>{{myReviews[index].reviewContent}}</p>
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
                                                <sui-item-header>{{myReviews[index].starPoint}}<sui-rating id="starAvg" :rating="myReviews[index].starPoint" :max-rating="5" /></sui-item-header>
                                                <sui-item-meta>
                                                    <img class='detail-image' v-if="myReviews[index].myPhoto != ''" style="margin-right: 3%;" :src="myReviews[index].myPhoto" width='99' height='99'>    
                                                    <img class='detail-image' v-if="myReviews[index].myPhoto == ''" style="margin-right: 3%;" :src="require('../../assets/frame.png')" width='99' height='99'>                                                        
                                                </sui-item-meta>
                                                    
                                                <sui-item-description>
                                                <span>배송:<span v-if="myReviews[index].deliveryValue==1">적당해요</span><span v-if="myReviews[index].deliveryValue==2">생각보다 빨라요</span><span v-if="myReviews[index].deliveryValue==3">생각보다 느려요</span></span>
                                                    <span style="margin-left: 3%;">디자인:<span v-if="myReviews[index].designValue==1">적당해요</span><span v-if="myReviews[index].designValue==2">생각보다 예뻐요</span><span v-if="myReviews[index].designValue==3">생각보다 별로에요</span></span>
                                                    <span style="margin-left: 3%;">사이즈:<span v-if="myReviews[index].sizeValue==1">적당해요</span><span v-if="myReviews[index].sizeValue==2">생각보다 커요</span><span v-if="myReviews[index].sizeValue==3">생각보다 작아요</span></span>
                                                    <p style="margin-top: 1%;">{{myReviews[index].reviewContent}}</p>
                                                </sui-item-description>

                                                <sui-button @click='openReviewModal(myReviews[index])' class="modify-button" size="tiny">수정</sui-button>
                                                <sui-button @click='deleteReview(myReviews[index].orderId)' class="delete-button" size="tiny">삭제</sui-button>
    
                                                </sui-item-content>
                                                </sui-item>
                                            </sui-item-group>
                                        </div>
                                    </sui-accordion-content>
                                </sui-accordion>
                                <!--모달모달-->
                                <sui-modal v-model="open">
                                    <sui-modal-content scrolling image>
                                        <ReviewForm :orderInfo='orderList[index]' :goodsInfo='goodsList[index]' :currentReview='copyReview'/>
                                    </sui-modal-content>

                                    <sui-modal-actions>
                                        <sui-button basic @click="cancelAddComment()">취소</sui-button>
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
import {requestMyComments} from '../../api/CommentApi';
import {getOrder} from '../../api/OrderApi';
import GoodsApi from '../../api/GoodsApi';
import {getCurrentUserInfo} from '../../api/UserApi.js'

    export default {
        name: "MyReviewList",
        data() {
            return {
                user:{},
                open: false,
                myReviews:[],
                goodsList:[],
                orderList:[],
                currentReview:{},
                review:{},
                cancelCount:0,
                copyReview:{},
                goodsApi: new GoodsApi(),
            }
        },
        async created() {
            console.log("작성한상품평 created()");
            this.user = await getCurrentUserInfo();
            await this.$store.commit('loadMyCommentsByUserId', this.user.email);
            await this.setWrittenInfo(this.user.email);
            console.log(this.goodsList,'goodsList');
        },
        // computed: {
        //     getReviews(){
 
        //         return this.$store.state.commentStore.myReviews;
        //     }
        // },
        methods: {

            openReviewModal(review){
                
                this.open = true;
                this.$store.commit('toggleModalOpen');
                this.currentReview = review;
                this.copyReview = JSON.parse (JSON.stringify(this.currentReview)); //리뷰 복사
            },
            closeReviewModal(){
                this.open = false;
                this.$store.commit('toggleModalOpen');

            },
            async setReview(){

                if(confirm("해당 상품평을 수정하시겠습니까?")) {
                    this.$store.commit('modifyCommentValue');
                    
                    alert("수정되었습니다.");
                    this.closeReviewModal();
                }
                this.clearValue();
                await this.setWrittenInfo(this.user.email);
            },

            async setWrittenInfo(userId){
                this.myReviews = await requestMyComments(userId);
                this.cancelCount = this.myReviews.length;

                for(let index in this.myReviews){
                     this.orderList.push(await getOrder(this.myReviews[index].orderId));
                }

                for(let index in this.myReviews){
                    this.goodsList.push(await this.goodsApi.getGoods(this.myReviews[index].goodsCode));
                }

                console.log(this.myReviews);
                
            },
            async deleteReview(orderId){
                let info = {
                    orderId: orderId,
                    userId: 'testid',
                }

                if(confirm("해당 상품평을 삭제하시겠습니까?")) {
                    
                    await this.$store.commit('deleteComment', info);
                    alert("삭제되었습니다.");
                    
                    this.cancelCount -= 1;
                    this.myReviews = this.$store.state.commentStore.myReviews;
                }
            },
            async cancelAddComment(){
                await this.$store.commit('updateComment', this.currentReview);
                this.closeReviewModal();
            },
            clearValue(){
                this.myReviews=[],
                this.goodsList=[],
                this.orderList=[]
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
        height: 500px;
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
