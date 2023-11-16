<script setup lang="ts">
import ExperienceItem from "~/modules/main-page/components/experience/ExperienceItem.vue";
import { jobPositions } from "data-info/resume";
</script>

<template>
  <ol class="group">
    <ExperienceItem
      v-for="(position, index) in jobPositions"
      :key="index"
      class="mb-12"
      :end-date="position.endDate"
      :role-title="position.roleTitle"
      :company-name="position.companyName"
      :start-date="position.startDate"
      :description="position.description"
      :achievements="position.achievements"
      :skills="position.skills"
    />
  </ol>
</template>
