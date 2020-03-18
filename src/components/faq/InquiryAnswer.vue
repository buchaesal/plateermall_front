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
            <ul class="status" id="div_countDetail"><li>총 문의 건 : <span>0</span>건</li>    <li>답변완료 : <span>0</span>건</li>    <li>처리중 건 : <span>0</span>건</li>    <li>접수 건 : <span>0</span>건</li></ul>
            <sui-table single-line>
                <sui-table-header>
                    <sui-table-row>
                        <sui-table-header-cell>Name</sui-table-header-cell>
                        <sui-table-header-cell>Registration Date</sui-table-header-cell>
                        <sui-table-header-cell>E-mail address</sui-table-header-cell>
                        <sui-table-header-cell>Premium Plan</sui-table-header-cell>
                    </sui-table-row>
                </sui-table-header>
                <sui-table-body>
                    <sui-table-row>
                        <sui-table-cell>John Lilki</sui-table-cell>
                        <sui-table-cell>September 14, 2013</sui-table-cell>
                        <sui-table-cell>jhlilk22@yahoo.com</sui-table-cell>
                        <sui-table-cell>No</sui-table-cell>
                    </sui-table-row>
                    <sui-table-row>
                        <sui-table-cell>Jamie Harington</sui-table-cell>
                        <sui-table-cell>January 11, 2014</sui-table-cell>
                        <sui-table-cell>jamieharingonton@yahoo.com</sui-table-cell>
                        <sui-table-cell>Yes</sui-table-cell>
                    </sui-table-row>
                    <sui-table-row>
                        <sui-table-cell>Jill Lewis</sui-table-cell>
                        <sui-table-cell>May 11, 2014</sui-table-cell>
                        <sui-table-cell>jilsewris22@yahoo.com</sui-table-cell>
                        <sui-table-cell>Yes</sui-table-cell>
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
    }
    .information_table .status {
        margin-bottom: 12px;
        font-size: 0;
        text-align: right;
    }
    ul {
        list-style: none;
    }
</style>