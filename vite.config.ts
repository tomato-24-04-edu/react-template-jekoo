import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgrPlugin()],
  server: {
    open: true,
    port: 3000,
  },
  resolve: {
    alias: {
      "@": "/src",
      "store/": "/src/store/",
      "configs/": "/src/configs/",
      "types/": "/src/types/",
      "main/": "src/main/",
    },
  },
});
