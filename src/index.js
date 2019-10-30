import Vue from 'vue'
import App from './App.vue'


new Vue({
  el: '#app',
  data: {
    name: 'fyman',
    render: h => h(App)
  }
})