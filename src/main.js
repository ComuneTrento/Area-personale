import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import store from './store/index';
import DomandaAttiva from './components/DomandaAttiva';
import NidiDisponibili from './components/NidiDisponibili';
import Anagrafica from './components/Anagrafica';
import Profile from './components/Profile';
import Homepage from './components/Homepage';
import PersonalArea from './components/PersonalArea';
import Login from './components/Login';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.http.options.root = '/';
Vue.config.productionTip = false;

const routes = [
  {path: '/login', component: Login},
  {path: '/anagrafica/:id', component: Anagrafica},
  {path: '/domanda', component: DomandaAttiva},
  {path: '/nidi', component: NidiDisponibili},
  {path: '/profile', component: Profile, name: 'profile'},
  {path: '/personal', component: PersonalArea, name: 'personal'},
  {path: '*', component: Homepage},
];
const router = new VueRouter({
  routes, // short for `routes: routes`
});

Vue.filter('capitalize', function(value) {
  if (!value) return '';
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});

Vue.filter('camelcase', function(value) {
  if (!value) return '';
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
});

Vue.filter('striphtml', function (value) {
  const div = document.createElement('div');
  div.innerHTML = value;
  return div.textContent || div.innerText || "";
});

export const app = new Vue();
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
