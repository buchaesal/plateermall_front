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
                                    <p>상품 상품</p>
                                </sui-table-cell>
                            </sui-table-row>
                            <sui-table-row>
                                <sui-table-cell class="form_head">문의 제목</sui-table-cell>
                                <sui-table-cell>
                                    <p>문의를 드립니다요.</p>
                                </sui-table-cell>
                            </sui-table-row>
                            <sui-table-row>
                                <sui-table-cell class="form_head">문의 내용</sui-table-cell>
                                <sui-table-cell><textarea style="resize: none" readonly>문의 내용</textarea></sui-table-cell>
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
                                <sui-table-cell class="form_head">답변 내용</sui-table-cell>
                                <sui-table-cell><textarea style="resize: none" readonly>답변 내용</textarea></sui-table-cell>
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
    .inquiry_header {
        position: relative;
        border-top: 3px solid #000;
    }

    #answer_header {
        border-bottom: 2px solid #000;
    }
</style>