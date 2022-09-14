<script setup lang="ts">
const props = defineProps<{
  title?: string;
  subTitle?: string;
}>();
</script>

<template>
  <div class="outer-container width-fill-available">
    <h2 v-if="title" class="card-title p-1">
      {{title}}
    </h2>
    <div class="px-2 pt-1 pb-2">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.outer-container {
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 6px 6px 12px #e3e3e3,
    -6px -6px 12px #ffffff;
  max-width: 300px;
}

.card-title {
  border-bottom: 1px solid #e3e3e3;
}

@media(max-width: 960px) {
  .outer-container {}
}

@media(max-width: 720px) {
  .outer-container {
    max-width: 220px;
  }
}
</style>