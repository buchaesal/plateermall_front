<template>
    <div>
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
    </div>

</template>

<script>
import GoodsApi from '../../api/GoodsApi';

    export default {
        name: "ReviewOption",
        data(){
            return{
                reviewList:[],
                goods:{},
                info:{
                    orderId:'',
                    email:'',
                    index:0,
                },
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

</style>