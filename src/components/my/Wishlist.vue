<template>
    <div>
        <header>
            <h3 class="page_title">위시리스트</h3>
        </header>
        <sui-menu pointing secondary>
            <a class="select-tab" is="sui-menu-item" v-for="item in items" :active="isActive(item)" :key="item"
               :content="item" @click="select(item)"/>
        </sui-menu>
        <div v-if="active=='상품'">
            <WishlistDetail/>
        </div>
        <div v-if="active=='브랜드'">
            <NoItem></NoItem>
        </div>

        <br><br>

    </div>
</template>

<script>
    import WishlistDetail from './WishlistDetail';
    import NoItem from "../share/NoItem";

    export default {
        name: "Wishlist",
        data() {
            return {
                active: '상품',
                items: ['상품', '브랜드'],
            };
        },
        methods: {
            isActive(name) {
                return this.active === name;
            },
            select(name) {
                this.active = name;
            },
        },
        components: {
            WishlistDetail,
            NoItem
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