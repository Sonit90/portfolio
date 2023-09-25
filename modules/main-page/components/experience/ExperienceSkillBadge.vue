<script setup lang="ts">
defineProps<{
  skill: string;
}>();
</script>

<template>
  <li
    class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 cursor-default"
    v-text="skill"
  />
</template>
