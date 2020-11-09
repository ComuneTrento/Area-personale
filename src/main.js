import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueCookies from 'vue-cookies';
import VueResource from 'vue-resource';
import store from './store/index';

import Profile from './components/AreaPersonaleComponents/Profile';
import Homepage from './components/Homepage';
import PersonalArea from './components/AreaPersonaleComponents/PersonalArea';
import i18n from './i18n'
import Documenti from './components/AreaPersonaleComponents/Documenti';
import Pratiche from './components/AreaPersonaleComponents/Pratiche';
import Pagamenti from './components/AreaPersonaleComponents/Pagamenti';
import Messaggi from './components/AreaPersonaleComponents/Messaggi';
import Scadenze from './components/AreaPersonaleComponents/Scadenze';
import NotFound from './components/NotFound';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueCookies);

Vue.http.options.root = '/';
Vue.config.productionTip = false;

const routes = [
  {path: '/profile', component: Profile, name: 'profile'},
  {path: '/personal', component: PersonalArea, name: 'personal', children: [
      { path: '', component: Pratiche },
      { path: 'pratiche', component: Pratiche },
      { path: 'documents', component: Documenti },
      { path: 'payments', component: Pagamenti },
      { path: 'messages', component: Messaggi },
      { path: 'deadlines', component: Scadenze },
    ]},
  {path: '/', component: Homepage},
  {path: '*', component: NotFound},
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
  i18n,
  render: h => h(App)
}).$mount('#app');
