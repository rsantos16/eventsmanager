<template>
  <div class="icon-wrapper">
    <svg class="icon" :width="width" :height="height">
      <use v-bind="{'xlink:href':'/feather-sprite.svg#' + name}"></use>
    </svg>
    <slot></slot>
  </div>
</template>
    
<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";

class Dimention {
  public type: number = 24;
}

@Component({
  name: "BaseIcon"
})
export default class BaseIcon extends Vue {
  @Prop() private name!: string;
  @Prop() private width!: Dimention;
  @Prop() private height!: Dimention;
}
</script>
    
<style scoped>
.icon-wrapper {
  display: inline-flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.4);
  font-size: 1rem;
  font-weight: 600;
}
.icon {
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  margin-right: 6px;
}
</style>
