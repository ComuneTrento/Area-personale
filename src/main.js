import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import store from './store/index';

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
import Homepage from './components/Homepage';
import PersonalArea from './components/PersonalArea';
import Amministrazione from './components/Amministrazione';
import Documenti from './components/Documenti';
import Servizi from './components/Servizi';
import Novita from './components/Novita';
import Login from './components/Login';

const routes = [

  {path: '/amministrazione', component: Amministrazione},
  {path: '/login', component: Login},
  {path: '/novità', component: Novita},
  {path: '/servizi', component: Servizi},
  {path: '/documenti', component: Documenti},
  {path: '/anagrafica/:id', component: Anagrafica},
  {path: '/famiglia/:id', component: Famiglia},
  {path: '/domanda', component: DomandaAttiva},
  {path: '/nidi', component: NidiDisponibili},
  {path: '/icef', component: Icef},
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

export const app = new Vue();
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
