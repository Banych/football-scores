<script setup lang="ts">
import { computed } from 'vue';
import type { Match } from '../../../models/classes/Match';
import { dateFormat } from '../../../utils/dateFormat';

export type MatchItemProps = {
  item: Match;
};

const props = defineProps<MatchItemProps>();

const formattedStartDate = computed(() => dateFormat(props.item.startDate));

const matchStatus = computed(() => props.item.status);
</script>

<template>
  <div class="d-table-row gap-2 mb-1">
    <div class="match-status">
      {{ matchStatus }}
    </div>
    <div class="home-team d-table-cell text-align-right px-2 py-1">
      {{ item.homeTeam.name }}
    </div>
    <div class="score d-table-cell px-2 py-1" v-if="item.score.fullTimeScore">
      {{ item.score.fullTimeScore }}
    </div>
    <div class="startTime d-table-cell px-2 py-1" v-else>
      {{ formattedStartDate }}
    </div>
    <div class="away-team d-table-cell text-align-left px-2 py-1">
      {{ item.awayTeam.name }}
    </div>
  </div>
</template>

<style scoped>
.d-table-row:hover {
  background-color: rgba(0, 0, 0, 0.08);
}
</style>
