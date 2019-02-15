import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BaseIcon from '@/components/BaseIcon.vue';
import EventCard from '@/components/EventCard.vue';
import NavBar from '@/components/NavBar.vue';

Vue.config.productionTip = false;

Vue.component('BaseIcon', BaseIcon)
Vue.component('EventCard', EventCard)
Vue.component('NavBar', NavBar)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
