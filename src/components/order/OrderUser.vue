<template>
    <div class="user-info">
        <span style="margin-right: 15%;" >이름</span>
        <sui-input v-model="customerName" focus/>
    </div>
    
</template>

<script>
import {getCurrentUserInfo} from '../../api/UserApi.js'   

    export default {
        name: "OrderUser",
        components: {
           
        },
        data() {
            return {
                user:{},
                customerName:'',
            }
        },
        methods: {
            
        },
        async created(){
            this.user = await getCurrentUserInfo();
            this.customerName = this.user.name;
        },

        watch:{
            customerName:function(){
                this.$store.commit('loadCustomerName', this.customerName);
            }
        },
    }
</script>

<style scoped>

    
</style>
