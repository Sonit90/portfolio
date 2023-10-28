<script lang="ts" setup>
defineProps<{
  icon: "fa-github" | "fa-instagram" | "fa-linked-in";
  link: string;
}>();
</script>
<template>
  <NuxtLink
    class="text-inherit hover:text-slate-200"
    :to="link"
    target="_blank"
  >
    <font-awesome-icon class="w-6 h-6" :icon="'fa-brands ' + icon" />
  </NuxtLink>
</template>
