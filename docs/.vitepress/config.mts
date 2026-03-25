import { defineConfig } from "vitepress";
import { sidebar } from "./generated/sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dachiz",
  description: "Dachiz, les recettes qui déchirent",
  base: "/Dachiz/",
  themeConfig: {
    nav: [{ text: "Recettes", link: "/recipes/000_lexique" }],

    sidebar,
    outlineTitle: "Sur cette page",
    docFooter: {
      prev: false,
      next: false,
    },
    returnToTopLabel: "Retour en haut",
    darkModeSwitchLabel: "Apparance",
    lightModeSwitchTitle: "Clair",
    darkModeSwitchTitle: "Sombre",
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "Recherche",
          },
          modal: {
            footer: {
              navigateText: "Naviguer",
              selectText: "Sélectionner",
              closeText: "Fermer",
            },
            noResultsText: "Aucun résultat pour ",
          },
        },
      },
    },
  },
});
