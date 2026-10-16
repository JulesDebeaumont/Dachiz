import { computeSidebar, computeIndexMd } from "vitepress-bigbang/scripts";

console.log("Compute started...");
computeSidebar();
computeIndexMd({
  primary: "Cyan",
  surface: "Slate",
});
console.log("🎉 Compute done");
