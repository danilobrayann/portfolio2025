// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // garante que @/ -> ./src
      "@": path.resolve(__dirname, "src"),
    },
  },
  // caso precise funcionar em CI com caminhos relativos
  server: {
    fs: {
      strict: false,
    },
  },
});
