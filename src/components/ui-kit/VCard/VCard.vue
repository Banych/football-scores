<script setup lang="ts">

</script>

<template>
  <div class="outer-container">

    <slot></slot>
  </div>
</template>

<style scoped>
.outer-container {
  border-radius: 14px;
  background: #ffffff;
  box-shadow: 6px 6px 12px #e3e3e3,
    -6px -6px 12px #ffffff;
}
</style>