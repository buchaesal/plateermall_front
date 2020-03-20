<template>
    <div>
        <FaqHeader :title="'주문현황 (최근 15일 기준)'"></FaqHeader>
        <OrderStatusBox></OrderStatusBox>
        <Wishlist></Wishlist>
    </div>
</template>

<script>
    import FaqHeader from "../../faq/FaqHeader";
    import OrderStatusBox from "../OrderStatusBox";
    import Wishlist from "../Wishlist";

    export default {
        name: "MyPageMain",
        components:{
            FaqHeader,
            OrderStatusBox,
            Wishlist
        }
    }
</script>

<style scoped>

</style>