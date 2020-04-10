<template>
    <div class="header-container" id="header">
        <TopHeader :userInfo="userInfo" :isAuthenticated="isAuthenticated"/>
        <MidHeader :userInfo="userInfo" :isAuthenticated="isAuthenticated"/>
        <BottomHeader/>
    </div>
</template>

<script>

    import TopHeader from './TopHeader';
    import MidHeader from "./MidHeader";
    import BottomHeader from "./BottomHeader";
    import {getCurrentUserInfo} from "../../api/UserApi";

    export default {
        name: "Header",
        components: {
            TopHeader,
            MidHeader,
            BottomHeader
        },
        data() {
            return {
                userInfo: {},
            }
        },
        computed: {
            isAuthenticated() {
                return this.$store.getters.isAuthenticated;
            },
        },
        async created() {
            if (this.isAuthenticated) {
                this.userInfo = await getCurrentUserInfo();
                await this.$store.dispatch('getWishList', this.userInfo.email);
                await this.$store.dispatch('getCartList', this.userInfo.email);
            }
        },
    }
</script>

<style>
    #header {
        position: fixed; /* Make it stick/fixed */
        top: 0; /* Stay on top */
        width: 100%; /* Full width */
        transition: top 0.3s; /* Transition effect when sliding down (and up) */
        z-index: 100;
    }

    .header-container {
        background-color: white;
    }

    MidHeader {
        min-width: 1500px;
    }

</style>