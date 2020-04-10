<template>
    <div>

        <sui-table single-line>

            <sui-table-header>
                <sui-table-row>
                    <sui-table-header-cell>상태</sui-table-header-cell>
                    <sui-table-header-cell>문의영역</sui-table-header-cell>
                    <sui-table-header-cell>제목</sui-table-header-cell>
                    <sui-table-header-cell>작성자</sui-table-header-cell>
                    <sui-table-header-cell>등록일</sui-table-header-cell>
                </sui-table-row>
            </sui-table-header>

            <sui-table-body v-if="paginatedData.length===0">
                <sui-table-row>
                    <sui-table-cell colspan="5" style="text-align:center;">문의 내역이 없습니다.</sui-table-cell>
                </sui-table-row>
            </sui-table-body>

            <sui-table-body v-else>
                <sui-table-row v-for="post in paginatedData" :key="post.postId">
                    <sui-table-cell v-if="post.state">답변완료</sui-table-cell>
                    <sui-table-cell v-else>답변대기</sui-table-cell>
                    <sui-table-cell>{{post.territory}}</sui-table-cell>
                    <sui-table-cell>
                        <router-link :to="`/answer/${post.postId}`">{{ post.title }}</router-link>
                    </sui-table-cell>
                    <sui-table-cell>{{post.writer}}</sui-table-cell>
                    <sui-table-cell>{{post.date}}</sui-table-cell>
                </sui-table-row>
            </sui-table-body>
        </sui-table>

        <div class="btn-cover">
            <sui-button secondary :disabled="pageNum === 0" @click="prevPage" class="page-btn">이전</sui-button>
            <span class="page-count">{{ pageNum + 1 }} / {{ pageCount }} 페이지</span>
            <sui-button secondary :disabled="pageNum>=pageCount-1" @click="nextPage" class="page-btn">다음</sui-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PaginatedList",
        data() {
            return {
                pageNum: 0,
            }
        },
        props: {
            listArray: {
                type: Array,
                required: true
            },
            pageSize: {
                type: Number,
                required: false,
                default: 12
            }
        },
        methods: {
            nextPage() {
                this.pageNum += 1;
            },
            prevPage() {
                this.pageNum -= 1;
            },
        },
        computed: {
            pageCount() {
                let listLeng = this.listArray.length,
                    listSize = this.pageSize,
                    page = Math.floor(listLeng / listSize);
                if (listLeng % listSize > 0) {
                    page += 1;
                }
                return page;
            },
            paginatedData() {
                const start = this.pageNum * this.pageSize,
                    end = start + this.pageSize;
                return this.listArray.slice(start, end);
            }
        }
    }
</script>

<style scoped>
    table {
        width: 100%;
        border-collapse: collapse;
    }

    table th {
        font-size: 1.2rem;
    }

    table tr {
        height: 50px;
        text-align: center;
        border-bottom: 1px solid #505050;
    }

    table tr:first-of-type {
        border-top: 2px solid #404040;
    }

    table tr td {
        padding: 1rem 0;
        font-size: 1.1rem;
    }

    .btn-cover {
        margin: 1.5rem 0;
        text-align: center;

    }

    .btn-cover .page-count {
        padding: 0 1rem;
    }

    .search-btn a {
        text-decoration: none;
        color: white;
    }

    .modal-msg li{
        margin-bottom: 10px;
    }

</style>