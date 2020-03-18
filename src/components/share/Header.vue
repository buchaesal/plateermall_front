<template>
    <div class="header-container">
        <TopHeader></TopHeader>
        <MidHeader></MidHeader>
        <BottomHeader class="bottom-header"></BottomHeader>
    </div>
</template>

<script>

    import TopHeader from './TopHeader';
    import MidHeader from "./MidHeader";
    import BottomHeader from "./BottomHeader";

    export default {
        name: "Header.vue",
        components: {
            TopHeader,
            MidHeader,
            BottomHeader
        }
    }
</script>

<style>

    .header-container {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        background-color: white;
        z-index: 100;
    }

    .bottom-header {
        background-color: black;
        height: 60px;
    }

</style>