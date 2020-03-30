<template>
    <div>
        <div id="my-cancel" v-if="cancelOrderList.length==0">
            <i class="huge exclamation icon"></i>
            <br><br>
            <p>해당되는 주문내역이 없습니다.</p>
            <p>★최근 1개월간 진행된 교환/반품 및 3개월 이내 교환/반품 진행 중인 내역만 조회됩니다.</p>
            <p>이전 기간의 내역은 주문배송조회 메뉴에서 확인하세요.</p>
        </div>
        <sui-loader active centered inline v-else-if="cancelOrderList[0].orderId == ''"/>
        <div class='cancel-list' v-else>
            <p id="cancel-info">취소된 상품이 <span>{{cancelOrderList.length}}개 있습니다.</span></p>

            <div v-for='(cancelGoods, index) in goodsInCancelList' :key='index'>
                <div class='summary'>
                    <span class='item-info'>주문 날짜 : {{cancelOrderList[index].orderDate}}</span>
                    <span class='cancel-date'>취소일: {{cancelOrderList[index].orderState.stateChangeDate}}</span>
                </div>

                <div class='cancel-item'>
                    <span><img :src='cancelGoods.imgUrl' width='130' height='130'></span>
                    <div class='detail-item'>
                        <span><strong>{{cancelGoods.seller}}</strong></span>
                        <br>
                        <span>{{cancelGoods.title}}</span>
                        <br><br>
                        <span>수량: {{cancelOrderList[index].goodsCount}}개</span>
                    </div>

                    <div class='process'>
                        <span class='cancel-process'>주문 취소</span>
                    </div>

                    <div class='result'>
                        <span class='cancel-price'>{{cancelOrderList[index].orderPrice}}</span>
                    </div>
                </div>
                <br>
            </div>
        
        </div>
    </div>
</template>

<script>
    import {getCancelOrderList} from "../../api/OrderApi";
    import GoodsApi from "../../api/GoodsApi";

    export default {
        name: "Sample",
        data(){
            return{
                cancelOrderList: [{
                    orderId : '',
                    userId : '',
                    goodsId : '',
                    goodsCount: -1,
                    orderPrice : '',
                    orderState : {
                        orderId : '',
                        stateChangeDate : '',
                        orderState : '',
                    },
                }],
                goodsInCancelList: [],
                goodsApi : new GoodsApi(),
            }
        },
        created(){
            this.getCancelOrder();
        },
        computed: {
            getCancelGoodsInfo(){
                return this.$store.state.purchaseHistoryStore.cancelInfo;
            }

        },
        methods: {
            async getCancelOrder() {
                this.cancelOrderList = await getCancelOrderList('testid');
                await this.setGoodsList(this.cancelOrderList);
            },
            async setGoodsList(cancelOrderList){
                for(var order in cancelOrderList){
                    this.goodsInCancelList.push(await this.goodsApi.getGoods(cancelOrderList[order].goodsId));
                }
            },
        }
    }
</script>

<style scoped>
    #my-cancel{
        margin-top: 5%;
        text-align: center;
    }

    #my-cancel > p{
        font-size: 10px;
    }
    
    #cancel-info{
        margin-top: 2%;
        padding: 1%;
    }

    .summary{
        border-top: 1px solid #ededed;
        border-bottom: 1px solid #ededed;
        background-color: #fafafa;
        padding-top: 1%;
        padding-bottom: 1%;
    }

    .item-info{
        margin-left: 2%;
    }
    .cancel-date{
        float: right;
        padding-right: 2%;
    }

    .cancel-item{
        padding: 2%;
    }

    .cancel-item > img{
        float: left;
    }

    .detail-item{
        display: inline-block;
        padding-left: 2%;
    }

    .result{
        display: inline-block;
        width: 15%;
        height: 100%;
        text-align: right;
        vertical-align: top;
        font-size: 16px;
        margin-top: 5%;
        float: right;
    }

    .process{
       display: inline-block;
        width: 15%;
        margin-top: 5%;
        float: right;
        text-align: right;
        vertical-align: top;
        font-size: 16px;
    }

    .cancel-list{
        padding-left: 1%;
        padding-right: 1%;
    }
</style>