<template>
    <div>
        <Contents></Contents>
        <Footer></Footer>
    </div>
</template>

<script>
    import Contents from '../Contents.vue'
    import Footer from '../Footer.vue'

    export default {
        name: "Sample",
        props: {

        },
        components: {
            Contents,
            Footer
        }
    }
</script>

<style scoped>

</style>