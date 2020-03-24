<template>
    <div id='my-review'>
        <p>- 작성하신 상품평 내역을 조회하실 수 있습니다. 판매가 종료된 상품은 목록에서 보이지 않습니다.

            <div class='summary'>
        <p id='my-review-count'>작성한 상품평 <strong>{{getRequestMyReviews.reviewCount}}</strong>건</p>
    </div>

    <div class='my-review-list'>
        <p id='no-review' v-if='getRequestMyReviews.myReviews == 0'>작성한 상품평이 없습니다.</p>

        <div v-else style="min-height: 500px">
            <sui-item-group divided>
                <sui-item class='review-item' v-for='(review, index) in getRequestMyReviews.myReviews' :key='index'>
                    <sui-item-image size="tiny" :src='review.photo'/>
                    <sui-item-content class='review'>
                        <sui-item-header>{{review.brand}}</sui-item-header>
                        <sui-item-meta>
                            <p class="itemName">{{review.itemName}}</p>
                            <p class="option">{{review.option}}</p>
                        </sui-item-meta>
                        <sui-item-description>
                            <p>
                                {{review.content}}
                            </p>
                            <!--                            <span class='detail-review'><sui-button @click="goDetail(review.goodsCode)" size="tiny" icon="chevron down" floated="right" basic content="상세 보기"/></span>-->
                            <!--                            <div id='detail'>-->
                            <!--                                detail-->
                            <!--                            </div>-->

                            <sui-form-field>
                                <sui-accordion>
                                    <a is="sui-accordion-title">
                                        <sui-icon name="dropdown"/>
                                        상세보기
                                    </a>

                                    <sui-accordion-content>
                                        <div class="review-detail">
                                            <img src="https://via.placeholder.com/150">
                                            <img src="https://via.placeholder.com/600x150">
                                        </div>
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
    export default {
        name: "Sample",
        data() {
            return {}
        },
        async created() {
            await this.$store.commit('loadMyCommentsByUserId', 'testId');
        },
        computed: {
            getRequestMyReviews() {
                return this.$store.state.commentStore.myReviewsInfo;
            }
        },
        methods: {
            goDetail(goodsCode) {
                this.$router.push('/goodsDetail/' + goodsCode);
            }
        }
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
        background-color: lightgray;
        width: 95%;
        height: 180px;
        padding: 15px;
        float: left;
    }

    .review-detail img {
        margin-right: 10px;
    }
</style>
