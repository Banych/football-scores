<script setup lang="ts">
import type { IMatch } from '../../../models/IMatch';
import VCard from '../../ui-kit/VCard/VCard.vue';

export type MatchItemProps = {
  item: IMatch;
}

const props = defineProps<MatchItemProps>();
</script>

<template>
  <VCard>
    <div class="d-flex gap-1">
      <h5>{{item.homeTeam.name}} - {{item.awayTeam.name}}</h5>
      <h6>{{item.status}}</h6>
    </div>
  </VCard>
</template>

<style scoped>

</style>