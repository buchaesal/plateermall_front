<template>
    <div class="header-container" id="header">
        <TopHeader/>
        <MidHeader/>
        <BottomHeader/>
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
        },
        methods: {}
    }
</script>

<style>
    #header {
        position: fixed; /* Make it stick/fixed */
        top: 0; /* Stay on top */
        width: 100%; /* Full width */
        transition: top 0.3s; /* Transition effect when sliding down (and up) */
        z-index: 100;
    }

    .header-container {
        background-color: white;
    }

    MidHeader {
        min-width: 1500px;
    }

</style>