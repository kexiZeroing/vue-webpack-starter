import Vue from 'vue'
import router from './router'
import App from './App'
import "./css/main.css";

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
