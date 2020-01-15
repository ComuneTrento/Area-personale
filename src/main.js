import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.http.options.root = '/';
Vue.http.headers.common['Authorization'] = 'Basic dnVlOldLVGtjSmtQNHJyNA==';
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
