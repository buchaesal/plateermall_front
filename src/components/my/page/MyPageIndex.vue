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
    import Board from "../Board";
    import UserInfo from '../UserInfo';
    import InquiryAnswer from "../../faq/InquiryAnswer";
    import Wishlist from '../Wishlist';
    import OrderList from "../OrderList";
    import CancelSearch from "../CancelSearch";
    import InquiryAnswerPost from "../../faq/InquiryAnswerPost";
    import MyPageMain from "./MyPageMain";
    import OrderDetail from "../OrderDetail";

    export default {
        name: "Main",
        props: {
            userInfo:{
                type: Boolean,
                default: true
            },
            selectedComponent: String
        },
        components: {
            Header,
            Footer,
            FaqNav,
            FaqContent,
            MyReview,
            InquiryForm,
            FaqCategoryList,
            Board,
            DeliveryAndUserInfoManagementTaps,
            UserInfo,
            InquiryAnswer,
            Wishlist,
            OrderList,
            CancelSearch,
            InquiryAnswerPost,
            MyPageMain,
            OrderDetail
        }
    }
</script>

<style scoped>
    #main-page-container {
        height: 300%;
        margin-top: 185px;
    }

    [class^="fix_inner"] {
        width: 1200px;
        margin: 0 auto;
    }

    #container {
        width: 100%;
        min-height: 1600px;
        padding-top: 80px;
    }

    .sub_cont {
        float: left;
        width: 996px;
        font-size: 14px;
    }
</style>