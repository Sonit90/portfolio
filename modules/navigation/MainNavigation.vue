<script setup lang="ts">
import { ref } from "@vue/reactivity";

const sidebarOpened = ref(false);

function openSidebar() {
  sidebarOpened.value = true;
  document.documentElement.style.overflow = "hidden";
}

function closeSidebar() {
  sidebarOpened.value = false;
  document.documentElement.style.overflow = "auto";
}

function toggleMenu() {
  if (sidebarOpened.value) {
    closeSidebar();
    return;
  }
  openSidebar();
}

const menuItems = [
  { title: "Main Page", link: "/" },
  { title: "Portfolio", link: "/portfolio" },
];
</script>
<template>
  <nav class="sm:hidden px-6 py-3 flex">
    <font-awesome-icon class="w-6" icon="fa-bars" @click="toggleMenu()" />
    <div
      v-show="sidebarOpened"
      class="h-full w-full bg-black bg-opacity-40 fixed left-0 top-0"
      @click="closeSidebar()"
    />

    <div
      class="w-[240px] fixed left-0 top-0 bg-black h-full -translate-x-full transition-transform z-100"
      :class="{ 'translate-x-0': sidebarOpened }"
    >
      <ul class="py-4">
        <li v-for="{ title, link } in menuItems" :key="title" class="p-2">
          <NuxtLink
            :to="link"
            @click.native="closeSidebar()"
            class="text-slate-500"
            active-class="!text-white"
          >
            {{ title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
