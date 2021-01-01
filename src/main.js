import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import MarkdownIt from 'markdown-it';

Vue.config.productionTip = false;
Object.defineProperty(Vue.prototype, '$md', { value: new MarkdownIt() });

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
