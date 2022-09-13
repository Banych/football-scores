<script setup lang="ts">
import { onMounted } from 'vue';
import { useMatchesStore } from '../stores/MatchesStore';
import MatchItem from '../components/Matches/MatchItem/MatchItem.vue';
import { storeToRefs } from 'pinia';

const matchesStore = useMatchesStore();
const { matchesByDate } = storeToRefs(matchesStore)

onMounted(() => {
  matchesStore.loadMatches();
})
</script>

<template>
  <main class="d-flex flex-row gap-2 container flex-wrap">
    <MatchItem v-for="(match, index) in matchesByDate" :key="match.id" :item="match" />
  </main>
</template>
