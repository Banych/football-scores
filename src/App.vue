<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import 'normalize.css'
import './styles/style.scss';

</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>

</style>
