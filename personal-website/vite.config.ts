import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "./src/crapsgame/crapsgame.js",
          dest: "crapsgame",
          rename: "crapsgame.js",
        },
        {
          src: "./src/randomQuoteGenerator/randomQuoteGenerator.js",
          dest: "randomQuoteGenerator",
          rename: "randomQuoteGenerator.js",
        },
        {
          src: "./src/aboutmesection/ONUMA_ELEANYA_GIFT_CV.pdf",
          dest: "aboutmesection",
          rename: "ONUMA_ELEANYA_GIFT_CV.pdf",
        },
      ],
    }),
  ],
});
