<template>
    <div>
        <div>
            <div class="inquiry_header">
                <FaqHeader :title="'1:1 답변확인'"></FaqHeader>
                <ul class="bull_list-dash">
                    <li>- 본인이 등록한 문의에 대한 페이지입니다.</li>
                    <li>- 문의하신 내용에 대한 답변은 이메일 수신 등록시 이메일로 전달됩니다.</li>
                </ul>
            </div>
            <ul class="status" id="div_countDetail">
                <li>총 문의 건 : <span>{{myQuestionList.length}}</span>건</li>
                <li>답변완료 : <span>{{answerComplete}}</span>건</li>
                <li>답변대기 : <span>{{answerStandBy}}</span>건</li>
            </ul>
            <sui-table single-line>
                <sui-table-header>
                    <sui-table-row>
                        <sui-table-header-cell>상태</sui-table-header-cell>
                        <sui-table-header-cell>카테고리</sui-table-header-cell>
                        <sui-table-header-cell>제목</sui-table-header-cell>
                        <sui-table-header-cell>등록일</sui-table-header-cell>
                    </sui-table-row>
                </sui-table-header>
                <sui-table-body v-if="myQuestionList.length==0">
                    <sui-table-row>
                        <sui-table-cell colspan="5" style="text-align:center;">문의 내역이 없습니다.</sui-table-cell>
                    </sui-table-row>
                </sui-table-body>
                <sui-table-body v-else>
                    <sui-table-row v-for="(post, index) in myQuestionList" :key="index">
                        <sui-table-cell v-if="post.state">답변완료</sui-table-cell>
                        <sui-table-cell v-else>답변대기</sui-table-cell>

                        <sui-table-cell>{{post.territory}}</sui-table-cell>
                        <sui-table-cell>
                            <router-link :to="`/answer/${post.postId}`">{{ post.title }}</router-link>
                        </sui-table-cell>
                        <sui-table-cell>{{post.date}}</sui-table-cell>
                    </sui-table-row>
                </sui-table-body>
            </sui-table>
        </div>
    </div>
</template>

<script>
    import FaqHeader from "./FaqHeader";
    import {getMyQuestionList} from "../../api/FaqApi";
    import {getCurrentUserInfo} from "../../api/UserApi";

    export default {
        name: "InquiryAnswer",
        data() {
            return {
                myQuestionList: [],
                answer: {},
                answerComplete: '0',
                answerStandBy: '0',
                userInfo: '',
            }
        },
        components: {
            FaqHeader,
        },
        async created() {
            this.userInfo = await getCurrentUserInfo();
            this.myQuestionList = await getMyQuestionList(this.userInfo.name);
            console.log(this.myQuestionList);
            this.answerIncrement();
        },
        methods : {
            answerIncrement() {
                for(let i=0 ; i<this.myQuestionList.length ; i++) {
                    if (this.myQuestionList[i].state) {
                        this.answerComplete++;
                    } else {
                        this.answerStandBy++;
                    }
                }
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

    .ui.table {
        margin: 0
    }
</style>