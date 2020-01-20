import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.http.options.root = '/';
Vue.config.productionTip = false;

import Homepage from './components/Homepage';
import DomandaAttiva from './components/DomandaAttiva';
import NidiDisponibili from './components/NidiDisponibili';
import Icef from './components/Icef';
import Anagrafica from './components/Anagrafica';
import Famiglia from './components/Famiglia';

const routes = [

  {path: '/anagrafica/:id', component: Anagrafica},
  {path: '/famiglia/:id', component: Famiglia},
  {path: '/domanda', component: DomandaAttiva},
  {path: '/nidi', component: NidiDisponibili},
  {path: '/icef', component: Icef},
  {path: '/', component: Homepage},

];
const router = new VueRouter({
  routes, // short for `routes: routes`
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
