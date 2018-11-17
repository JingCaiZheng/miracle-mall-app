<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(str,index) in listImg" :style="{ backgroundImage: 'url(' + getImgUrl()+str.url + ')' }" :key="index"></div>
        </div>
        <div class="swiper-pagination swiper-pagination-white"></div>
    </div>
</template>

<script>
    import Swiper from '@core/lib/swiper';
    import '@core/lib/swiper.scss';
    export default {
      props: {
        listImg:{
          type:Array,
          default:[]
        }
      },
      mounted() {
        var swiper = new Swiper('.swiper-container', {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          loop: true,
          speed: 600,
          autoplay: 4000,
          onTouchEnd: function() {
            swiper.startAutoplay()
          }
        });
      },
      methods:{
        getImgUrl(){
          return imgUrl
        }
      }
    }
</script>

<style lang="scss">
    @import './index.scss'
</style>
