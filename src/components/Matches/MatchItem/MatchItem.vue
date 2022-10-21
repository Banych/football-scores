<script setup lang="ts">
import type { IMatch } from '../../../models/IMatch';
import VCard from '../../ui-kit/VCard/VCard.vue';

export type MatchItemProps = {
  item: IMatch;
};

defineProps<MatchItemProps>();
</script>

<template>
  <VCard class="width-fill-available">
    <template #title>
      <img
        v-if="item.competition.area"
        :src="item.competition.area.ensignUrl"
        :alt="item.competition.area.name"
        width="20"
      />
      {{ `${new Date(item.utcDate).toLocaleString()} - ${item.status}` }}
    </template>
    <template #subTitle>
      <span>{{ `${item.homeTeam.name} - ${item.awayTeam.name}` }}</span>
    </template>
    <div>
      {{ item.competition.name }}
    </div>
  </VCard>
</template>

<style scoped></style>
