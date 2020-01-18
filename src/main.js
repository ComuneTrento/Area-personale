import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.http.options.root = '/';
Vue.config.productionTip = false;

import Anagrafica from './components/Anagrafica';
import Famiglia from './components/Famiglia';
import DomandaAttiva from './components/DomandaAttiva';
import NidiDisponibili from './components/NidiDisponibili';
import Icef from './components/Icef';

const routes = [
  {path: '/anagrafica', component: Anagrafica},
  {path: '/famiglia', component: Famiglia},
  {path: '/domanda', component: DomandaAttiva},
  {path: '/nidi', component: NidiDisponibili},
  {path: '/icef', component: Icef},
];
const router = new VueRouter({
  routes, // short for `routes: routes`
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
