<script setup lang="ts">
import ExperienceSkillBadge from "~/modules/main-page/components/experience/ExperienceSkillBadge.vue";

defineProps<{ skills?: string[] }>();
</script>

<template>
  <ul v-if="skills" class="mt-4 flex flex-wrap gap-4">
    <ExperienceSkillBadge
      v-for="(skill, index) in skills"
      :key="index"
      :skill="skill"
    />
  </ul>
</template>
