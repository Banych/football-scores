<script setup lang="ts">
import type { IMatch } from '../../../models/IMatch';
import VCard from '../../ui-kit/VCard/VCard.vue';

export type MatchItemProps = {
  item: IMatch;
}

const props = defineProps<MatchItemProps>();
</script>

<template>
  <VCard :title="`${item.homeTeam.name} - ${item.awayTeam.name}`"
    :subTitle="new Date(item.utcDate).toLocaleString()" class="width-fill-available">
    <div class="d-flex gap-1">
      <span>{{item.status}}</span>
    </div>
  </VCard>
</template>

<style scoped>

</style>