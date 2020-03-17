<template>
    <div id="main-page-container">
        <Header></Header>
        <FaqNav></FaqNav>
        <component :is="selectedComponent"></component>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from '../../share/Header';
    import Footer from '../../share/Footer.vue';
    import FaqNav from "../../faq/FaqNav";
    import FaqContent from "../../faq/FaqContent";
    import MyReview from "../../comment/MyReview";

    export default {
        name: "Main",
        props:['selectedComponent'],
        components:{
            Header,
            Footer,
            FaqNav,
            FaqContent,
            MyReview
        }
    }
</script>

<style scoped>
    #main-page-container {
        height: 300%;
    }
</style>