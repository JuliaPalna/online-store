import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import {  nodePolyfills  }  from  'vite-plugin-node-polyfills';
import autoprefixer from 'autoprefixer';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  //выгрузка всех переменных
  const env: Record<string, string> = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react(), 
      nodePolyfills({
        overrides: {
          // Since `fs` is not supported in browsers, we can use the `memfs` package to polyfill it.
          fs: 'memfs',
        },
      }),
    ],
    css: {
      postcss: {
        plugins: [autoprefixer({})],
      },
    },

    server: {
      port: +env.PORT,
    },

    preview: {
      port: +env.PORT,
    },
  };
});
