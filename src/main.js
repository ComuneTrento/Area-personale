import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.http.options.root = '/';
Vue.config.productionTip = false;

import DomandaAttiva from './components/DomandaAttiva';
import NidiDisponibili from './components/NidiDisponibili';
import Icef from './components/Icef';
import Anagrafica from './components/Anagrafica';
import Famiglia from './components/Famiglia';
import Profile from './components/Profile';

const routes = [

  {path: '/anagrafica/:id', component: Anagrafica},
  {path: '/famiglia/:id', component: Famiglia},
  {path: '/domanda', component: DomandaAttiva},
  {path: '/nidi', component: NidiDisponibili},
  {path: '/icef', component: Icef},
  {path: '/profile', component: Profile, name: 'profile'},

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

export const app = new Vue();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
