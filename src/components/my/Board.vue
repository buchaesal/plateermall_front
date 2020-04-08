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
<!--            <sui-table single-line>-->
<!--                <sui-table-header>-->
<!--                    <sui-table-row>-->
<!--                        <sui-table-header-cell>상태</sui-table-header-cell>-->
<!--                        <sui-table-header-cell>무슨영역질문?</sui-table-header-cell>-->
<!--                        <sui-table-header-cell>제목</sui-table-header-cell>-->
<!--                        <sui-table-header-cell>작성자</sui-table-header-cell>-->
<!--                        <sui-table-header-cell>등록일</sui-table-header-cell>-->
<!--                    </sui-table-row>-->
<!--                </sui-table-header>-->
<!--                <sui-table-body v-if="questionList.length===0">-->
<!--                    <sui-table-row>-->
<!--                        <sui-table-cell colspan="5" style="text-align:center;">문의 내역이 없습니다.</sui-table-cell>-->
<!--                    </sui-table-row>-->
<!--                </sui-table-body>-->
<!--                <sui-table-body v-else>-->
<!--                    <sui-table-row v-for="(post, index) in questionList" :key="'all' + index" v-show="searchList.length==0">-->
<!--                        <sui-table-cell v-if="post.state">답변완료</sui-table-cell>-->
<!--                        <sui-table-cell v-else>답변대기</sui-table-cell>-->
<!--                        <sui-table-cell>{{post.territory}}</sui-table-cell>-->
<!--                        <sui-table-cell>-->
<!--                            <router-link :to="`/answer/${post.postId}`">{{ post.title }}</router-link>-->
<!--                        </sui-table-cell>-->
<!--                        <sui-table-cell>{{post.writer}}</sui-table-cell>-->
<!--                        <sui-table-cell>{{post.date}}</sui-table-cell>-->
<!--                    </sui-table-row>-->

<!--                    <sui-table-row v-for="(post, index) in searchList" :key="'search' + index" v-show="searchList.length>0">-->
<!--                        <sui-table-cell v-if="post.state">답변완료</sui-table-cell>-->
<!--                        <sui-table-cell v-else>답변대기</sui-table-cell>-->
<!--                        <sui-table-cell>{{post.territory}}</sui-table-cell>-->
<!--                        <sui-table-cell>-->
<!--                            <router-link :to="`/answer/${post.postId}`">{{ post.title }}</router-link>-->
<!--                        </sui-table-cell>-->
<!--                        <sui-table-cell>{{post.writer}}</sui-table-cell>-->
<!--                        <sui-table-cell>{{post.date}}</sui-table-cell>-->
<!--                    </sui-table-row>-->
<!--                </sui-table-body>-->
<!--            </sui-table>-->
<!--            <div class="search-box">-->
<!--                <sui-dropdown class="search-dropdown"-->
<!--                              placeholder="카테고리 선택"-->
<!--                              selection-->
<!--                              :options="options"-->
<!--                              v-model="searchQuestionObject.searchType"-->
<!--                />-->
<!--                <sui-input class="search-input" v-model="searchQuestionObject.keyword"/>-->
<!--                <sui-button secondary class="search-btn" @click="searchQuestionList"><a href="#">검색</a></sui-button>-->
<!--            </div>-->
        </div>




        <div class="overflow-auto">
            <b-table
                    id="my-table"
                    :items="items"
                    :per-page="perPage"
                    :current-page="currentPage"
                    small
            ></b-table>

            <b-pagination
                    v-model="currentPage"
                    :total-rows="rows"
                    :per-page="perPage"
                    aria-controls="my-table"
                    class="pagination-count"
            ></b-pagination>
        </div>





    </div>
</template>

<script>

    import FaqHeader from "../faq/FaqHeader";
    import {getQuestionList, searchQuestion} from "../../api/FaqApi";

    export default {
        el: "#app",
        name: "Board",
        components: {
            FaqHeader,
        },
        data() {
            return {
                questionList: [],
                searchList: [],
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



                perPage: 10,
                currentPage: 1,
                items: [

                    // { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
                    // { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
                    // { id: 3, first_name: 'Barney', last_name: 'Rubble' },
                    // { id: 4, first_name: 'Betty', last_name: 'Rubble' },
                    // { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
                    // { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
                    // { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
                    // { id: 8, first_name: 'Rockhead', last_name: 'Slate' },
                    // { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' }
                ]
            }
        },
        async created() {
            this.questionList = await getQuestionList();
            this.items = this.questionList;
            this.answerCount();
        },
        computed: {
            rows() {
                return this.items.length
            }
        },
        methods: {
            async searchQuestionList() {
                this.searchList = await searchQuestion(this.searchQuestionObject);
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

    [class^="bull_"] {
        color: #666;
        font-size: 14px;
        line-height: 20px;
        padding-left: 0;
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

</style>