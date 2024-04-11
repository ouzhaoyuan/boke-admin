import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src")
      }
    },
    server: {
      host: "0.0.0.0", // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
      cors: true,
      // https: false,
      // 代理跨域（mock 不需要配置，这里只是个事列）
      proxy: {
        "/api": {
          target: "https://mock.mengxuegu.com/mock/661501add985433db203d919", // easymock
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, "")
        }
      }
    },
    plugins: [react()]
  };
});
