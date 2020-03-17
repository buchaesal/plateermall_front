<template>
    <div>
        <header>
				<h3 class="page_title">배송지/회원정보 관리</h3>
		</header>
        <div>
        <sui-menu pointing secondary>
        <a class="cancel-tab" is="sui-menu-item" v-for="item in items" :active="isActive(item)" :key="item" :content="item" @click="select(item)"/>
        </sui-menu>

        <div v-if="active=='배송지관리'">
            <DeliveryManagement></DeliveryManagement>
        </div>
        <div v-if="active=='비밀번호변경'">
        
        </div>
        </div>
    </div>
</template>

<script>
    // import Cancel from './Cancel'
    import DeliveryManagement from './DeliveryManagement'

    export default {
        name: "DeliveryAndUserInfoManagementTaps",
        data() {
            return {
                active: '배송지관리',
                items: ['배송지관리', '비밀번호변경'],
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
        components:{
            DeliveryManagement,
        }
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
.cancel-tab{
    padding-left: 10% !important;
    padding-right: 10% !important;
}
</style>