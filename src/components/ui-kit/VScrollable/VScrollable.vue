<template>
  <div class="outer d-flex flex-grow-1">
    <div class="scrollable flex-grow-1">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.outer {
  overflow: scroll;
}

.scrollable {
  height: 0;
}
</style>