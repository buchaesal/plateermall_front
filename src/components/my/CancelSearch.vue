<template>
    <div>
        <h2>취소/교환/반품 조회</h2>
    
        <sui-menu pointing secondary>
        <a class="cancel-tab" is="sui-menu-item" v-for="item in items" :active="isActive(item)" :key="item" :content="item" @click="select(item)"/>
        </sui-menu>

        <div v-if="active=='취소'">
            <Cancel/>
        </div>
        <div v-if="active=='교환'">
        
        </div>

        <div v-else>
        
        </div>
    </div>
</template>

<script>
import Cancel from './Cancel'

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
        components:{
            Cancel,
        }
    }
</script>

<style scoped>

    .cancel-tab{
        padding-left: 16% !important;
        padding-right: 16% !important;
    }
</style>