<script setup lang="ts">
import ExperienceSkills from "~/modules/main-page/components/experience/ExperienceSkills.vue";
import ExperienceAchievements from "~/modules/main-page/components/experience/ExperienceAchievements.vue";

defineProps<{
  achievements?: string[];
  companyName: string;
  description: string;
  endDate: string;
  roleTitle: string;
  skills?: string[];
  startDate: string;
}>();
</script>

<template>
  <li
    class="group/item transition-all relative flex gap-2 lg:group-hover:opacity-50 lg:hover:!opacity-100"
  >
    <div
      class="transition motion-reduce:transition-none rounded-md absolute block -inset-x-4 -inset-y-4 z-0 lg:group-hover/item:bg-slate-800/50 lg:group-hover/item:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover/item:drop-shadow-lg"
    />
    <header
      class="z-10 text-xs font-semibold uppercase tracking-wide text-slate-500 basis-1/4"
    >
      {{ startDate }} - {{ endDate }}
    </header>
    <div class="z-10 basis-3/4">
      <h3 class="text-base font-medium leading-tight text-slate-200">
        {{ roleTitle }}
        <template v-if="companyName"> · {{ companyName }} </template>
      </h3>
      <p class="mt-2 text-sm leading-normal" v-text="description" />

      <ExperienceAchievements :achievements="achievements" />

      <ExperienceSkills :skills="skills" />
    </div>
  </li>
</template>
