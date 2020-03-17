<template>
  <div id="app">
     <!-- <MainPage></MainPage> -->
     <LoginFormPage></LoginFormPage>
  </div>
</template>

<script>

  // import MainPage from './components/share/page/MainPage.vue'
  import LoginFormPage from './components/my/page/LoginFormPage'
  export default {
    name: 'App',
    components: {
      // MainPage
      LoginFormPage
    }
  }
</script>
