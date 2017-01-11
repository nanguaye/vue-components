import 'normalize.css'
import './sdk/responsive'
import './assets/styles/index.styl'
import Vue from 'vue'
import App from './views/app.vue'
global.document.body.innerHTML = '<App></App>'
new Vue({
  el: 'body',
  components: {
    App
  }
})

