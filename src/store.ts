import Vue from "vue";
import Vuex from "vuex";
import EventService from "@/services/EventService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    events: []
  },
  mutations: {
    FETCH_EVENTS(state) {
      EventService.getEvents()
        .then(response => {
          state.events = response.data;
        })
        .catch(error => {
          console.log("There was an error:", error.response);
        });
    }
  },
  actions: {
    fetchEvents({ commit }) {
      commit('FETCH_EVENTS');
    }
  },
  getters: {
    events: state => {
      return state.events;
    }
  }

});
