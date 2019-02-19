<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard v-for="event in appEvents" :key="event.id" :event="event"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import EventCard from "@/components/EventCard.vue";

@Component({ components: { EventCard } })
export default class EventList extends Vue {
  get appEvents() {
    return this.$store.getters.events;
  }
  created() {
    this.$store.dispatch("fetchEvents");
  }
}
</script>


