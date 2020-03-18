<template>
    <div id="main-page-container">
        <Header></Header>
        <div id="container">
            <div class="fix_inner">
                <div id="user_info" v-if="userInfo">
                    <UserInfo></UserInfo>
                </div>
                <FaqNav></FaqNav>
                <div class="sub_cont">
                    <component :is="selectedComponent"></component>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from '../../share/Header';
    import Footer from '../../share/Footer.vue';
    import FaqNav from "../../faq/FaqNav";
    import FaqContent from "../../faq/FaqContent";
    import MyReview from "../../comment/MyReview";
    import InquiryForm from "../../faq/InquiryForm";
    import FaqCategoryList from "../../faq/FaqCategoryList";
    import DeliveryAndUserInfoManagementTaps from "../DeliveryAndUserInfoManagementTaps";
    import UserInfo from '../UserInfo';
    import InquiryAnswer from "../../faq/InquiryAnswer";

    export default {
        name: "Main",
        props: ['selectedComponent', 'userInfo'],
        components: {
            Header,
            Footer,
            FaqNav,
            FaqContent,
            MyReview,
            InquiryForm,
            FaqCategoryList,
            DeliveryAndUserInfoManagementTaps,
            UserInfo,
            InquiryAnswer
        }
    }
</script>

<style scoped>
    #main-page-container {
        height: 300%;
    }

    [class^="fix_inner"] {
        width: 1200px;
        margin: 0 auto;
    }

    #container {
        width: 100%;
        min-height: 1500px;
        padding-top: 80px;
    }

    .sub_cont {
        float: left;
        width: 996px;
        font-size: 14px;
    }
    #user_info{

    }
</style>