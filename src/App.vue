<template>
  <div class="height-100vh d-flex flex-grow-1 flex-column">
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
    <main class="flex-grow-1 d-flex">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

</style>