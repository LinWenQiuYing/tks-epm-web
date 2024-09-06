<template>
  <a-layout class="app-layout">
    <a-layout-header class="header">
      <div class="logo">
        <img src="@assets/images/img/logo.svg" alt="" />
        <span class="title">设备健康与故障诊断系统</span>
      </div>
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="horizontal"
        class="layout-menu"
        :items="menuItems"
        @click="handleSelectMenu"
      />
    </a-layout-header>
    <a-layout class="container">
      <a-layout-content class="container-content">
        <router-view v-slot="{ Component }" v-if="route.meta.keepAlive">
          <transition>
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </transition>
        </router-view>
        <router-view v-else></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import type { MenuProps } from "ant-design-vue";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

interface MenuItem {
  key: string;
  label: string;
  path: string;
}

const route = useRoute();
const router = useRouter();
const selectedKeys = ref<string[]>(["1"]);
const menuItems = ref<MenuItem[]>([
  {
    key: "1",
    label: "健康态势",
    path: "/situation",
  },
  {
    key: "2",
    label: "故障预测",
    path: "/prediction",
  },
  {
    key: "3",
    label: "故障诊断",
    path: "/diagnosis",
  },
  {
    key: "4",
    label: "故障统计",
    path: "/statistics",
  },
  {
    key: "5",
    label: "智能检索",
    path: "/search",
  },
  {
    key: "6",
    label: "知识中心",
    path: "/center",
  },
]);

const handleSelectMenu: MenuProps["onClick"] = (menuInfo) => {
  router.push(menuInfo.item.path);
};

// 初始化时根据路由选中对应菜单
onMounted(() => {
  const path = route.path;
  const index = menuItems.value.findIndex((item) => item.path === path);
  if (index !== -1) {
    selectedKeys.value = [menuItems.value[index].key];
  } else {
    selectedKeys.value = [menuItems.value[0].key];
  }
});
</script>
<style scoped lang="less">
.app-layout {
  width: 100%;
  height: 100%;
  background: #000b11;

  .header {
    background: url("../assets/images/img/bg-header.svg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 72px;
    line-height: 72px;
    display: flex;
    align-items: center;

    .logo {
      display: flex;
      align-items: center;
      margin-right: 100px;

      img {
        margin-right: 20px;
      }

      .title {
        color: #fff;
        font-family: "DingTalk";
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
      }
    }

    .layout-menu {
      background-color: transparent;
      display: flex;
      align-items: center;

      :deep(.ant-menu-item) {
        color: #fff;
        width: 120px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        font-size: 18px;
        font-family: "DingTalk";
        margin-right: 10px;
        background-image: url("../assets/images/img/menu-bg.svg");
        background-position: bottom;

        &:last-child {
          margin-right: 0;
        }

        &.ant-menu-item-selected {
          background-color: transparent;
          background-image: url("../assets/images/img/menu-bg-active.svg");
          background-position: bottom 56px left 165px;
        }
      }
    }
  }

  .container {
    padding: 24px;
    background: transparent;
    background-image: url("../assets/images/img/main-bg.svg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
    overflow: auto;

    .container-content {
      overflow: auto;
      min-height: 600px;
    }
  }
}
</style>
