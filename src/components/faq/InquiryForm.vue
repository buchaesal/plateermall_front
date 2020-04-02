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
                                        <sui-button class="select-order-goods-button" @click.native="toggle" :disabled="isChecked==true">
                                            주문 상품 선택
                                        </sui-button>
                                        <sui-checkbox label="상품 외 문의" v-model="isChecked"/>
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
                        <li>- 최근 3개월의 주문 내역 입니다. 이전의 상품은 기간별 조회를 통해 가능합니다.</li>
                        <li>- 하나의 주문번호만 선택 가능하며, 동일한 주문번호의 상품은 복수 선택 가능합니다.</li>
                    </ul>
                    <div class="date_box">
                        <input type="date" class="modal-date-input">
                        ~
                        <input type="date" class="modal-date-input">
                        <sui-button class="date-check-btn" basic secondary>조회</sui-button>
                    </div>
                    <hr>
                    <p style="text-align: center">주문 내역이 없습니다.</p>
                </sui-modal-description>
            </sui-modal-content>
            <sui-modal-actions>
                <sui-button secondary>등록</sui-button>
                <sui-button basic secondary @click.native="toggle">취소</sui-button>
            </sui-modal-actions>
        </sui-modal>
        <!--모달모달 끝-->
    </div>
</template>

<script>
    import FaqHeader from "./FaqHeader";
    import {registrationQuestion} from "../../api/FaqApi";
    import {getCurrentUserInfo} from "../../api/UserApi";

    export default {
        name: "InquiryForm",
        components: {
            FaqHeader
        },
        data() {
            return {
                open: false,
                userInfo: '',
                currentQuestion: {},
                questionObject: {
                    territory: '',
                    state:'',
                    date: new Date().getFullYear()+' - '+ (new Date().getMonth()+1) + ' - ' + new Date().getDate(),
                    writer: '',
                    goodsCode: '',
                    title: '',
                    description: '',
                    smsAlarm: '',
                    emailAlarm: '',
                },
                isChecked: false,
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
            toggle() {
                this.open = !this.open;
            },
            async registration() {
                if(!(this.questionObject.territory) || !(this.questionObject.title) || !(this.questionObject.description)) {
                    alert("문의내용을 채워주세요.")
                } else {
                    this.currentQuestion = await registrationQuestion(this.questionObject);
                    alert(this.currentQuestion.title);
                    alert("등록이 완료되었습니다.");
                    await this.$router.push("/myPageMain");
                }
            }
        },
        async created() {
            this.userInfo = await getCurrentUserInfo();
            this.questionObject.writer = this.userInfo.name;
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

    ul {
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

    .ui.checkbox {
        margin-left: 10px;
        margin-top: 8px;
    }

    #buttons {
        text-align: center;
    }

    .date_box {
        margin-bottom: 20px;
    }

    .select-order-goods-button {
        margin-right: 20px;
    }

    .modal-header {
        padding: 30px 40px !important;
    }

    .modal-msg {
    }

    .date_box {
        padding: 20px 40px;
    }

    .modal-date-input {
        height: 35px;
        border-radius: 3px;
        border: solid 1px black;
        margin: 0 15px;
        padding: 0 15px;
    }

    hr {
        margin: 30px;
    }

</style>