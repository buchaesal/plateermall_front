<template>
    <div>
        <div>
            <div class="inquiry_header">
                <FaqHeader :title="'1:1 답변확인'"></FaqHeader>
                <ul class="modal-msg">
                    <li> 본인이 등록한 문의에 대한 페이지입니다.</li>
                    <li> 문의하신 내용에 대한 답변은 이메일 수신 등록시 이메일로 전달됩니다.</li>
                </ul>
            </div>
            <hr class="divider">
            <ul class="status" id="div_countDetail">
                <li>총 문의 건 : <span>{{myQuestionList.length}}</span>건</li>
                <li>답변완료 : <span>{{answerComplete}}</span>건</li>
                <li>답변대기 : <span>{{answerStandBy}}</span>건</li>
            </ul>

            <PaginatedList :list-array="myQuestionList"></PaginatedList>

        </div>
    </div>
</template>

<script>
    import FaqHeader from "./FaqHeader";
    import PaginatedList from "../my/PaginatedList";
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
            PaginatedList,
        },
        async created() {
            this.userInfo = await getCurrentUserInfo();
            this.myQuestionList = await getMyQuestionList(this.userInfo.name);
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

    .modal-msg li{
        margin-bottom: 10px;
    }

    .divider {
         margin: 40px 0;
     }
</style>