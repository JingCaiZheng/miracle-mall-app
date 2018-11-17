<template>
  <div id="app">
    <router-view/>
    <m-navigation v-if="bottomNav"></m-navigation>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      bottomNav:false,
      routeList:['/','/home','/chat','/mine','/recommend','/search']
    }
  },
  watch:{
    $route(to, from) {
      console.info(this.$route.path);
      let num = 0;
      this.routeList.forEach(list => {
        if(this.$route.path == list){
          num++
        }
      });
      if(num>0){
        this.bottomNav=true;
      }
    }
  }
}
</script>

<style>
  #app{
    overflow:hidden
  }
</style>
