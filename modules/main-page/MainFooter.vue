<script lang="ts" setup>
import SocialIcon from "./components/footer/SocialIcon";

const socials = [
  {
    icon: "fa-brands fa-github",
    link: "https://github.com/Sonit90",
    title: "GitHub",
  },
  {
    icon: "fa-brands fa-instagram",
    link: "https://www.instagram.com/uralskiy.d/",
    title: "Instagram",
  },
  {
    icon: "fa-brands fa-linkedin",
    link: "https://www.linkedin.com/in/dmitriy-uralskiy-b7254b204/",
    title: "LinkedIn",
  },
  {
    icon: "fa-arrow-up-right-from-square",
    link: "https://resume.uralskii.com/",
    title: "Resume",
  },
];
</script>
<template>
  <footer class="lg:pb-24 flex mt-8 gap-6">
    <SocialIcon
      v-for="{ icon, link, title } in socials"
      :icon="icon"
      :link="link"
      :title="title"
    />
  </footer>
</template>
