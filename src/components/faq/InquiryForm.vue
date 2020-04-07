<template>
    <div>
        <div>
            <div class="inquiry_header">
                <FaqHeader :title="'1:1문의하기'"></FaqHeader>
                <ul class="bull_list-dash">
                    <li>- 문의하신 내용에 대한 답변은 이메일 또는 마이롯데 &gt; 1:1답변확인에서 확인하실 수 있습니다.</li>
                    <li>- 답변 완료 시 회원정보에 등록된 휴대폰번호로 알림을 받으실 수 있습니다.</li>
                </ul>
            </div>
            <div id="table_form">
                <sui-form>
                    <sui-form-field>
                        <sui-table definition>
                            <sui-table-body>
                                <sui-table-row>
                                    <sui-table-cell class="form_head">카테고리</sui-table-cell>
                                    <sui-table-cell>
                                        <sui-dropdown
                                                placeholder="카테고리 선택"
                                                selection
                                                :options="options"
                                                v-model="questionObject.territory"
                                        />
                                    </sui-table-cell>
                                </sui-table-row>
                                <sui-table-row>
                                    <sui-table-cell class="form_head">문의 상품</sui-table-cell>
                                    <sui-table-cell>
                                        <sui-button class="select-order-goods-button" @click.native="toggle" :disabled="isChecked">
                                            주문 상품 선택
                                        </sui-button>
                                        <sui-checkbox label="상품 외 문의" v-model="isChecked" class="form-checkbox"/>

<!--                                        수정 필요-->
                                        <div class="select-my-order" v-if="!isChecked">
<!--                                            <span class="goods-img">-->
<!--                                                <img :src="myOrderGoods.imgUrl">-->
                                                {{myOrderGoods.title}}
<!--                                            </span>-->
                                        </div>
                                        <div v-else></div>

                                    </sui-table-cell>
                                </sui-table-row>
                                <sui-table-row>
                                    <sui-table-cell class="form_head">제목</sui-table-cell>
                                    <sui-table-cell>
                                        <sui-input v-model="questionObject.title"/>
                                    </sui-table-cell>
                                </sui-table-row>
                                <sui-table-row>
                                    <sui-table-cell class="form_head">내용</sui-table-cell>
                                    <sui-table-cell>
                                        <textarea placeholder="반품 및 교환 접수 상태 문의는 택배사 및 송장번호를 입력해 주시기 바랍니다."
                                                  style="resize: none" v-model="questionObject.description"></textarea>
                                    </sui-table-cell>
                                </sui-table-row>
                                <sui-table-row>
                                    <sui-table-cell class="form_head">답변 알림</sui-table-cell>
                                    <sui-table-cell>
                                        <sui-checkbox :label="userInfo.phoneNumber" v-model="questionObject.smsAlarm"/>
                                        <router-link to="/deliveryanduserinfomanagement">
                                            <sui-button style="float: right">회원 정보 수정</sui-button>
                                        </router-link>
                                    </sui-table-cell>
                                </sui-table-row>
                                <sui-table-row>
                                    <sui-table-cell class="form_head">이메일 수신</sui-table-cell>
                                    <sui-table-cell>
                                        <sui-checkbox :label="userInfo.email" v-model="questionObject.emailAlarm"/>
                                    </sui-table-cell>
                                </sui-table-row>
                            </sui-table-body>
                        </sui-table>
                        <div id="buttons">
                            <sui-button secondary @click="registration">등록</sui-button>
                            <sui-button basic secondary>취소</sui-button>
                        </div>
                    </sui-form-field>
                </sui-form>
            </div>
        </div>
        <!--모달모달-->
        <sui-modal v-model="open">
            <sui-modal-header class="modal-header">주문 상품 선택</sui-modal-header>
            <sui-modal-content>
                <sui-modal-description>
                    <ul class="modal-msg">
                        <li> 현재 현재 접속중인 계정의 결제완료 이전 상품만 문의가 가능합니다. </li>
                        <li> 상품에 대한 자세한 문의는 각 상품 페이지를 이용해주세요.</li>
                        <li> 하나의 상품에 대한 문의만 가능하며, 2개이상 상품에 대한 문의는 불가능합니다.</li>
                    </ul>

                    <hr>
                    <div class="goods-div">
                    <div v-for="(goods, index) in goodsInOrderList" :key="index" v-show="myOrderList.length>0" class="goods-list">

                        <div class="my-order-list-goods">
<!--                            <sui-checkbox class="goods-checkbox" radio/>-->
                            <span class="goods-img">
                                <img :src="goods.imgUrl">
                            </span>

                            <div class="my-order-list-info">
                                <p>{{goods.title}}</p>
                            </div>
                            <span class="my-order-list-price">{{goods.originalPrice}}원</span>
                            <span class="my-order-list-date">{{myOrderList[index].orderDate}}</span>
                            <span class="my-order-list-radio">
                                <sui-checkbox radio name="my-order-list-radio" :value="myOrderList[index]" v-model="myOrderQuestion"/>
                            </span>
                        </div>
                        <hr>
                    </div>
                    </div>

                    <div v-show="myOrderList.length==0">
                        <p class="modal-p">주문 내역이 없습니다.</p>
                    </div>

                </sui-modal-description>
            </sui-modal-content>
            <sui-modal-actions>
                <sui-button secondary @click="registerMyOrderQuestion">등록</sui-button>
                <sui-button basic secondary @click.native="toggle">취소</sui-button>
            </sui-modal-actions>
        </sui-modal>
        <!--모달모달 끝-->
    </div>
</template>

<script>
    import FaqHeader from "./FaqHeader";
    import {registrationQuestion, getRecentQuestion} from "../../api/FaqApi";
    import {getCurrentUserInfo} from "../../api/UserApi";
    import {getSpecificStatusOrderList} from "../../api/OrderApi";
    import GoodsApi from "../../api/GoodsApi";

    export default {
        name: "InquiryForm",
        components: {
            FaqHeader
        },
        data() {
            return {
                open: false,
                userInfo: '',
                recentPostId: '',
                isChecked: false,
                myOrderGoods: '',
                myOrderQuestion: '',
                test: {},
                goodsApi : new GoodsApi(),
                goodsInOrderList: [],
                myOrderList: [],
                questionObject: {
                    territory: '',
                    state: '',
                    date: new Date().getFullYear() + ' - ' + (new Date().getMonth() + 1) + ' - ' + new Date().getDate(),
                    writer: '',
                    goodsTitle: '',
                    title: '',
                    description: '',
                    smsAlarm: '',
                    emailAlarm: '',
                },
                options: [
                    {text: '주문내역확인', value: '주문내역확인',},
                    {text: '배송확인', value: '배송확인',},
                    {text: 'L.POINT', value: 'L.POINT',},
                    {text: '반품접수', value: '반품접수',},
                    {text: '교환접수', value: '교환접수',},
                ]
            }
        },
        methods: {
            async registerMyOrderQuestion(){
                this.open = !this.open;
                this.myOrderGoods = await this.goodsApi.getGoods(this.myOrderQuestion.goodsId);
                this.questionObject.goodsTitle = this.myOrderGoods.title;
            },
            toggle() {
                this.open = !this.open;
            },
            async registration() {
                if (!(this.questionObject.territory) || !(this.questionObject.title) || !(this.questionObject.description)) {
                    alert("문의내용을 채워주세요.")
                } else {
                    await registrationQuestion(this.questionObject);
                    // console.log(this.questionObject);
                    this.recentPostId = await getRecentQuestion();
                    alert("등록이 완료되었습니다.");
                    this.$router.push("/answer/"+this.recentPostId);
                }
            },
            async setGoodsList(myOrderList){
                for(let order in myOrderList){
                    this.goodsInOrderList.push(await this.goodsApi.getGoods(myOrderList[order].goodsId));
                }
            },
        },
        async created() {
            this.userInfo = await getCurrentUserInfo();
            this.questionObject.writer = this.userInfo.name;
            this.myOrderList = await getSpecificStatusOrderList('normal', 'order-complete', this.userInfo.email);
            this.setGoodsList(this.myOrderList);
        },
    }
</script>

<style scoped>
    .inquiry_header {
        position: relative;
        border-top: 3px solid #000;
    }

    [class^="bull_"] {
        color: #666;
        font-size: 14px;
        line-height: 20px;
        padding-left: 0;
    }

    .bull_list-dash {
        list-style: none;
    }

    .form_head {
        height: 60px !important;
        text-align: center !important;
    }

    #table_form {
        margin-top: 50px;
        border-top: black solid 1px;
    }

    td {
        padding: 11px 20px !important;
    }

    #buttons {
        text-align: center;
    }

    .select-order-goods-button {
        margin-right: 20px;
    }

    .modal-header {
        padding: 30px 40px !important;
    }

    .modal-msg li{
        margin-bottom: 10px;
    }

    hr {
        margin: 30px;
    }

    .modal-p {
        text-align: center;
    }

    .my-order-list-goods {
        margin: 8px 0;
        background-color: white;
        font-size: 0.9rem;
    }

    /*.goods-checkbox {*/
    /*    float: left;*/
    /*    vertical-align: middle;*/
    /*    margin: 60px 30px 0 30px;*/
    /*}*/

    .goods-img {
        width: 50px;
        height: auto;
        vertical-align: middle;
    }

    .goods-img img {
        width: 100px;
        height: auto;
    }

    .my-order-list-info {
        display: inline-block;
        vertical-align: middle;
        margin-left: 40px;
    }

    .my-order-list-price, .my-order-list-date {
        margin: 0 50px;
    }

    .goods-div {
        max-height: 500px;
        overflow: auto;
    }

    .goods-list {
        text-align: center;
    }

    .select-my-order {
        margin-top: 10px;
    }

</style>