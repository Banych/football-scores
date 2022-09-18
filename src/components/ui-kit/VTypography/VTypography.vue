<template>
  <div class="typography">
    <slot></slot>
  </div>
</template>

<style scoped>
.typography {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
