<template>
    <div class="sub_cont">
        <FaqHeader></FaqHeader>
        <FaqSearchForm></FaqSearchForm>
        <FaqCategoryList></FaqCategoryList>
    </div>
</template>

<script>
    import FaqHeader from './Faq-header';
    import FaqSearchForm from './Faq-search-form';
    import FaqCategoryList from './Faq-category-list';

    export default {
        name: "Faq-content",
        components:{
            FaqHeader,
            FaqSearchForm,
            FaqCategoryList
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