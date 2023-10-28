<script setup lang="ts">
import { ContentElement, ContentMap } from "./types";
import { contentComponentsMap } from "./helpers";
defineProps<{
  content: ContentElement[];
}>();

function getComponent(elementType: ContentMap) {
  if (elementType === "nuxt-link") {
    return defineNuxtLink({});
  }
  return contentComponentsMap[elementType];
}
</script>

<template>
  <component
    :is="getComponent(element.type)"
    v-for="(element, index) in content"
    :key="index"
    v-bind="{ ...element.attributes }"
  >
    {{ element.content }}
  </component>
</template>
