<template>
  <v-app>
    <v-layout>
      <v-navigation-drawer permanent width="170">
        <v-list density="compact" nav>
          <v-list-item title="Home" to="/" prepend-icon="mdi-home" />
          <v-list-item title="About" to='/about' prepend-icon="mdi-information" />
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <router-view />
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup lang="ts">
</script>
