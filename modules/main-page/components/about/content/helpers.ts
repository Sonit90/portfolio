import { WrapperMap, ContentMap } from "./types";
export const wrapperComponentsMap = {
  [WrapperMap.Paragraph]: "p",
};

export const contentComponentsMap = {
  [ContentMap.Text]: "span",
  [ContentMap.Link]: "a",
  [ContentMap.RouterLink]: "router-link",
};
