<template>
    <div id="app">
        <div id="container" class="mylotte_wrap">
            <div class="fix_inner">
            <FaqNav></FaqNav>
            <FaqContent></FaqContent>
            </div>
        </div>
    </div>
</template>

<script>
    import FaqNav from './components/board/Faq-nav';
    import FaqContent from './components/board/Faq-content';

    export default {
        name: 'App',
        components: {
            FaqNav,
            FaqContent
        }
    }
</script>

<style>
    #container {
        width: 100%;
        min-height: 600px;
        padding-top: 80px;
    }

    .mylotte_wrap {
        margin: 0 0 133px;
    }
    [class^="fix_inner"] {
        width: 1200px;
        margin: 0 auto;
    }
</style>
