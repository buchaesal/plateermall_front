<template>
    <div>
        <div class="inquiry_header">
            <FaqHeader :title="'1:1 답변확인'"></FaqHeader>
            <ul class="bull_list-dash">
                <li>- 문의하신 내용에 대한 답변은 이메일 수신 등록시 이메일로 전달됩니다.</li>
                <li>- 문의 상태가 ‘처리중’인 경우는 상담원이 고객님의 문의를 처리중인 상태입니다.</li>
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
                                    <p>닌텐도 - 동물의 숲</p>
                                </sui-table-cell>
                            </sui-table-row>
                            <sui-table-row>
                                <sui-table-cell class="form_head">문의 제목</sui-table-cell>
                                <sui-table-cell>
                                    <p>진짜 장난하시나요???</p>
                                </sui-table-cell>
                            </sui-table-row>
                            <sui-table-row>
                                <sui-table-cell class="form_head">문의 내용</sui-table-cell>
                                <sui-table-cell class="answer-content">
                                    안녕하세요.<br>
                                    제가 닌텐도 동물의 숲을 샀는데요...<br>
                                    도대체 언제 보내주시나요? 3달이 넘었습니다.<br>
                                    제가 직접 개발하는게 더 빠르겠네요..
                                </sui-table-cell>
                            </sui-table-row>
                        </sui-table-body>
                    </sui-table>
                </sui-form-field>
            </sui-form>
        </div>

        <div id="answer_header">
            <FaqHeader :title="'등록된 답변'"></FaqHeader>
        </div>

        <div>
            <sui-form>
                <sui-form-field>
                    <sui-table definition>
                        <sui-table-body>
                            <sui-table-row>
                                <sui-table-cell class="form_head">답변 등록 일시</sui-table-cell>
                                <sui-table-cell>
                                    2020.03.20 14:22
                                </sui-table-cell>
                            </sui-table-row>
                            <sui-table-row>
                                <sui-table-cell class="form_head">작성자</sui-table-cell>
                                <sui-table-cell>[GM] 아이번</sui-table-cell>
                            </sui-table-row>
                            <sui-table-row>
                                <sui-table-cell class="form_head">답변 내용</sui-table-cell>
                                <sui-table-cell class="answer-content">
                                    안녕하세요. 모험가님 !<br>
                                    숲의 친구들과 함께 궁금증을 풀어드리는 [GM]아이번 입니다.<br>
                                    빠른 답변을 드리지 못한점 진심으로 사과의 말씀을 드립니다.<br>
                                    더욱더 빠른 답변을 드릴 수 있도록 최대한 노력하겠습니다.<br>
                                    문의주신 제품 확인결과 이미 75일전 배송 완료되었습니다.<br>
                                    배송지 확인 부탁드립니다.<br>
                                    감사합니다.<br>
                                    ㅋㅋㅋ
                                </sui-table-cell>
                            </sui-table-row>
                        </sui-table-body>
                    </sui-table>
                </sui-form-field>
            </sui-form>
        </div>
    </div>
</template>

<script>
    import FaqHeader from "./FaqHeader";

    export default {
        name: "InquiryAnswerPost",
        components: {
            FaqHeader
        }
    }
</script>

<style scoped>

    .bull_list-dash, #table_form {
        margin-bottom: 40px;
    }

    .inquiry_header {
        position: relative;
        border-top: 3px solid #000;
    }

    #answer_header {
        border-bottom: 2px solid #000;
    }

    .form_head {
        height: 60px !important;
        text-align: center !important;
    }

    td {
        padding: 11px 20px !important;
    }

    .answer-content {
        line-height: 200%;
    }
</style>