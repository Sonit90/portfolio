<script lang="ts" setup>
defineProps<{
  icon: "fa-github" | "fa-instagram" | "fa-linked-in";
  link: string;
}>();
</script>
<template>
  <a
    class="text-inherit hover:text-slate-200"
    :href="link"
    target="_blank"
    rel="noreferrer"
  >
    <font-awesome-icon class="w-6 h-6" :icon="'fa-brands ' + icon" />
  </a>
</template>
