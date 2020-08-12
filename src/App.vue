<template>
  <div id="app">
    <Main/>
  </div>
</template>

<script>
import Main from './components/main'

export default {
  name: 'App',
  components: {
    Main
  }
}
</script>

<style>
#app {
  width: inherit;
  height: inherit;
}
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  font-family: Lato,-apple-system,BlinkMacSystemFont,Helvetica,"Segoe UI","Hiragino Sans GB","Noto Sans CJK SC",Arial,Ubuntu,sans-serif,"Apple Color Emoji";
  background: url('~@/assets/bg-homepage-banner.jpg');
  background-size: cover;
}

</style>
