<template>
  <a @click="jump">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props:{
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
      }
    }
  }
}
</script>

