import Vue from 'vue'
import App from './App.vue'
import vSelect from "vue-select";

Vue.component("v-select", vSelect);
Vue.config.productionTip = false
Vue.use(require('vue-moment'));
import VueMask from 'v-mask'
Vue.use(VueMask);

document.addEventListener("DOMContentLoaded", function() {
  new Vue({
    render: h => h(App),
  }).$mount('#app')
});
