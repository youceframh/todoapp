import Vue from 'vue'
import ('vue-cookies').then((VueCookies)=>{Vue.use(VueCookies);Vue.$cookies.config('1000y')})
