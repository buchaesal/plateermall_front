<template>
    <div>
        <TopHeader></TopHeader>
        <MidHeader></MidHeader>
        <BottomHeader></BottomHeader>
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

<style scoped>
</style>