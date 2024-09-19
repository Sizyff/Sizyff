import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { viteStaticCopy } from "vite-plugin-static-copy";

/** @type {import("vite").UserConfig} */
export default {
  root: "src",
  publicDir: false,
  build: {
    outDir: "../build",
    emptyOutDir: true,
  },
  plugins: [
    ViteImageOptimizer({
      png: {
        quality: 90,
      },
      jpeg: {
        quality: 90,
      },
      webp: {
        lossless: false,
        quality: 90,
      },
      avif: {
        lossless: false,
        quality: 90,
      },
    }),
    viteStaticCopy({
      targets: [
        {
          src: "CNAME",
          dest: ".",
        },
        {
          src: "robots.txt",
          dest: ".",
        },
        {
          src: "sitemap.xml",
          dest: ".",
        },
      ],
    }),
  ],
};
