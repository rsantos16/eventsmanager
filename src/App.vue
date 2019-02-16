<template>
  <div id="app">
    <NavBar/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

export default class App extends Vue {}
</script>