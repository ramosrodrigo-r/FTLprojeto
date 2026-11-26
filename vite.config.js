import { defineConfig } from "vite";
import { cpSync } from "node:fs";
import { resolve } from "node:path";

// Files loaded at runtime by <eox-storytelling> (not imported by JS),
// so Vite won't bundle them on its own. They are copied into dist/ as-is.
const staticFiles = ["elnino2.md", "assets"];

export default defineConfig({
  // Relative base so the site works under https://<user>.github.io/<repo>/
  base: "./",
  plugins: [
    {
      name: "copy-story-files",
      apply: "build",
      closeBundle() {
        for (const f of staticFiles) {
          cpSync(resolve(__dirname, f), resolve(__dirname, "dist", f), { recursive: true });
        }
      },
    },
  ],
});
