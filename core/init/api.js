import { _callback } from './helper'

export const api = {

  //设置内存存储
  setSession(name,params){
    sessionStorage.setItem(name,params)
    return _callback();
  },

  // 获取内存存储
  getSession(name){
    const params = sessionStorage.getItem(name)
    return _callback(params)
  },

  removeSession(name){
    sessionStorage.removeItem(name)
    return _callback()
  },

  clearSession(){
    sessionStorage.clear();
    return _callback();
  },

  setLocal(name,params){
    localStorage.setItem(name,params)
    return _callback();
  },

  getLocal(name){
    const params = localStorage.getItem(name)
    return _callback(params)
  },
  
  removeLocal(name){
    localStorage.removeItem(name)
    return _callback()
  },

  clearLocal(){
    localStorage.clear();
    return _callback();
  },
  // 获取状态栏高度
  getStatusbar(){
    return plus.navigator.getStatusbarHeight()*2/100;
  }
}