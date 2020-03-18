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
                                    <sui-table-cell class="form_head">문의 상품</sui-table-cell>
                                    <sui-table-cell>
                                        <sui-button @click.native="toggle">주문 상품 선택</sui-button>
                                        <sui-checkbox label="상품 외 문의"/>
                                    </sui-table-cell>
                                </sui-table-row>
                                <sui-table-row>
                                    <sui-table-cell class="form_head">문의 제목</sui-table-cell>
                                    <sui-table-cell>
                                        <sui-input/>
                                    </sui-table-cell>
                                </sui-table-row>
                                <sui-table-row>
                                    <sui-table-cell class="form_head">문의 내용</sui-table-cell>
                                    <sui-table-cell><textarea placeholder="반품 및 교환 접수 상태 문의는 택배사 및 송장번호를 입력해 주시기 바랍니다."
                                                              style="resize: none"></textarea></sui-table-cell>
                                </sui-table-row>
                                <sui-table-row>
                                    <sui-table-cell class="form_head">답변 알림</sui-table-cell>
                                    <sui-table-cell>
                                        <sui-checkbox label="010-4726-4128"/>
                                        <router-link to="/deliveryanduserinfomanagement">
                                            <sui-button style="float: right">회원 정보 수정</sui-button>
                                        </router-link>
                                    </sui-table-cell>
                                </sui-table-row>
                                <sui-table-row>
                                    <sui-table-cell class="form_head">이메일 수신</sui-table-cell>
                                    <sui-table-cell>
                                        <sui-checkbox label="eks4116@gmail.com"/>
                                    </sui-table-cell>
                                </sui-table-row>
                            </sui-table-body>
                        </sui-table>
                        <div id="buttons">
                            <sui-button basic secondary>취소</sui-button>
                            <sui-button secondary>등록</sui-button>
                        </div>
                    </sui-form-field>
                </sui-form>
            </div>
        </div>
        <!--모달모달-->
        <sui-modal v-model="open">
            <sui-modal-header>주문 상품 선택</sui-modal-header>
            <sui-modal-content>
                <sui-modal-description>
                    <ul class="bull_list-dash">
                        <li>- 최근 3개월의 주문 내역 입니다. 이전의 상품은 기간별 조회를 통해 가능합니다.</li>
                        <li>- 하나의 주문번호만 선택 가능하며, 동일한 주문번호의 상품은 복수 선택 가능합니다.</li>
                    </ul>
                </sui-modal-description>
            </sui-modal-content>
            <sui-modal-actions>
                <sui-button positive @click.native="toggle">
                    OK
                </sui-button>
            </sui-modal-actions>
        </sui-modal>
        <!--모달모달 끝-->
    </div>
</template>

<script>
    import FaqHeader from "./FaqHeader";

    export default {
        name: "InquiryForm",
        components: {
            FaqHeader
        },
        data() {
            return {
                open: false
            }
        },
        methods: {
            toggle() {
                this.open = !this.open;
            },
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
        width: 25%;
    }

    tr {
        height: 60px;
    }

    #table_form {
        margin-top: 50px;
        border-top: black solid 1px;
    }

    .ui.input {
        width: 100%;
    }

    .ui.checkbox {
        margin-left: 10px;
        margin-top: 7px;
    }

    #buttons {
        text-align: center;
    }
</style>