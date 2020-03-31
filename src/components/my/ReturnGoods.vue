<template>
    <div>
        <div id="my-return" v-if="returnOrderList.length==0">
            <i class="huge exclamation icon"></i>
            <br><br>
            <p>해당되는 주문내역이 없습니다.</p>
            <p>★최근 1개월간 진행된 교환/반품 및 3개월 이내 교환/반품 진행 중인 내역만 조회됩니다.</p>
            <p>이전 기간의 내역은 주문배송조회 메뉴에서 확인하세요.</p>
        </div>
        <sui-loader active centered inline v-else-if="returnOrderList[0].orderId == ''"/>
        <div class='return-list' v-else>
            <p id="return-info">반품된 상품이 <span>{{returnOrderList.length}}개 있습니다.</span></p>

            <div v-for='(returnGoods, index) in goodsInReturnList' :key='index'>
                <div class='summary'>
                    <span class='item-info'>{{returnOrderList[index].orderDate}}</span>
                    <span class='return-date'>반품일: {{returnOrderList[index].orderState.stateChangeDate}}</span>
                </div>

                <div class='return-item'>
                    <span><img :src='returnGoods.imgUrl' width='130' height='130'></span>
                    <div class='detail-item'>
                        <span><strong>{{returnGoods.seller}}</strong></span>
                        <br>
                        <span>{{returnGoods.title}}</span>
                        <br><br>
                        <span>수량: {{returnOrderList[index].goodsCount}}개</span>
                    </div>

                    <div class='process'>
                        <span class='return-process'>반품 완료</span>
                    </div>

                    <div class='result'>
                        <span class='return-price'>{{returnOrderList[index].orderPrice}}</span>
                    </div>
                </div>
                <br>
            </div>
        
        </div>
    </div>
</template>

<script>
    import GoodsApi from "../../api/GoodsApi";
    import {getReturnOrderList} from "../../api/OrderApi";

    export default {
        name: "Sample",
        data(){
            return{
                returnOrderList: [{
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
                goodsInReturnList: [],
                goodsApi : new GoodsApi(),
            }
        },
        created(){
            this.$store.commit('loadReturnGoodsInfo', 'testid');
            this.getReturnOrder();
        },
        computed: {
            getReturnGoodsInfo(){
                return this.$store.state.purchaseHistoryStore.returnInfo;
            }
        },
        methods: {
            async getReturnOrder() {
                this.returnOrderList = await getReturnOrderList('testid');
                await this.setGoodsList(this.returnOrderList);
            },
            async setGoodsList(returnOrderList){
                for(var order in returnOrderList){
                    this.goodsInReturnList.push(await this.goodsApi.getGoods(returnOrderList[order].goodsId));
                }
            },
        },
    }
</script>

<style scoped>
    #my-return{
        margin-top: 10%;
        text-align: center;
    }

    #my-return > p{
        font-size: 10px;
    }
    
    #return-info{
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
    .return-date{
        float: right;
        padding-right: 2%;
    }

    .return-item{
        padding: 2%;
    }

    .return-item > img{
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

    .return-list{
        padding-left: 1%;
        padding-right: 1%;
    }
</style>