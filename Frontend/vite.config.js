import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; 
import fs from 'fs';

export default defineConfig({
  plugins: [react()], 
  server: {
    host: `localhost`,
    port: 5173,
    proxy: {
      "/api": {
        target: "https://ahorrapp-react-pkj9.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});