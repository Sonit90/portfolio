<script setup lang="ts">
defineProps<{
  achievements?: string[];
}>();
</script>

<template>
  <ul v-if="achievements" class="mt-4">
    <li
      v-for="(achievement, index) in achievements"
      :key="index"
      class="flex items-center gap-4 mb-4 leading-normal text-sm"
    >
      <nuxt-icon class="fill-teal-300" filled name="goblet" />
      {{ achievement }}
    </li>
  </ul>
</template>
