<template>
  <div class="m-button" @click="jump" :style="{marginTop:top+'rem'}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props:{
    top:{
      type:String,
      default:'.88'
    },
    to:{
      type:String,
      default:''
    },
    href:{
      type:String,
      default:''
    }
  },
  methods:{
    jump(){
      if(this.to){
        this.$router.push(this.to)
      }else if(this.href){
        location.href = this.href;
      }else{
        this.$emit('click')
      }
    }
  }
}
</script>

<style lang="scss">
@import './index.scss'
</style>
