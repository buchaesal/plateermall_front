<template>
    <div class="sub_cont">
        <FaqHeader :is-button="true" :title="'자주 찾는 질문'"></FaqHeader>
        <FaqSearchForm></FaqSearchForm>
<!--        <FaqCategoryList></FaqCategoryList>-->
        <FaqList></FaqList>
    </div>
</template>

<script>
    import FaqHeader from './Faq-header';
    import FaqSearchForm from './Faq-search-form';
    // import FaqCategoryList from './Faq-category-list';
    import FaqList from './Faq-list';

    export default {
        name: "Faq-content",
        components:{
            FaqHeader,
            FaqSearchForm,
            // FaqCategoryList,
            FaqList
        }
    }
</script>

<style scoped>
.sub_cont{
    float: left;
    width: 996px;
    font-size: 14px;
}
</style>