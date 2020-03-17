<template>
    <div>
        <FaqHeader :is-button="true" :title="'자주 찾는 질문'"></FaqHeader>
        <FaqSearchForm></FaqSearchForm>
<!--        <FaqCategoryList></FaqCategoryList>-->
        <FaqList></FaqList>
    </div>
</template>

<script>
    import FaqHeader from './FaqHeader';
    import FaqSearchForm from './FaqSearchForm';
    // import FaqCategoryList from './Faq-category-list';
    import FaqList from './FaqList';

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

</style>