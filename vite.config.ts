import vue from "@vitejs/plugin-vue";
import path from "path";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
import { defineConfig } from "vite";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
// @ts-expect-error no types
import eslintPlugin from "vite-plugin-eslint";

// 是否是生产环境
const isProduction = process.env.NODE_ENV === "production";

const localUrl0 = "http://172.22.205.17:9200";

const resolve = (dir: string) => path.resolve(__dirname, dir);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      include: ["src/**/*.ts", "src/**/*.js", "src/**/*.vue", "src/*.ts", "src/*.js", "src/*.vue"],
    }),
    Components({
      // 指定组件位置，默认是src/components
      dirs: ["src/components"],
      extensions: ["vue"],
      // 配置文件生成位置
      dts: "components.d.ts",
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), "src/assets/images/svg")],
      // 指定symbolId格式
      symbolId: "icon-[name]",
    }),
  ],
  /******配置模块解析的规则******/
  resolve: {
    //路径使用别名
    alias: {
      "@": resolve("src"),
      "@assets": resolve("src/assets"),
      "@components": resolve("src/components"),
      "@images": resolve("src/assets/images"),
      "@views": resolve("src/views"),
      "@store": resolve("src/store"),
      "@shared": resolve("src/shared"),
    },
    // 引入文件的后缀名称，可以省略。如果出现同名，按照数组加载的优先顺序
    extensions: [".js", ".ts", ".jsx", ".tsx", ".json", ".vue", ""],
  },
  // 8月更新，全局引入less
  css: {
    devSourcemap: !isProduction, // css sourceMap 配置
    preprocessorOptions: {
      less: {
        // 自定义css变量
        modifyVars: {
          hack: `true; @import (reference) "${path.resolve("src/assets/theme/style.less")}";`,
        },
        javascriptEnabled: true,
      },
    },
  },
  server: {
    https: false, // 是否开启 https
    open: false, // 是否自动在浏览器打开
    cors: true, // 允许跨域  8月更新
    port: 8088, // 端口号
    host: "0.0.0.0",
    proxy: {
      "/emp": {
        target: localUrl0,
        secure: false,
        changeOrigin: false,
        ws: false, //如果要代理 websockets，配置这个参数
      },
    },
  },
});
