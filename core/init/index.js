import Vue from 'vue'
import router from '@core/router'
import { api } from './api'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { resolve } from 'path';
import { rejects } from 'assert';

Vue.use(VueAxios,axios);

window.imgUrl='http://106.12.14.63/assets/images/'

window.rpc = function(methods = 'get',url,data = {}){
  if(methods && methods !=='get' && methods !=='post'){
    data = url
    url = methods
  }
  url = 'http://106.12.14.63:8888/' + url;
  return new Promise((resolve,reject)=>{
    axios({
      methods,
      url,
      data
    }).then(res=>{
      resolve(res.data)
    }).catch(err=>{
      reject(err)
    })
  })
}

window.App = {
  link(route){
    router.push(route)
  },
  href(href){
    location.href = href
  }
}

Object.assign(App,api)
