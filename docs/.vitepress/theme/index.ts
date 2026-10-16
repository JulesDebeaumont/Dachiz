import DefaultTheme from "vitepress/theme";
import { ThemePicker } from "vitepress-bigbang";
import "vitepress-bigbang/style.css";

export default {
  extends: DefaultTheme,
  enhanceApp() {
    if (typeof window === "undefined") {
      return;
    }
    ThemePicker.setPrimary("Cyan");
    ThemePicker.setSurface("Slate");
  },
};
