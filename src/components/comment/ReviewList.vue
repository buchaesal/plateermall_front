<template>
    <div>
        
        <div class="photo-review">
            <h3>포토<br>상품평</h3>
            <div class='review-img' v-for='(review, index) in getRequestComments' v-show='review.myPhoto != ""' :key='index'>
                <img :src='review.myPhoto' width='99' height='99'>
            </div>
        </div>
        <div class='options'>
            <sui-dropdown style="margin-right: 3%;" text="옵션보기"
                selection
                :options="goodsOption"
                v-model="currentOption"
            />

            <sui-dropdown text="전체보기"
                selection
                :options="options"
                v-model="currentOrderRating"
            />
        </div>
        <br>
        <div v-if='reviewList.length != 0' class='review-list'>
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

                        <span class='recommend-review'><sui-button size="tiny" floated="right" basic content="신고 하기"/></span>
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
            <p>상품평을 작성하시면 L.POINT를 드립니다.(e쿠폰상품 제외)</p>
            <p>※ L.POINT 는 L.POINT 통합회원에 한해 지급가능합니다. (간편회원 적립 불가)</p>
        </div>
    </div>


</template>

<script>
import GoodsApi from '../../api/GoodsApi';

    export default {
        name: "Sample",
        data(){
            return{
                reviewList:[],
                goods:{},
                goodsCode:'',
                currentOrderRating: null,
                currentOption: null,
                goodsOption:[{text: '옵션보기', value: '옵션보기'},],
                options: [
                    {
                        text: '전체보기',
                        value: '전체보기',
                    },
                    {
                        text: '높은평점순',
                        value: '높은평점순',
                    },
                    {
                        text: '낮은평점순',
                        value: '낮은평점순',
                    },
                    {
                        text: '사진상품평',
                        value: '사진상품평',
                    },
                ],
            }
        },
        async created(){
            this.goodsCode = this.$route.params.goodsCode;

            let goodsApi = new GoodsApi();
            this.goods = await goodsApi.getGoods(this.goodsCode);

            for(let index in this.goods.options){
                this.goodsOption.push(this.goods.options[index]);
            }

            this.reviewList = this.$store.state.commentStore.reviews.commentList;
        },
        computed: {
            getRequestComments(){
                return this.$store.state.commentStore.reviews.commentList;
            },     
        },
        methods:{
            recommendComment(index){
                this.$store.commit('increaseRecommendCount', index);
            },
        },
        watch:{
            currentOption:function(){
                let options = {
                    goodsCode: this.goodsCode,
                    goodsOption: this.currentOption,
                    orderOption: this.currentOrderRating,
                }

                this.$store.commit('loadCommentByFilter', options);
            },
            currentOrderRating:function(){

                let options = {
                    goodsCode: this.goods.goodsCode,
                    goodsOption: this.currentOption,
                    orderOption: this.currentOrderRating,
                }

                this.$store.commit('loadCommentByFilter', options);
            },
        },
    }
</script>

<style scoped>

    .options{
        text-align: left;
        padding-left: 5%;
        padding-bottom: 1%;
        border-bottom: 1px solid #ededed;
    }
    .review-list{
        text-align: left;
        padding-top: 3%;
        padding-left: 5%;
        margin-bottom: 5%;
    }

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

    h3{
        padding-top: 2%;
        padding-left: 2%;
        text-align: left;
        float: left;
        width: 160px;
        font-size: 18px;
    }

    .review-img{
        float: left;
        display: inline-block;
        padding-top: 2%;
        padding-right: 2%;
    }

    .review-info{
        text-align: center;
        margin-top: 5%;
        margin-bottom: 5%;
    }
</style>