<script setup lang="ts">
import MainFooter from "~/modules/main-page/MainFooter.vue";
</script>

<template>
  <div class="lg:justify-between lg:flex-col lg:w-1/2">
    <header
      class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:flex-col lg:flex-start lg:pt-24"
    >
      <h1 class="tracking-tight font-bold text-slate-200 text-5xl mb-3">
        Dmitriy Uralskiy
      </h1>
      <h2
        class="text-lg font-medium tracking-tight text-slate-200 sm:text-xl mb-4"
      >
        Frontend Vue.js developer
      </h2>
      <p class="max-w-xs leading-normal">
        I specialize in crafting dynamic and user-friendly web applications
      </p>
    </header>
    <MainFooter />
  </div>
</template>
