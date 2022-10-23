<script setup lang="ts">
import { computed, useSlots } from 'vue';
import VTypography from '../VTypography/VTypography.vue';

const isTitleString = computed(() => typeof useSlots().title === 'string');
</script>

<template>
  <div class="outer-container">
    <div class="card-title px-2 py-1">
      <VTypography v-if="isTitleString">
        <slot name="title"></slot>
      </VTypography>
      <div v-else><slot name="title"></slot></div>
    </div>
    <div
      class="px-2 py-1"
      v-if="!!$slots.subTitle"
    >
      <slot name="subTitle"></slot>
    </div>
    <div class="p-2 pt-0">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.outer-container {
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 5px 5px 10px #adadad, -5px -5px 10px #ffffff;
  max-width: 32%;
}

.card-title {
  border-radius: 10px 10px 0 0;
  border-width: 1px 0 1px 1px;
  border-style: solid;
  border-color: #e3e3e3;
  background-color: #f5f5f5;
}

@media (max-width: 933px) {
  .outer-container {
    max-width: 45%;
  }
}

@media (max-width: 720px) {
  .outer-container {
    max-width: 100%;
  }
}
</style>
