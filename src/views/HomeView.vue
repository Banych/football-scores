<script setup lang="ts">
import { onMounted } from 'vue';
import { useMatchesStore } from '../stores/MatchesStore';
import MatchItem from '../components/Matches/MatchItem/MatchItem.vue';
import { storeToRefs } from 'pinia';
import VLoader from '../components/ui-kit/VLoader/VLoader.vue';
import VScrollable from '../components/ui-kit/VScrollable/VScrollable.vue';

const matchesStore = useMatchesStore();
const { matchesByDate, isLoading } = storeToRefs(matchesStore)

onMounted(() => {
  matchesStore.loadMatches();
})
</script>

<template>
  <VScrollable>
    <div class="d-flex flex-wrap gap-1 justify-content-center mx-1">
      <VLoader v-if="isLoading" :size="99" />
      <MatchItem v-for="(match, index) in matchesByDate" :key="match.id" :item="match" />
    </div>
  </VScrollable>
</template>

<style scoped lang="scss">
.content {
  height: 100%;
  display: flex;
}

.scrollable {
  overflow: scroll;
  flex: 1 0 100%;
}
</style>
