<template>
    <div id="main-page-container">
        <Header></Header>
            <div>

            </div>
            
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from '../../share/Header';
    import Footer from '../../share/Footer.vue';

    export default {
        name: "MyCart",
        components: {
            Header,
            Footer,
        }
    }
</script>

<style scoped>

</style>