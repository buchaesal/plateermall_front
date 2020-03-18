<template>
    <div>
        <div id="my-cancel" v-if="cancelCount==0">
            <i class="huge exclamation icon"></i>
            <br><br>
            <p>해당되는 주문내역이 없습니다.</p>
            <p>★최근 1개월간 진행된 교환/반품 및 3개월 이내 교환/반품 진행 중인 내역만 조회됩니다.</p>
            <p>이전 기간의 내역은 주문배송조회 메뉴에서 확인하세요.</p>
        </div>

        <div v-else>
            <div class='summary' v-for='(cancelItem, index) in cancelItems' :key='index')>
                <span class='cancel-info'>{{cancelItem.cancelInfo}}</span>
                <span class='cancel-date'>취소일: {{cancelItem.cancelDate}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Sample",
        data(){
            return{
                cancelCount:1,
                cancelItems:[
                    {
                        brand: '이지함',
                        itemName: '이지함 스팟케어 블루원(스팟케어)',
                        quantity: 1,
                        price: '10,000원',
                        cancelDate: '2020-03-17 16:44',
                        cancelInfo: '03월 17일 2020-03-17-3210155',
                    },
                ]
            }
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

    .cancel-date{
        text-align: right;
    }

    .summary{
        margin-left: 1%;
        margin-right: 1%;
        border-top: 1px solid #ededed;
        border-bottom: 1px solid #ededed;
    }
#my-cancel > p{
    font-size: 10px;
}

    
</style>