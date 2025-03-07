import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/testing.ts",
  },
});
