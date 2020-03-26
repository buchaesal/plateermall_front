<template>
       <div id='unwritten-review'>
        <p>- 구매하신 상품의 상품평을 등록하실 수 있습니다. 판매가 종료된 상품은 목록에서 보이지 않습니다.</p>
        <p>- 상품평을 작성하시면 L.POINT를 적립하여 드립니다.</p>
        <h6>{{isModalOpen}}</h6>
        <div class='unwritten-summary'>
            <p id='unwritten-count'>미작성 상품평 <strong>{{orderIdList.length}}</strong>건</p>
        </div>
        
        <div class='unwritten-list'>
            <p id='no-unwritten' v-if='orderIdList.length == 0'>작성하실 상품평이 없습니다.</p>

            <div v-else>
                <sui-item-group divided>
                    <sui-item class='unwritten-item' v-for='(unwritten, index) in orderIdList' :key='index'>
                    <sui-item-image size="tiny" :src='goodsList[index].imgUrl'/>
                    <sui-item-content class='unwritten'>
                        <sui-item-header>{{goodsList[index].seller}}</sui-item-header>
                        <sui-item-meta>
                            <p class="itemName">{{goodsList[index].title}}</p>
                            <p class="option">{{unwrittenOrderList[index].selectedOptions}}</p>
                        </sui-item-meta>
                        <br>
                        <sui-item-description>
                            <span class='purchase-date'>구매일자: {{unwrittenOrderList[index].orderDate}}</span>
                            <span class='due-date'>작성기한: {{unwritten.dueDate}}</span>
                            <sui-button @click='openReviewModal(unwrittenOrderList[index])' size="tiny" floated="right" basic content="상품평 작성" />
                        
                        <!--모달모달-->
                        <sui-modal v-model="open">
                            <sui-modal-content scrolling image>
                                <ReviewForm :orderInfo='unwrittenOrderList[index]' :goodsInfo='goodsList[index]' :currentReview='currentReview' @setReview="settingReview"/>
                            </sui-modal-content>

                            <sui-modal-actions>
                                <sui-button basic @click="closeReviewModal()">취소</sui-button>
                                <sui-button @click='setReview()' color="black">작성완료</sui-button>
                            </sui-modal-actions>
                        </sui-modal>    
                        <!--모달 끝-->
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
import {requestUnwrittenOrderId} from '../../api/CommentApi';
import {getOrder} from '../../api/OrderApi';
import GoodsApi from '../../api/GoodsApi';

    export default {
        name: "Sample",
        data(){
            return{
                open: false,
                currentReview:{
                    orderId:'',
                    goodsCode:'',
                    userId:'',
                    selectedOptions:'',
                    myPhoto:'',
                    quantity:0,
                    recommendCount:0,
                    deliveryValue:0,
                    designValue:0,
                    sizeValue:0,
                    starPoint:0,
                    reviewContent:'',
                    writtenDate:'',
                },
                review:{},
                
                orderIdList:[],
                unwrittenOrderList:[],
                goodsList:[],
            }
        },
        methods:{
            openReviewModal(selectedReview){
                
                this.open = true;
                this.$store.commit('toggleModalOpen');

                this.currentReview.orderId = selectedReview.orderId;
                this.currentReview.goodsCode = selectedReview.goodsId;
                this.currentReview.userId = selectedReview.userId;
                this.currentReview.quantity = selectedReview.goodsCount;
                this.currentReview.selectedOptions = selectedReview.selectedOptions;
            },
            closeReviewModal(){
                this.open = false;
                this.$store.commit('toggleModalOpen');

            },
            setReview(){
                alert("setReview");
                this.$store.commit('addCommentValue', this.review);
                this.closeReviewModal();
            },

            settingReview(sendReview){
                alert("settingReview");
                console.log(sendReview);
                this.review = sendReview;
            },

            async setUnwrittenInfo(userId){
                this.orderIdList = await requestUnwrittenOrderId(userId);

                for(let index in this.orderIdList){
                    this.unwrittenOrderList.push(await getOrder(this.orderIdList[index]));
                }

                for(let index in this.unwrittenOrderList){
                    let goodsApi = new GoodsApi();
                    this.goodsList.push(await goodsApi.getGoods(this.unwrittenOrderList[index].goodsId));
                }

                console.log(this.goodsList);
            },
        },
        components:{
            ReviewForm,
        },
        created(){
            this.setUnwrittenInfo('testId');
            //this.$store.commit('loadUnWrittenOrderId', 'testId');
        },
        computed:{
            isModalOpen(){
                return this.$store.state.commentStore.isModalOpen;
            },
        }
    }
</script>

<style scoped>
    h6{
        display: none;
    }

    #unwritten-review{
        padding: 2%;
    }

    #unwritten-review > p{
        text-align: left;
    }

    .unwritten-summary{
        background-color: #fafafa;
        margin-bottom: 5%;
    }

    #unwritten-count{
        padding: 1%;
    }

    #no-unwritten{
        padding: 3%;
        text-align: center;
    }

    .unwritten-list{
        height: 300px;
        overflow: auto;
    }

    .unwritten{
        text-align: left;
    }

    .itemName{
        font-size: 13px;
    }

    .option{
        font-size: 13px;
    }

    .due-date{
        margin-left: 2%;
    }
</style>