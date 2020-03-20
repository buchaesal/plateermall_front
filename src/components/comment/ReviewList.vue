<template>
    <div>
        <div class="photo-review">
            <h3>포토<br>상품평</h3>
            <div class='review-img' v-for='(review, index) in getRequestComments.reviews' :key='index'>
                <img :src='review.photo' width='99' height='99' v-if='review.photo != ""'>
            </div>
        </div>


        <div class='options'>
            <sui-dropdown style="margin-right: 3%;" text="옵션보기"
                selection
                v-model="currentOption"
            />

            <sui-dropdown text="전체보기"
                selection
                :options="options"
                v-model="currentOrderRating"
            />
      
        </div>
        <br>
        <div class='review-list'>
            <sui-item-group divided>
                <sui-item v-for='(review, index) in getRequestComments' :key='index'>
                    <sui-item-content>
                    <sui-item-header><sui-rating id="starAvg" :rating="review.starCount" :max-rating="5" /> {{review.option}}</sui-item-header>
                    <sui-item-meta>
                        <p>{{review.content}}</p>
                        <img :src='review.photo' width='99' height='99'>
                        <p>{{review.id}} | {{review.writeDate}}</p>

                        <span class='recommend-review'><sui-button size="tiny" floated="right" basic content="신고 하기"/></span>
                        <span class='report-review'><sui-button @click="recommendComment(index)" size="tiny"  icon="thumbs up outline" floated="right" basic>추천하기{{review.recommendCount}}</sui-button></span>
                    </sui-item-meta>
                <sui-item-description>
            </sui-item-description>
      </sui-item-content>
    </sui-item>
    
    </sui-item-group>
        </div>
    </div>


</template>

<script>

    export default {
        name: "Sample",
        data(){
            return{
                currentOrderRating: null,
                currentOption: null,
                options: [
                    {
                        text: '전체보기',
                        value: 1,
                    },
                    {
                        text: '높은평점순',
                        value: 2,
                    },
                    {
                        text: '낮은평점순',
                        value: 3,
                    },
                    {
                        text: '사진상품평',
                        value: 4,
                    },
                ],
            }
        },
        computed: {
            getRequestComments(){
                return this.$store.state.commentStore.reviews;
            },

        },
        methods:{
            recommendComment(index){
                this.$store.commit('increaseRecommendCount', index);
            }
        }
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
        padding: 2%;
        overflow: auto;
    }
</style>