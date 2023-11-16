<script lang="ts" setup>
defineProps<{
  icon:
    | "fa-brands fa-github"
    | "fa-brands fa-instagram"
    | "fa-brands fa-linked-in"
    | "fa-arrow-up-right-from-square";
  link: string;
  title?: string;
}>();
</script>
<template>
  <NuxtLink
    class="text-inherit hover:text-slate-200"
    :to="link"
    target="_blank"
    :title="title"
  >
    <font-awesome-icon class="w-6 h-6" :icon="icon" />
  </NuxtLink>
</template>
