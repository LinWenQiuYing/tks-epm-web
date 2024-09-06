<template>
  <div class="fault-prediction">
    <a-tabs v-model:activeKey="activeKey" animated>
      <a-tab-pane key="tasks" tab="预测任务">
        <Tasks />
      </a-tab-pane>
      <a-tab-pane key="history" tab="历史预测">
        <History />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import History from "./components/history/index.vue";
import Tasks from "./components/tasks/index.vue";

const activeKey = ref("tasks");
</script>

<style scoped lang="less">
.fault-prediction {
  width: 100%;
  height: 100%;

  :deep(.ant-tabs) {
    height: 100%;

    .ant-tabs-nav {
      padding-bottom: 8px;
      margin-bottom: 14px;
      border-bottom: 2px solid rgba(255, 255, 255, 0.2);

      &::before,
      &::after {
        content: "";
        display: block;
        width: 16px;
        height: 2px;
        background: #fed9a6;
        position: absolute;
        bottom: -2px;
      }

      &::after {
        right: 0;
      }

      .ant-tabs-tab {
        height: 40px;
        padding: 0;
        color: #cae5ff;
        font-size: 16px;
        font-weight: 500;
        width: 220px;
        justify-content: center;
        background-image: url("../../assets/images/img/tabs-item-bg.svg");
        background-position: bottom;
        background-repeat: no-repeat;
        margin: 0 8px 0 0;

        &.ant-tabs-tab-active {
          background-image: url("../../assets/images/img/tabs-item-bg-active.svg");

          .ant-tabs-tab-btn {
            color: #fff;
          }
        }
      }

      .ant-tabs-ink-bar {
        display: none;
      }
    }

    .ant-tabs-content {
      height: 100%;
    }
  }
}
</style>
