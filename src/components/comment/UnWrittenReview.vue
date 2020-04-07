<template>
    <div>
        <p>- 구매하신 상품의 상품평을 등록하실 수 있습니다. 판매가 종료된 상품은 목록에서 보이지 않습니다.</p>
        <p>- 상품평을 작성하시면 L.POINT를 적립하여 드립니다.</p>
        <div class='unwritten-summary'>
            <p id='unwritten-count'>미작성 상품평 <strong>{{getCount}}</strong>건</p>
        </div>
        <div class='unwritten-list'>
            <p id='no-unwritten' v-if='getCount == 0'>작성하실 상품평이 없습니다.</p>
            <sui-loader active centered inline v-else-if="getCount == ''"/>
            <div v-else>
                <sui-item-group divided>
                    <sui-item class='unwritten-item' v-for='(unwritten, index) in getInfoList.goodsInfo' :key='index'>
                    <sui-item-image size="tiny" :src='unwritten.imgUrl'/>
                    <sui-item-content class='unwritten'>
                        <sui-item-header>{{unwritten.seller}}</sui-item-header>
                        <sui-item-meta>
                            <p class="itemName">{{unwritten.title}}</p>
                            <p class="option">{{getInfoList.orderInfo[index].selectedOptions}}</p>
                        </sui-item-meta>
                        <br>
                        <sui-item-description>
                            <span class='purchase-date'>구매일자: {{getInfoList.orderInfo[index].orderDate}}</span>
                            <span class='due-date'>작성기한: {{getInfoList.duedate[index]}}</span>
                            <sui-button v-if='getInfoList.duedate[index]>today' @click='openReviewModal(getInfoList.orderInfo[index], unwritten)' size="tiny" floated="right" basic content="상품평 작성" style="margin-right: 2%;"/>
                            <sui-button v-else size="tiny" floated="right" disabled basic content="기한 만료" style="margin-right: 2%;"/>
                        
                        <!--모달모달-->
                        <sui-modal v-model="open">
                            <sui-modal-content scrolling image>
                                <ReviewForm :orderInfo='order' :goodsInfo='goods' :currentReview='currentReview'/>
                            </sui-modal-content>

                            <sui-modal-actions>
                                <sui-button basic @click="cancelAddComment()">취소</sui-button>
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
import {getCurrentUserInfo} from '../../api/UserApi.js'
    export default {
        name: "UnwrittenReview",
        data(){
            return{
                open: false,
                currentReview :{
                    orderId:'',
                    goodsCode:'',
                    userId:'',
                    selectedOptions:'',
                    myPhoto:'',
                    myPhoto2:'',
                    myPhoto3:'',
                    quantity:0,
                    recommendCount:0,
                    deliveryValue:0,
                    designValue:0,
                    sizeValue:0,
                    starPoint:0,
                    reviewContent:'',
                    writtenDate:'',
                },
                order:{},
                goods:{},
                today:'',
                user:{},
            }
        },
        methods:{
            openReviewModal(selectedReview, goods){
                this.goods = goods;
                this.order = selectedReview;
                this.open = true;

                this.currentReview.orderId = selectedReview.orderId;
                this.currentReview.goodsCode = selectedReview.goodsId;
                this.currentReview.userId = selectedReview.userId;
                this.currentReview.quantity = selectedReview.goodsCount;
                this.currentReview.selectedOptions = selectedReview.selectedOptions;
            },
            setReview(){
                if(confirm("상품평을 작성하시겠습니까?")) {

                    alert("작성되었습니다.");
                    
                    this.$store.dispatch('ADD_COMMENT', this.user.email);

                    this.open = false;
                   
                }
            },
            cancelAddComment(){
                this.open = false;
                this.currentReview ={
                    orderId:'',
                    goodsCode:'',
                    userId:'',
                    selectedOptions:'',
                    myPhoto:'',
                    myPhoto2:'',
                    myPhoto3:'',
                    quantity:0,
                    recommendCount:0,
                    deliveryValue:0,
                    designValue:0,
                    sizeValue:0,
                    starPoint:0,
                    reviewContent:'',
                    writtenDate:'',
                };
            },
        },
        components:{
            ReviewForm,
        },
        async created(){
            this.user = await getCurrentUserInfo();

            this.today = new Date().toISOString().slice(0,10);
            await this.$store.commit('loadUnwrittenList', this.user.email);
        },
        computed:{
            getInfoList(){
                return this.$store.state.commentStore.unwritten;
            },

            getCount(){
                return this.$store.state.commentStore.unwritten.unWrittenCount;
            },
        },
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
        height: 500px;
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
