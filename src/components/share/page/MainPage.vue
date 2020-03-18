<template>
    <div id="main-page-container">
        <Header></Header>
        <Slide></Slide>
        <Contents></Contents>
        <SideBanner></SideBanner>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from '../Header.vue'
    import Slide from '../Slide.vue';
    import Contents from '../Contents.vue'
    import Footer from '../Footer.vue'
    import SideBanner from '../SideBanner.vue'

    export default {
        name: "MainPage.vue",
        components: {
            Header,
            Slide,
            Contents,
            Footer,
            SideBanner
        }
    }
</script>

<style scoped>

    #main-page-container {
        height: 300%;
    }

</style>