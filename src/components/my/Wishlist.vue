<template>
    <div>
        <header>
				<h3 class="page_title">위시리스트</h3>
		</header>
        <sui-menu pointing secondary>
        <a class="select-tab" is="sui-menu-item" v-for="item in items" :active="isActive(item)" :key="item" :content="item" @click="select(item)"/>
        </sui-menu>

        <div v-if="active=='상품'">
            <WishlistDetail/>
        </div>
        <div v-if="active=='브랜드'" class="no-order">
            <sui-icon name="info" size="huge" circular color="grey"/>
            <p class="no-order-msg">데이터가 없습니다.</p>
        </div>
    </div>
</template>

<script>
    import WishlistDetail from './WishlistDetail';
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
        },
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
.select-tab{
    padding-left: 22% !important;
    padding-right: 25% !important;
}
.no-order {
    width: 100%;
    text-align: center;
    margin-top: 100px;
}

.no-order-msg {
    margin-top: 50px;
    font-weight: bold;
    color: gray;
}
</style>