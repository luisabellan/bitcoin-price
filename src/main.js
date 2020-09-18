import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
Vue.useCssModule(VueAxios,axios)
