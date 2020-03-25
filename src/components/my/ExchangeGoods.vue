<template>
    <div>
        <div id="my-exchange" v-if="exchangeOrderList.length==0">
            <i class="huge exclamation icon"></i>
            <br><br>
            <p>해당되는 주문내역이 없습니다.</p>
            <p>★최근 1개월간 진행된 교환/반품 및 3개월 이내 교환/반품 진행 중인 내역만 조회됩니다.</p>
            <p>이전 기간의 내역은 주문배송조회 메뉴에서 확인하세요.</p>
        </div>

        <div class='exchange-list' v-else>
            <p id="exchange-info">교환된 상품이 <span>{{exchangeOrderList.length}}개 있습니다.</span></p>

            <div v-for='(exchangeItem, index) in exchangeOrderList' :key='index'>
                <div class='summary'>
                    <span class='item-info'>{{exchangeItem.orderDate}}</span>
                    <span class='exchange-date'>교환 신청일: {{exchangeItem.orderState.stateChangeDate}}</span>
                </div>

                <div class='exchange-item'>
                    <span><img :src='goodsInExchangeList[index].imgUrl' width='130' height='130'></span>
                    <div class='detail-item'>
                        <span><strong>{{goodsInExchangeList[index].seller}}</strong></span>
                        <br>
                        <span>{{goodsInExchangeList[index].title}}</span>
                        <br><br>
                        <span>수량: {{exchangeItem.goodsCount}}개</span>
                    </div>

                    <div class='process'>
                        <span class='exchange-process'>교환 완료</span>
                    </div>

                    <div class='result'>
                        <span class='exchange-price'>{{exchangeItem.orderPrice}}</span>
                    </div>
                </div>
                <br>
            </div>
        
        </div>
    </div>
</template>

<script>
    import GoodsApi from "../../api/GoodsApi";
    import {getExchangeOrderList} from "../../api/OrderApi";

    export default {
        name: "Sample",
        data(){
            return{
                exchangeOrderList: [],
                goodsInExchangeList: [],
                goodsApi : new GoodsApi(),
            }
        },
        created(){
            this.$store.commit('loadExchangeGoodsInfo', 'testId');
            this.getExchangeOrder();
        },
        computed: {
            getExchangeGoodsInfo(){
                return this.$store.state.purchaseHistoryStore.exchangeInfo;
            }
        },
        methods: {
            async getExchangeOrder() {
                this.exchangeOrderList = await getExchangeOrderList('testUserId');
                console.log(this.exchangeOrderList);
                await this.setGoodsList(this.exchangeOrderList);
            },
            async setGoodsList(exchangeOrderList){
                console.log("setGoodsList");
                for(var order in exchangeOrderList){
                    this.goodsInExchangeList.push(await this.goodsApi.getGoods(order.goodsId));
                }
                console.log(this.goodsInExchangeList);
            },
        },
    }
</script>

<style scoped>
    #my-exchange{
        margin-top: 10%;
        text-align: center;
    }

    #my-exchange > p{
        font-size: 10px;
    }
    
    #exchange-info{
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
    .exchange-date{
        float: right;
        padding-right: 2%;
    }

    .exchange-item{
        padding: 2%;
    }

    .exchange-item > img{
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

    .exchange-list{
        padding-left: 1%;
        padding-right: 1%;
    }
</style>