<template>
    <div id='my-review'>
        <p>- 작성하신 상품평 내역을 조회하실 수 있습니다. 판매가 종료된 상품은 목록에서 보이지 않습니다.

        <div class='summary'>
            <p id='my-review-count'>작성한 상품평 <strong>{{getWrittenCount}}</strong>건</p>
        </div>

    <div class='my-review-list'>
        <p id='no-review' v-if='getWrittenCount == 0'>작성한 상품평이 없습니다.</p>
        <sui-loader active centered inline v-else-if="getWrittenCount == ''"/>
        <div v-else style="min-height: 500px">
            <sui-item-group divided>
                <sui-item class='review-item' v-for='(goods, index) in getWrittenInfo.goodsInfo' :key='index'>
                    <sui-item-image size="tiny" :src='goods.imgUrl'/>
                    <sui-item-content class='review'>
                        <sui-item-header>{{goods.seller}}</sui-item-header>
                        <sui-item-meta>
                            <p class="itemName">{{goods.title}}</p>
                            <p class="option">{{getWrittenInfo.orderInfo[index].selectedOptions}}</p>
                        </sui-item-meta>
                        <sui-item-description>
                            <p>{{getWrittenInfo.reviewList[index].reviewContent}}</p>
                            <sui-form-field>
                                <sui-accordion>
                                    <a is="sui-accordion-title" style="float:right; padding-right: 5%;">
                                        <sui-icon name="dropdown"/>
                                        상세보기
                                    </a>
                                    
                                    <sui-accordion-content>
                                        <ReviewDetail :userId='user.email' :review='getWrittenInfo.reviewList[index]' :orderInfo='getWrittenInfo.orderInfo[index]' :goodsInfo='goods'/>
                                    </sui-accordion-content>
                                </sui-accordion>
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

import ReviewDetail from './ReviewDetail.vue';
import {getCurrentUserInfo} from '../../api/UserApi.js'

    export default {
        name: "MyReviewList",
        data() {
            return {
                user:{},
                myReviews:[],
                goodsList:[],
                orderList:[],
                currentReview:{},
                review:{},
                cancelCount:0,
                copyReview:{},
            }
        },
        async created() {
            this.user = await getCurrentUserInfo();
            this.$store.commit('loadMyCommentsByUserId', this.user.email);
        },
        computed: {
            getWrittenInfo(){
                return this.$store.state.commentStore.written;
            },
            getWrittenCount(){
                return this.$store.state.commentStore.written.writtenCount;
            },
        },
        methods: {
            
        },
        components:{

            ReviewDetail,
        },
    }
</script>

<style scoped>

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


</style>
