<template>
    <div>
        <h2>취소/교환/반품 조회</h2>
        <span class='cancel-info'>최근 1개월 간 진행된 취소/교환/반품 및 3개월 이내 진행중인 교환/반품내역만 조회됩니다.</span>    
        <sui-menu pointing secondary>
        <a class="cancel-tab" is="sui-menu-item" v-for="item in items" :active="isActive(item)" :key="item" :content="item" @click="select(item)"/>
        </sui-menu>

        <div v-if="active=='취소'">
            <CancelGoods/>
        </div>
        <div v-if="active=='교환'">
            <ExchangeGoods/>
        </div>

        <div v-if="active=='반품'">
            <ReturnGoods/>
        </div>
    </div>
</template>

<script>
import CancelGoods from './CancelGoods'
import ExchangeGoods from './ExchangeGoods'
import ReturnGoods from './ReturnGoods'

    export default {
        name: "Sample",
        data() {
            return {
                active: '취소',
                items: ['취소', '교환', '반품'],
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
        created() {
            this.active = this.$route.params.active;
        },
        components:{
            CancelGoods,
            ExchangeGoods,
            ReturnGoods
        }
    }
</script>

<style scoped>

    h2{
        padding: 1%;
        display: inline-block;
    }

    .cancel-tab{
        padding-left: 16% !important;
        padding-right: 16% !important;
    }

    .cancel-info{
        padding-top: 2%;
        padding-right: 1%;
        float: right;
        color: #666;
    }
</style>