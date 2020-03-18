<template>
    <div>
        <div class="order_header">
        <FaqHeader :title="'주문배송조회'"></FaqHeader>
        </div>
    </div>
</template>

<script>
    import FaqHeader from "../faq/FaqHeader";

    export default {
        name: "OrderList",
        components: {
            FaqHeader
        }
    }
</script>

<style scoped>
    .order_header{
        border-top: 3px solid #000;
        border-bottom: 1px solid #000;
    }
</style>