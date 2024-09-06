import "nprogress/nprogress.css";

import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

import NProgress from "nprogress";

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const Layout = () => import("@/layout/Layout.vue");
const Siduation = () => import("@views/situation/index.vue");
const Prediction = () => import("@views/prediction/index.vue");
const Diagnosis = () => import("@views/diagnosis/index.vue");
const Statistics = () => import("@views/statistics/index.vue");
const Search = () => import("@views/search/index.vue");
const Center = () => import("@views/center/index.vue");

export const baseRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "layout",
    component: Layout,
    redirect: "siduation",
    children: [
      {
        path: "/siduation",
        name: "Siduation",
        component: Siduation,
      },
      {
        path: "/prediction",
        name: "Prediction",
        component: Prediction,
      },
      {
        path: "/diagnosis",
        name: "Diagnosis",
        component: Diagnosis,
      },
      {
        path: "/statistics",
        name: "Statistics",
        component: Statistics,
      },
      {
        path: "/search",
        name: "Search",
        component: Search,
      },
      {
        path: "/center",
        name: "Center",
        component: Center,
      },
    ],
  },
  // {
  //   path: "/login",
  //   name: "pierceLogin",
  //   component: pierceLogin,
  // },
  {
    path: "/:pathMatch(.*)*", // 使用 ":pathMatch" 参数及自定义正则表达式 ".+*" 来匹配任意路径
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: baseRoutes,
});

export default router;

// 全局路由守卫
router.beforeEach((to, from, next) => {
  next();
  NProgress.start();
  return;
});

router.afterEach(() => {
  NProgress.done();
});
