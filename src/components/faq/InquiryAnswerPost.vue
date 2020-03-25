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
                                <sui-table-cell class="form_head">문의 영역</sui-table-cell>
                                <sui-table-cell>
                                    <p>{{questionDetail.territory}}</p>
                                </sui-table-cell>
                            </sui-table-row>
                            <sui-table-row>
                                <sui-table-cell class="form_head">문의 제목</sui-table-cell>
                                <sui-table-cell>
                                    <p>{{questionDetail.title}}</p>
                                </sui-table-cell>
                            </sui-table-row>
                            <sui-table-row>
                                <sui-table-cell class="form_head">문의 내용</sui-table-cell>
                                <sui-table-cell class="answer-content">
                                    {{questionDetail.description}}
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
                                    {{answer.date}}
                                </sui-table-cell>
                            </sui-table-row>
                            <sui-table-row>
                                <sui-table-cell class="form_head">작성자</sui-table-cell>
                                <sui-table-cell>{{answer.writer}}</sui-table-cell>
                            </sui-table-row>
                            <sui-table-row>
                                <sui-table-cell class="form_head">답변 내용</sui-table-cell>
                                <sui-table-cell class="answer-content">
                                    {{answer.description}}
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
    import {getQuestion, getAnswer} from "../../api/FaqApi";

    export default {
        name: "InquiryAnswerPost",
        data() {
            return {
                questionDetail: {},
                answer: {},
            }
        },
        components: {
            FaqHeader
        },
        async created() {
            const postId = this.$route.params.postId;
            this.questionDetail = await getQuestion(postId);
            this.answer = await getAnswer(postId);
        },
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