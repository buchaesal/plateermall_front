<template>
    <div>
        <div>
            <div class="inquiry_header">
                <FaqHeader :title="'질문/답변 게시판'"></FaqHeader>
                <ul class="modal-msg">
                    <li> 문의하신 내용에 대한 답변은 이메일 수신 등록시 이메일로 전달됩니다.</li>
                    <li> 문의 상태가 ‘답변대기’인 경우는 상담원이 고객님의 문의를 처리중인 상태입니다.</li>
                </ul>
            </div>
            <ul class="status" id="div_countDetail">
                <li>총 문의 건 : <span>{{questionList.length}}</span>건</li>
                <li>답변완료 : <span>{{answerComplete}}</span>건</li>
                <li>답변대기 : <span>{{answerStandBy}}</span>건</li>
            </ul>

<!--        <PaginatedList :list-array="questionList"></PaginatedList>-->
        <PaginatedList v-if="!flag" :list-array="questionList"></PaginatedList>
        <PaginatedList v-else :list-array="searchList"></PaginatedList>

        </div>

        <div class="search-box">
            <sui-dropdown class="search-dropdown"
                          placeholder="카테고리 선택"
                          selection
                          :options="options"
                          v-model="searchQuestionObject.searchType"
            />
            <sui-input class="search-input" v-model="searchQuestionObject.keyword"/>
            <sui-button secondary class="search-btn" @click="searchQuestionList"><a href="#">검색</a></sui-button>
        </div>

    </div>
</template>

<script>

    import FaqHeader from "../faq/FaqHeader";
    import PaginatedList from "./PaginatedList";
    import {getQuestionList, searchQuestion} from "../../api/FaqApi";

    export default {
        name: "Board",
        components: {
            PaginatedList,
            FaqHeader,
        },
        data() {
            return {
                questionList: [],
                searchList: [],
                flag: false,
                answerComplete: '0',
                answerStandBy: '0',
                searchQuestionObject: {
                    searchType: '',
                    keyword: ''
                },
                options: [
                    {text: '제목', value: '제목',},
                    {text: '내용', value: '내용',},
                    {text: '작성자', value: '작성자',},
                    {text: '제목+내용', value: '제목+내용',},
                    {text: '전체조건', value: '전체조건',},
                ],
            }
        },
        async created() {
            this.questionList = await getQuestionList();
            this.answerCount();
        },
        methods: {
            async searchQuestionList() {
                if(!this.searchQuestionObject.searchType) {
                    alert("검색할 카테고리를 선택해주세요");
                } else if(!this.searchQuestionObject.keyword) {
                    alert("검색할 내용을 입력해주세요");
                } else {
                    this.searchList = await searchQuestion(this.searchQuestionObject);
                    this.searchQuestionObject.searchType = '';
                    this.searchQuestionObject.keyword = '';

                    this.flag = true;
                }
            },
            answerCount() {
                for (let i = 0; i < this.questionList.length; i++) {
                    if (this.questionList[i].state) {
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
    header {
        position: relative;
        border-top: 3px solid #000;
    }

    .inquiry_header {
        position: relative;
        border-top: 3px solid #000;
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

    .search-btn a {
        text-decoration: none;
        color: white;
    }

    .modal-msg li{
        margin-bottom: 10px;
    }

    .search-dropdown {
        vertical-align: middle;
    }

    .search-box {
        width: 100%;
        text-align: center;
    }

    .search-input {
        margin: 0 10px;
        height: 36px;
        vertical-align: middle;
        max-height: 200px;
    }
</style>