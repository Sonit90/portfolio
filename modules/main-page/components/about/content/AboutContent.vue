<script setup lang="ts">
import { ContentElement } from "./types";
import { contentComponentsMap } from "./helpers";
defineProps<{
  content: ContentElement[];
}>();
</script>

<template>
  <component
    :is="contentComponentsMap[element.type]"
    v-for="(element, index) in content"
    :key="index"
    v-bind="{ ...element.attributes }"
  >
    {{ element.content }}
  </component>
</template>
