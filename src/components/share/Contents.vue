<template>
    <div>
        <div class="col-3">
            <GoodsListCol3></GoodsListCol3>
        </div>
        <div class="mini-slide">
            <MiniSlide></MiniSlide>
        </div>
        <div class="col-4">
            <GoodsListCol4></GoodsListCol4>
        </div>
        <div class="col-5">
            <GoodsListCol5></GoodsListCol5>
        </div>
    </div>
</template>

<script>

    import GoodsListCol3 from "../goods/GoodsListCol3";
    import GoodsListCol4 from "../goods/GoodsListCol4";
    import GoodsListCol5 from "../goods/GoodsListCol5";
    import MiniSlide from "./MiniSlide";

    export default {
        name: "Contents",
        components: {
            GoodsListCol3,
            GoodsListCol4,
            GoodsListCol5,
            MiniSlide,
        }
    }
</script>

<style scoped>

    .col-3, .col-4, .col-5 {
        margin-bottom: 6%;
    }

</style>