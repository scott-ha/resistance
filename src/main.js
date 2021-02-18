import Vue from 'vue'
import App from './App.vue'
import router from './router';

// css
import "./assets/css/vendors.css";
import "./assets/css/style.css";

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
