<template>
    <div>
        <header>
    <h3 class="page_title">배송지/회원정보 관리</h3>
</header>
    <hr>
    <div>
        <sui-menu pointing secondary>
            <a class="cancel-tab" is="sui-menu-item" v-for="item in items" :active="isActive(item)" :key="item" :content="item" @click="select(item)"/>
        </sui-menu>

        <div v-if="active=='배송지관리'">
            <DeliveryManagement></DeliveryManagement>
        </div>
<!--        <div v-if="active=='비밀번호변경'">-->
<!--            <PasswordChange></PasswordChange>-->
<!--        </div>-->
        <div v-if="active=='회원정보수정'">
            <UserInfoEdit :userInfo="userInfo"></UserInfoEdit>
        </div>
    </div>
    </div>
</template>

<script>
    // import Cancel from './Cancel'
    import DeliveryManagement from './DeliveryManagement'
    //import PasswordChange from './PasswordChange'
    import UserInfoEdit from "./UserInfoEdit";
    import {getCurrentUserInfo} from "../../api/UserApi";

    export default {
        name: "DeliveryAndUserInfoManagementTaps",
        data() {
            return {
                active: '배송지관리',
                items: ['배송지관리', '회원정보수정'],
                userInfo:{}
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
            //PasswordChange,
            UserInfoEdit,
        },
        async created(){
            let result = await getCurrentUserInfo();
            if(result){
                result.password = '';
                this.userInfo = result;
                console.log(this.userInfo);
            }else{
                //alert('로그인이 만료되었습니다. 다시 로그인해주세요.');
            }
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
.cancel-tab{
    padding-left: 10% !important;
    padding-right: 10% !important;
}
</style>