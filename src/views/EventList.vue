<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import EventCard from "@/components/EventCard.vue";
import EventService from "@/services/EventService";

@Component({ components: { EventCard } })
export default class EventList extends Vue {
  events: object[] = [{}];

  created() {
    EventService.getEvents()
      .then(response => {
        this.events = response.data;
      })
      .catch(error => {
        console.log("There was an error:", error.response);
      });
  }
}
</script>


