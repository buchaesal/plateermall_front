<template>
    <div>
        <div>
            <div class="inquiry_header">
                <FaqHeader :title="'1:1 답변확인'"></FaqHeader>
                <ul class="bull_list-dash">
                    <li>- 문의하신 내용에 대한 답변은 이메일 수신 등록시 이메일로 전달됩니다.</li>
                    <li>- 문의 상태가 ‘처리중’인 경우는 상담원이 고객님의 문의를 처리중인 상태입니다.</li>
                </ul>
            </div>
            <ul class="status" id="div_countDetail">
                <li>총 문의 건 : <span>0</span>건</li>
                <li>답변완료 : <span>0</span>건</li>
                <li>처리중 건 : <span>0</span>건</li>
                <li>접수 건 : <span>0</span>건</li>
            </ul>
            <sui-table single-line>
                <sui-table-header>
                    <sui-table-row>
                        <sui-table-header-cell>순번</sui-table-header-cell>
                        <sui-table-header-cell>제목</sui-table-header-cell>
                        <sui-table-header-cell>문의일</sui-table-header-cell>
                        <sui-table-header-cell>답변일</sui-table-header-cell>
                        <sui-table-header-cell>문의상태</sui-table-header-cell>
                    </sui-table-row>
                </sui-table-header>
                <sui-table-body v-if="answers.length === 0">
                    <sui-table-row>
                        <sui-table-cell colspan="5" style="text-align:center;">문의 내역이 없습니다.</sui-table-cell>
                    </sui-table-row>
                </sui-table-body>
                <sui-table-body v-else>
                    <sui-table-row>
                        <sui-table-cell>John Lilki</sui-table-cell>
                        <sui-table-cell>September 14, 2013</sui-table-cell>
                        <sui-table-cell>jhlilk22@yahoo.com</sui-table-cell>
                        <sui-table-cell>No</sui-table-cell>
                        <sui-table-cell>No</sui-table-cell>
                    </sui-table-row>
                </sui-table-body>
            </sui-table>
        </div>
    </div>
</template>

<script>
    import FaqHeader from "./FaqHeader";

    export default {
        name: "InquiryAnswer",
        components: {
            FaqHeader
        },
        data() {
            return {
                answers: []
            }
        }
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