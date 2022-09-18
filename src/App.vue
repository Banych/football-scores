<template>
  <div class="height-100vh d-flex flex-grow-1 flex-column">
    <nav class="width-full">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
    <main class="flex-grow-1 d-flex max-width mx-auto">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

</style>