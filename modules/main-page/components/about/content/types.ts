export const WrapperMap = {
  Paragraph: "paragraph",
} as const;
type WrapperType = (typeof WrapperMap)[keyof typeof WrapperMap];

export const ContentMap = {
  Text: "text",
  Link: "link",
  NuxtLink: "nuxt-link",
} as const;

type ContentText = {
  type: typeof ContentMap.Text;
  content: string;
  attributes?: never;
};

type ContentLink = {
  type: typeof ContentMap.Link;
  content: string;
  attributes: {
    href: string;
  };
};

type ContentRouterLink = {
  type: typeof ContentMap.NuxtLink;
  content: string;
  attributes: {
    to: string;
  };
};

export type ContentElement = ContentText | ContentLink | ContentRouterLink;

export interface ContentWrapper {
  type: WrapperType;
  content: ContentElement[];
}
