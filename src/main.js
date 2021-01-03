import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import MarkdownIt from 'markdown-it';
import mdFootnote from 'markdown-it-footnote';
import CONSTANTS from './utils/constants';
import serverConnect from './services/serverConnect';

Vue.config.productionTip = false;
Object.defineProperty(Vue.prototype, '$md', { value: new MarkdownIt().use(mdFootnote) });
Object.defineProperty(Vue.prototype, '$CONSTANTS', { value: CONSTANTS });
Object.defineProperty(Vue.prototype, '$serverConnect', { value: serverConnect });

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
