<template>
  <div class="navigation">
    <div class="item" v-for="(list,index) in navigationList" :key="index" @click="changeIndex(index,list.link)">
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="index==indexes?list.classSelect:list.class"></use>
      </svg>
      <p :class="index==indexes?'blue':'black'">{{list.text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      indexes:0,
      navigationList:[
        {text:'首页',link:'/home',class:'#mm-home-gray',classSelect:'#mm-home-blue'},
        {text:'推荐',link:'/recommend',class:'#mm-recommend-gray',classSelect:'#mm-recommend-blue'},
        {text:'搜索',link:'/seach',class:'#mm-search-gray',classSelect:'#mm-search-blue'},
        {text:'购物车',link:'/chat',class:'#mm-chat-gray',classSelect:'#mm-chat-blue'},
        {text:'我的',link:'/mine',class:'#mm-mine-gray',classSelect:'#mm-mine-blue'}
      ]
    }
  },
  methods:{
    changeIndex(index,link){
      this.indexes=index;
      this.$router.push(link)
    }
  }
}
</script>

<style lang="scss">
  @import './index.scss';
  .icon {
    width: .4rem; 
    height: .4rem;
    // vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
