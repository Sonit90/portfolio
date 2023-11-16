<script setup lang="ts">
// import MainNavigation from "~/modules/navigation/MainNavigation.vue";

useHead({
  bodyAttrs: {
    class:
      "bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900",
  },
});
</script>

<template>
  <!--  <MainNavigation />-->
  <div
    class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0"
  >
    <slot />
  </div>
</template>
