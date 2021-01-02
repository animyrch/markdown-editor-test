import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import MarkdownIt from 'markdown-it';
import CONSTANTS from './utils/constants';

Vue.config.productionTip = false;
Object.defineProperty(Vue.prototype, '$md', { value: new MarkdownIt() });
Object.defineProperty(Vue.prototype, '$CONSTANTS', { value: CONSTANTS });

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
