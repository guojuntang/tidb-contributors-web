<template>
  <div id="container">
    <header>
      <a class="brand" href="https://pingcap.com">
      <img src="@/assets/pingcap-logo.png">
      </a>
    </header>
    <div id="banner">
      <a class="tidb-logo" href="https://github.com/pingcap/tidb/">
      <img src="@/assets/index-cn-tidbLogo.png" width="50%">
      </a>
    </div>
    <p class="title">TiDB contributors</p>
    <Contributors/>
    <footer>
      <p class="powered">powered by: </p>
      <a href="https://github.com/guojuntang/tidb-contributors-web" class="link">TiDB contributors</a>
    </footer>
  </div>
</template>

<script>
import Contributors from '@/components/contributors'
export default {
  name: 'Main',
  components: {
    Contributors
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
  background-color: black;
  width: 100%;
  height: 72px;
}

footer{
  background: black;
  text-align: center;
  padding-top: 10px;
  width: 100%;
  height: 72px;
}
#banner{
  text-align: center;
  padding:  50px 0;
}
.tidb-logo{
  width: 60%;
}
.powered {
  color: rgba(255,255,255,.7);
  display: inline-block;
  font-size: 18px;
}

.link {
  color: white;
  display: inline-block;
  font-size: 18px;
}

.title{
  color: white;
  text-align: center;
  font-size: calc(2rem + 10px);
}

.brand img{
  height: 32px;
  margin: 16px;
}

#container{
  width: inherit;
  height: inherit;
}
</style>
