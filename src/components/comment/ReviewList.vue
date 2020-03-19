<template>
    <div>
        <div class="photo-review">
            <h3>포토<br>상품평</h3>
            <div class='review-img' v-for='(review, index) in getRequestComments.reviews' :key='index'>
                <img :src='review.photo' width='99' height='99' v-if='review.photo != ""'>
            </div>
        </div>


        <div class='options'>
            <sui-dropdown text="옵션전체" button>
                <sui-dropdown-menu>
                </sui-dropdown-menu>
            </sui-dropdown>

            <sui-dropdown text="전체보기" button>
                <sui-dropdown-menu>
                    <sui-dropdown-item>높은평점순</sui-dropdown-item>
                    <sui-dropdown-item>낮은평점순</sui-dropdown-item>
                    <sui-dropdown-item>사진상품평</sui-dropdown-item>
                </sui-dropdown-menu>
            </sui-dropdown>       
        </div>
        <br>
        <div class='review-list'>
            <sui-item-group divided>
                <sui-item v-for='(review, index) in getRequestComments.reviews' :key='index'>
                    <sui-item-content>
                    <sui-item-header><sui-rating id="starAvg" :rating="review.starCount" :max-rating="5" /> {{review.option}}</sui-item-header>
                    <sui-item-meta>
                        <p>{{review.content}}</p>
                        <img :src='review.photo' width='99' height='99'>
                        <p>{{review.id}} | {{review.writeDate}}</p>

                        <span class='recommend-review'><sui-button size="tiny" floated="right" basic content="신고 하기"/></span>
                        <span class='report-review'><sui-button size="tiny"  icon="thumbs up outline" floated="right" basic content="추천해요"/></span>
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
                reviews:[],
            }
        },
        computed: {
            getRequestComments(){
                return this.$store.state.commentStore.reviewInfo;
            }
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