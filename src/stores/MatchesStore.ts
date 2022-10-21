import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import api from '../api';
import type { IMatch } from '../models/IMatch';

export const useMatchesStore = defineStore('matches', () => {
  const matches = ref<Map<number, IMatch>>(new Map<number, IMatch>());
  const isLoading = ref(false);

  const matchesByDate = computed(() =>
    Array.from(matches.value.values()).sort(
      (a: IMatch, b: IMatch) => Date.parse(a.utcDate) - Date.parse(b.utcDate)
    )
  );

  async function loadMatches() {
    try {
      isLoading.value = true;
      const matchResults = await api.Matches.list();
      matches.value = new Map<number, IMatch>(
        matchResults.matches.map((match) => [match.id, match])
      );
    } catch (error) {
      console.error(error);
    } finally {
      isLoading.value = false;
    }
  }

  return {
    isLoading,
    matches,
    matchesByDate,
    loadMatches,
  };
});
