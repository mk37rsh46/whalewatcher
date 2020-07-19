import Vue from 'vue'
import App from './App.vue'
import AsyncComputed from 'vue-async-computed'
import {BadgerAccordion, BadgerAccordionItem} from 'vue-badger-accordion'
import vuetify from './plugins/vuetify';
Vue.use(AsyncComputed)
Vue.component('BadgerAccordion', BadgerAccordion)
Vue.component('BadgerAccordionItem', BadgerAccordionItem)
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
