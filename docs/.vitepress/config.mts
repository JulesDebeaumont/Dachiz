import { defineConfig, mergeConfig, UserConfig } from "vitepress";
import { sidebar } from "./generated/sidebar.ts";
import { vitepressBigBangConfig, frenchTranslate } from "vitepress-bigbang";

// https://vitepress.dev/reference/site-config
export default defineConfig(
  mergeConfig(vitepressBigBangConfig as UserConfig, {
    title: "Dachiz",
    description: "Dachiz, les recettes qui déchirent",
    base: "/Dachiz/",
    themeConfig: {
      sidebar,
      ...frenchTranslate,
    },
  }),
);
