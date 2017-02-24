<template>
  <div>
    <img src="./Dashboard/assets/logo.png" alt="electron-vue">
    <h1>Welcome.</h1>
    <current-page></current-page>
    <versions></versions>
    <links></links>
  </div>
</template>

<script>
  import CurrentPage from './Dashboard/CurrentPage'
  import Links from './Dashboard/Links'
  import Versions from './Dashboard/Versions'
  export default {
    components: {
      CurrentPage,
      Links,
      Versions
    },
    name: 'dashboard'
  }
</script>

<style lang="scss" scoped>
  img {
    margin-top: -25px;
    width: 450px;
  }
</style>
