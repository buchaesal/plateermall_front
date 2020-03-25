<template>
    <div>
        <div>
            <div class="inquiry_header">
                <FaqHeader :title="'질문/답변 게시판'"></FaqHeader>
                <ul class="bull_list-dash">
                    <li>- 문의하신 내용에 대한 답변은 이메일 수신 등록시 이메일로 전달됩니다.</li>
                    <li>- 문의 상태가 ‘처리중’인 경우는 상담원이 고객님의 문의를 처리중인 상태입니다.</li>
                </ul>
            </div>
            <ul class="status" id="div_countDetail">
                <li>총 문의 건 : <span>{{questionList.length}}</span>건</li>
                <li>답변완료 : <span>0</span>건</li>
                <li>처리중 건 : <span>0</span>건</li>
                <li>접수 건 : <span>0</span>건</li>
            </ul>
            <sui-table single-line>
                <sui-table-header>
                    <sui-table-row>
                        <sui-table-header-cell>상태</sui-table-header-cell>
                        <sui-table-header-cell>무슨영역질문?</sui-table-header-cell>
                        <sui-table-header-cell>제목</sui-table-header-cell>
                        <sui-table-header-cell>등록일</sui-table-header-cell>
                    </sui-table-row>
                </sui-table-header>
                <sui-table-body v-if="questionList.length===0">
                    <sui-table-row>
                        <sui-table-cell colspan="5" style="text-align:center;">문의 내역이 없습니다.</sui-table-cell>
                    </sui-table-row>
                </sui-table-body>
                <sui-table-body v-else>
                    <sui-table-row v-for="(post, index) in questionList" :key="index">
                        <sui-table-cell v-if="post.state==true">답변완료</sui-table-cell>
                        <sui-table-cell v-else>답변대기</sui-table-cell>
                        <sui-table-cell>{{post.territory}}</sui-table-cell>
                        <sui-table-cell><router-link :to="`/answer/${post.postId}`">{{ post.title }}</router-link></sui-table-cell>
                        <sui-table-cell>{{post.date}}</sui-table-cell>
                    </sui-table-row>
                </sui-table-body>
            </sui-table>
            <div class="search-box">
                <sui-input class="search-input"/>
                <sui-button secondary class="search-btn">검색</sui-button>
            </div>
        </div>
    </div>
</template>

<script>

    import FaqHeader from "../faq/FaqHeader";
    import {getQuestionList, getQuestion} from "../../api/FaqApi";

    export default {
        name: "Board",
        components: {
            FaqHeader,
        },
        data() {
            return {
                questionList: [],
                questionDetail: {},
            }
        },
        async created() {
            // this.answers = new FaqApi().getFaqList();
            this.questionList = await getQuestionList();
            this.questionDetail = await getQuestion();
        },
    }
</script>

<style scoped>
    header {
        position: relative;
        border-top: 3px solid #000;
    }

    /*.page_title {*/
    /*    padding: 16px 0 14px;*/
    /*    font-size: 24px;*/
    /*    font-weight: normal;*/
    /*}*/

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

    /*.form_head {*/
    /*    width: 25%;*/
    /*}*/

    tr {
        height: 60px;
        text-align: center;
    }

    .status {
        font-size: 0;
        text-align: right;
        margin-top: 30px;
    }

    .status li {
        display: inline-block;
        font-size: 14px;
        line-height: 20px;
    }

    .status li:not(:first-child) {
        margin-left: 12px;
        padding-left: 12px;
        position: relative;
    }

    /*.ui.table {*/
    /*    margin: 0*/
    /*}*/

    .search-box {
        width: 100%;
        text-align: center;
    }

    .search-input {
        margin-right: 10px;
        height: 36px;
        vertical-align: middle;
    }

</style>