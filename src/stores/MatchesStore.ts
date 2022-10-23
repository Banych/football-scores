import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import api from '../api';
import { Match } from '../models/classes/Match';

export const useMatchesStore = defineStore('matches', () => {
  const matches = ref<Map<number, Match>>(new Map<number, Match>());
  const isLoading = ref(false);

  const matchesByDate = computed(() => [ ...matches.value.values() ]);

  async function loadMatches() {
    try {
      isLoading.value = true;
      const matchResults = await api.Matches.list();
      matches.value = new Map<number, Match>(
        matchResults.map((match) => [ match.id, new Match(match) ])
      );
    } catch (error) {
      console.error(error);
    } finally {
      isLoading.value = false;
    }
  }

  return {
    isLoading,
    // matches,
    matchesByDate,
    loadMatches,
  };
});
