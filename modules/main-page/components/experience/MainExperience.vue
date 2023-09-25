<script setup lang="ts">
import ExperienceItem from "~/modules/main-page/components/experience/ExperienceItem.vue";
import json from "~/static/json/data.json";
</script>

<template>
  <ol class="group">
    <ExperienceItem
      v-for="(experience, index) in json.experience"
      :key="index"
      class="mb-12"
      :end-date="experience.endDate"
      :role-title="experience.roleTitle"
      :company-name="experience.companyName"
      :start-date="experience.startDate"
      :description="experience.description"
      :achievements="experience.achievements"
      :skills="experience.skills"
    />
  </ol>
</template>
