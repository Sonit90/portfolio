import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { defineNuxtPlugin } from "nuxt/app";

config.autoAddCss = false;

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(
  faGithub,
  faInstagram,
  faLinkedin,
  faBars,
  faArrowUpRightFromSquare,
);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon, {});
});
