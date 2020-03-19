<template>
    <div>
        <div id="my-cancel" v-if="getCancelGoodsInfo.cancelCount==0">
            <i class="huge exclamation icon"></i>
            <br><br>
            <p>해당되는 주문내역이 없습니다.</p>
            <p>★최근 1개월간 진행된 교환/반품 및 3개월 이내 교환/반품 진행 중인 내역만 조회됩니다.</p>
            <p>이전 기간의 내역은 주문배송조회 메뉴에서 확인하세요.</p>
        </div>

        <div class='cancel-list' v-else>
            <p id="cancel-info">취소된 상품이 <span>{{getCancelGoodsInfo.cancelCount}}개 있습니다.</span></p>

            <div v-for='(cancelItem, index) in getCancelGoodsInfo.cancelItems' :key='index'>
                <div class='summary'>
                    <span class='cancel-info'>{{cancelItem.info}}</span>
                    <span class='cancel-date'>취소일: {{cancelItem.cancelDate}}</span>
                </div>

                <div class='cancel-item'>
                    <span><img :src='cancelItem.photo' width='130' height='130'></span>
                    <div class='detail-item'>
                        <span><strong>{{cancelItem.brand}}</strong></span>
                        <br>
                        <span>{{cancelItem.itemName}}</span>
                        <br><br>
                        <span>수량: {{cancelItem.quantity}}개</span>
                    </div>

                    <div class='process'>
                        <span class='cancel-process'>주문 취소</span>
                    </div>

                    <div class='result'>
                        <span class='cancel-price'>{{cancelItem.price}}</span>
                    </div>
                </div>
                <br>
            </div>
        
        </div>
    </div>
</template>

<script>
    export default {
        name: "Sample",
        data(){
            return{
                
            }
        },
        created(){
            this.$store.commit('loadCancelGoodsInfo', 'testId');
        },
        computed: {
            getCancelGoodsInfo(){
                return this.$store.state.cancelExchangeReturnStore.cancelInfo;
            }

        },
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

    .cancel-info{
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