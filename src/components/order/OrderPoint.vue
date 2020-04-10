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
                copyUsePoint:0,
            }
        },
        methods: {
            changePoint(){
                
                let copy = {
                    discountName: 'copy',
                    price: this.copyUsePoint*(-1),
                }
                this.$store.commit('changeDiscountPrice', copy);

                if(this.usePoint > this.myPoint){
                    alert(this.myPoint + `점까지 사용 가능합니다.`);
                    this.usePoint = this.myPoint;
                }

                this.copyPoint();
                let info = {
                    discountName: '포인트할인',
                    price: this.usePoint,
                }
                this.$store.commit('changeDiscountPrice', info);
            },
            copyPoint(){
                this.copyUsePoint = this.usePoint;
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
