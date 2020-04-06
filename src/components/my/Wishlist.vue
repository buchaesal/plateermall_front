<template>
    <div>
        <header>
            <h3 class="page_title">위시리스트</h3>
        </header>

        <br />
        <br />

        <WishlistDetail/>

        <br />
        <br />
    </div>
</template>

<script>
    import WishlistDetail from './WishlistDetail';

    export default {
        name: "Wishlist",
        data() {
            return {

            }
        },

        components: {
            WishlistDetail,
        },
        computed: {}
    }

</script>

<style scoped>
    header {
        position: relative;
        border-top: 3px solid #000;
    }

    .page_title {
        padding: 16px 0 14px;
        font-size: 24px;
        font-weight: normal;
    }

    .select-tab {
        padding-left: 22% !important;
        padding-right: 25% !important;
    }


</style>