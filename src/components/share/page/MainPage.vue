<template>
    <div id="main-page-container">
        <Header></Header>
        <Slide></Slide>
<!--        <VuetifySlide></VuetifySlide>-->
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
    //import {getUser} from "../../../api/UserApi";
    // import VuetifySlide from "../VuetifySlide";

    export default {
        name: "MainPage",
        data(){
          return{
            user: {}
          }
        },
        components: {
            Header,
            Slide,
            // VuetifySlide,
            Contents,
            Footer,
            SideBanner
        },
        async created() {
            //this.user = await getUser("sample@gmail.com");
            //console.log(this.user)
        }
    }
</script>

<style scoped>

    #main-page-container {
        height: 300%;
    }

</style>