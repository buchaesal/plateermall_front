<template>
    <div class="point-info">
        <span style="margin-right: 6%;">P.POINT {{myPoint}} 점</span>
        <sui-input @change="changePoint" placeholder="사용할 포인트" v-model="usePoint"/>
    </div>
</template>

<script>
import {getCurrentUserInfo} from '../../api/UserApi.js'

    export default {
        name: "OrderPoint",
        components: {
           
        },
        data() {
            return {
                user:{},     
                myPoint:0,
                usePoint:0,
            }
        },
        methods: {
            changePoint(){
                if(this.usePoint > this.myPoint){
                    alert(this.myPoint + `점까지 사용 가능합니다.`);
                }
            }
        },
        async created(){
            this.user = await getCurrentUserInfo();
            this.myPoint = this.user.point;
        },

    }
</script>

<style scoped>

    
</style>