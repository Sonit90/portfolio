import { ContentWrapper } from "~/modules/main-page/components/about/content/types";
export const mainPage: ContentWrapper[] = [
  {
    type: "paragraph",
    content: [
      {
        type: "text",
        content:
          "I'm a passionate Vue.js developer with over 5 years of experience in web development. I’ve had the privilege of building software for an ",
      },
      {
        type: "link",
        content: "real estate corporation",
        attributes: {
          href: "https://weking29.ru/",
          target: "_blank",
        },
      },
      {
        type: "text",
        content: " with ",
      },
      {
        type: "link",
        content: "visual selection of flats",
        attributes: {
          href: "https://akvilon-sky.ru/real-estate/visual-select/",
          target: "_blank",
        },
      },
      {
        type: "text",
        content: ", an ",
      },
      {
        type: "link",
        content: "ISP in Saint Petersburg",
        attributes: {
          href: "https://skynet.ru/",
          target: "_blank",
        },
      },
      {
        type: "text",
        content: " and a ",
      },
      {
        type: "link",
        content: "luxury children clothes brand",
        attributes: {
          href: "https://bambinifashion.com/",
          target: "_blank",
        },
      },
      {
        type: "text",
        content: " and ",
      },
      {
        type: "nuxt-link",
        content: "many other projects",
        attributes: {
          to: "/portfolio",
        },
      },
      {
        type: "text",
        content: ", that are not mentioned here.",
      },
    ],
  },
  {
    type: "paragraph",
    content: [
      {
        type: "text",
        content:
          "When I'm away from PC, I usually hang out with my friends, play board games or go to some meetings",
      },
    ],
  },
  {
    type: "paragraph",
    content: [
      {
        type: "text",
        content:
          "Feel free to explore my portfolio and reach out for potential collaborations. Let's create something incredible together!",
      },
    ],
  },
];
