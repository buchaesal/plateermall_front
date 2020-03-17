<template>
    <div id="main-page-container">
        <Header></Header>
        <div id="container">
        <div class="fix_inner">
        <FaqNav></FaqNav>
        <component :is="selectedComponent"></component>
        </div>
        </div>
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
    [class^="fix_inner"] {
        width: 1200px;
        margin: 0 auto;
    }
    #container {
        width: 100%;
        min-height: 600px;
        padding-top: 80px;
    }
</style>