<template>
    <div id="main-page-container">
        <Header></Header>
        <Slide></Slide>
        <Contents></Contents>
        <Footer></Footer>
    </div>
</template>

<script>

    import Header from '../Header.vue';
    import Slide from '../Slide.vue';
    import Contents from '../Contents.vue';
    import Footer from '../Footer.vue';


    export default {
        name: "MainPage.vue",
        components: {
            Header,
            Slide,
            Contents,
            Footer
        }
    }
</script>

<style scoped>

    #main-page-container {
        height: 300%;
    }
</style>