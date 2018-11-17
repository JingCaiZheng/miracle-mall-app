<template>
  <div class="m-header" :style="{background:background,paddingTop:height+'rem'}">
    <slot>
      <div class="header">
        <div class="left" @click="back">
          <!-- <img v-if="leftMenu.length>0" v-for="(li,index) in leftMenu" :key="index" :src="li.icon||leftIcon" alt="back"> -->
          <img :src="leftIcon" alt="back">
        </div>
        <div class="center">
          <p>{{title}}</p>
        </div>

        <div class="right">

        </div>
      </div>
    </slot>
  </div>
</template>

<script>
import props from './utils/props';
export default {
  data(){
    return {
      leftIcon:require('@core/assets/title_back_black.png'),
      height:0
    }
  },
  props,
  created(){
    if(window.plus){
      this.height=plus.navigator.getStatusbarHeight()*2/100;
    }
  },
  methods:{
    back(){
      this.$router.back(-1)
    }
  }
}
</script>

<style lang="scss">
@import './scss/index.scss'
</style>

