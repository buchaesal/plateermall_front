<template>
  <div id="app">
      <FaqNav></FaqNav>
      <FaqContent></FaqContent>
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
</style>
