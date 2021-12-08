require('./bootstrap');

import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import myRouter from './router'

import App from './App.vue'

new Vue({
    el: '#app',
    components: { App },
    router: myRouter
})
