<script lang="ts" setup>
import SocialIcon from "./components/footer/SocialIcon";

const socials = [
  { icon: "fa-github", link: "https://github.com/Sonit90" },
  { icon: "fa-instagram", link: "https://www.instagram.com/uralskiy.d/" },
  {
    icon: "fa-linkedin",
    link: "https://www.linkedin.com/in/dmitriy-uralskiy-b7254b204/",
  },
];
</script>
<template>
  <footer class="lg:pb-24 flex mt-8 gap-6">
    <SocialIcon v-for="{ icon, link } in socials" :icon="icon" :link="link" />
  </footer>
</template>
