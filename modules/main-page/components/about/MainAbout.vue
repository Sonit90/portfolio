<script setup lang="ts">
import { mainPage } from "~/static/data/main_page";
import AboutWrapper from "./content/AboutWrapper.vue";
</script>
<template>
  <section
    class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 gap-y-4 flex flex-col"
  >
    <about-wrapper :wrappers="mainPage" />
    <a
      class="w-full inline-block rounded mb-4"
      download=""
      href="https://resume.uralskii.com/Dmitrii_Uralskii.pdf"
      target="_blank"
    >
      Download resume (PDF) ↓
    </a>
  </section>
</template>
