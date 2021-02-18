import Vue from 'vue';
import Router from 'vue-router';
import Index from './pages/Index.vue';
import Login from './pages/Login.vue';
import Register from './pages/Register.vue';
import MainFooter from './layout/MainFooter.vue';
import MainHeader from './layout/MainHeader.vue';

Vue.use(Router);

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'index',
      components: { default: Index, header: MainHeader}
    },
    {
      path: '/login',
      name: 'login',
      components: { default: Login }
    },
    {
      path: '/reg',
      name: 'reg',
      components: { default: Register }
    }
  ]
})
