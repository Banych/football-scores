<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{ size: number }>();

const fullSize = computed(() => `${props.size}px`);
const innerSize = computed(() => `${props.size * 0.3}px`);
const boxShadowSize = computed(() => `${props.size * 0.1}px`)
const boxShadowStart = computed(() => `-${innerSize.value} 0, ${innerSize.value} 0, 0 ${innerSize.value}, 0 -${innerSize.value}`);
const boxShadowEnd = computed(() => `-${boxShadowSize.value} 0, ${boxShadowSize.value} 0, 0 ${boxShadowSize.value}, 0 -${boxShadowSize.value}`);
</script>

<template>
  <div class="loader"></div>
</template>

<style scoped>
.loader {
  width: v-bind(fullSize);
  height: v-bind(fullSize);
  display: grid;
  background: #fff;
  filter: blur(5.8px) contrast(10);
  padding: 14.4px;
  mix-blend-mode: darken;
}

.loader:before {
  content: "";
  margin: auto;
  width: v-bind(innerSize);
  height: v-bind(innerSize);
  border-radius: 50%;
  color: #474bff;
  background: currentColor;
  box-shadow: v-bind(boxShadowStart);
  animation: loader-animation 0.6s infinite alternate;
}

@keyframes loader-animation {

  90%,
  100% {
    box-shadow: v-bind(boxShadowEnd);
    transform: rotate(180deg);
  }
}
</style>