<script setup lang="ts">
import { ContentWrapper } from "./types";
import AboutContent from "./AboutContent.vue";
import { wrapperComponentsMap } from "./helpers";

defineProps<{
  wrappers: ContentWrapper[];
}>();
</script>

<template>
  <component
    :is="wrapperComponentsMap[wrapper.type]"
    v-for="(wrapper, index) in wrappers"
    :key="index"
  >
    <AboutContent :content="wrapper.content" />
  </component>
</template>
