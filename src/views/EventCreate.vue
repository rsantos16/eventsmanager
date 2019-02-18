<template>
  <div>
    <h1>Create Event</h1>
    <p>This event was created by: {{userName}}</p>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class EventCreate extends Vue {
  get userName() {
    return this.$store.state.user.name;
  }
}
</script>