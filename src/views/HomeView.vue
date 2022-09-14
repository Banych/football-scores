<script setup lang="ts">
import { onMounted } from 'vue';
import { useMatchesStore } from '../stores/MatchesStore';
import MatchItem from '../components/Matches/MatchItem/MatchItem.vue';
import { storeToRefs } from 'pinia';
import VLoader from '../components/ui-kit/VLoader/VLoader.vue';

const matchesStore = useMatchesStore();
const { matchesByDate, isLoading } = storeToRefs(matchesStore)

onMounted(() => {
  matchesStore.loadMatches();
})
</script>

<template>
  <VLoader v-if="isLoading" :size="99" />
  <MatchItem v-for="(match, index) in matchesByDate" :key="match.id" :item="match" />
</template>

<style scoped lang="scss">

</style>
