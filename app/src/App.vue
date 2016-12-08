<style lang="scss">
  @import url(https://fonts.googleapis.com/css?family=Lato:300);

  $bg: rgba(240, 240, 240, 1);

  * {
    margin: 0;
    padding: 0;
  }

  html,
  body { height: 100%; }

  body {
    align-items: center;
    background: $bg;
    background-position: center;
    display: flex;
    font-family: Lato, Helvetica, sans-serif;
    justify-content: center;
    text-align: center;
  }
</style>

<template>
  <router-view></router-view>
</template>

<script>
  import store from 'src/vuex/store'

  export default {
    store
  }
</script>
