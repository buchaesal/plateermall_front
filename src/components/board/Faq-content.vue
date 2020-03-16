<template>
    <div class="sub_cont">
        <FaqHeader></FaqHeader>
        <FaqSearchForm></FaqSearchForm>
    </div>
</template>

<script>
    import FaqHeader from './Faq-header';
    import FaqSearchForm from './Faq-search-form';

    export default {
        name: "Faq-content",
        components:{
            FaqHeader,
            FaqSearchForm
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