<template>
    <div>
        <Header></Header>
        <Contents></Contents>
        <Footer></Footer>
        <SideBanner></SideBanner>
    </div>
</template>

<script>
    import Header from '../Header.vue'
    import Contents from '../Contents.vue'
    import Footer from '../Footer.vue'
    import SideBanner from '../SideBanner.vue'

    export default {
        name: "Sample",
        props: {

        },
        components: {
            Header,
            Contents,
            Footer,
            SideBanner
        }
    }
</script>

<style scoped>

</style>