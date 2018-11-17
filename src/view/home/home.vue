<template>
  <div>
    <!-- <m-header>

    </m-header> -->
    <banner :listImg="bannerList"></banner>
    <m-button to="./test">测试页面</m-button>
    <m-button @click="getBanner">rpc</m-button>
  </div>
</template>

<script>
import Banner from '@comps/banner'
export default {
  components:{
    Banner
  },
  data(){
    return {
      bannerList:[]
    }
  },
  created(){
    rpc('MM001').then(res=>{
      this.bannerList = res;
    })
  },
  methods:{
    getBanner(){
      rpc('MM001').then(res=>{
        this.bannerList = res;
        window.alert(JSON.stringify(this.bannerList))
      })
    }
  }
}
</script>
