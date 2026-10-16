import DefaultTheme from "vitepress/theme";
import { ThemePicker } from "vitepress-bigbang";
import "vitepress-bigbang/style.css";

export default {
  extends: DefaultTheme,
  enhanceApp() {
    ThemePicker.setPrimary("Cyan");
    ThemePicker.setSurface("Slate");
  },
};
