<template>
  <div class="analysis-config">
    <HeaderTitle title="预测分析配置" />
    <div class="analysis-config-content">
      <div class="content-container">
        <div class="content-header">
          <div class="content-header-btn">
            <PlusOutlined />
            新增预测任务
          </div>
          <a-radio-group v-model:value="radioValue">
            <a-radio :value="1">自动分析</a-radio>
            <a-radio :value="2">手动分析</a-radio>
          </a-radio-group>
        </div>
        <div class="content-item">
          <span class="content-item-label">选择参数：</span>
          <a-select
            v-model:value="paramsValue"
            :options="paramsOptions"
            class="content-item-input"
            mode="multiple"
            showArrow
            placeholder="请选择"
          />
        </div>
        <div class="content-item content-tags" v-show="paramsValue && paramsValue.length">
          <div class="content-tag" v-for="item in paramsValue" :key="item">{{ item }}</div>
        </div>
        <div class="content-item">
          <span class="content-item-label">分析周期：</span>
          <a-input v-model:value="cycle" class="content-item-input" placeholder="请输入" />
        </div>
        <div class="content-item">
          <span class="content-item-label">预测时长：</span>
          <a-input v-model:value="predictTime" class="content-item-input" placeholder="请输入" />
        </div>
        <div class="content-item">
          <span class="content-item-label">结束时间：</span>
          <a-input v-model:value="endTime" class="content-item-input" placeholder="请输入" />
        </div>
        <div class="content-item">
          <span class="content-item-label">选择方法：</span>
          <a-select
            v-model:value="way"
            :options="wayOptions"
            class="content-item-input"
            placeholder="请选择"
          />
        </div>
        <div class="content-item">
          <span class="content-item-label">预测门限：</span>
          <a-input v-model:value="limit" class="content-item-input" placeholder="请输入" />
        </div>
      </div>
      <div class="content-footer">
        <a-button @click="handleStop" ghost>停止</a-button>
        <a-button type="primary" @click="handleStart" ghost>开始</a-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PlusOutlined } from "@ant-design/icons-vue";
import type { SelectProps } from "ant-design-vue";
import { reactive, ref, toRefs } from "vue";

interface ConfigParams {
  radioValue: number;
  paramsValue: number[] | undefined;
  cycle: string | undefined;
  predictTime: string | undefined;
  endTime: string | undefined;
  way: number | undefined;
  limit: number | undefined;
}

const paramsOptions = ref<SelectProps["options"]>(
  [...Array(25)].map((_, i) => ({ value: (i + 10).toString(36) + (i + 1) }))
);
const wayOptions = ref<SelectProps["options"]>([]);
const configParams = reactive<ConfigParams>({
  radioValue: 1,
  paramsValue: undefined,
  cycle: undefined,
  predictTime: undefined,
  endTime: undefined,
  way: undefined,
  limit: undefined,
});

const { radioValue, paramsValue, cycle, predictTime, endTime, way, limit } = toRefs(configParams);

const handleStop = () => {};
const handleStart = () => {};
</script>

<style scoped lang="less">
.analysis-config {
  width: 100%;
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 2;

  &-content {
    height: calc(100% - 50px);
    color: #fff;
    padding: 20px;
    border: 1px solid #0a84ff80;
    overflow: hidden;
    position: relative;

    .content-container {
      height: calc(100% - 52px);
      overflow: auto;
    }

    .content-header {
      display: flex;
      margin-bottom: 16px;
      align-items: center;
      justify-content: space-between;

      &-btn {
        border: 0;
        padding: 0;
        color: #0a84ff;
        font-size: 14px;
        cursor: pointer;
      }

      :deep(.ant-radio-group) {
        .ant-radio-wrapper {
          color: #ffffffa6;

          &.ant-radio-wrapper-checked {
            color: #fff;
          }
        }
      }
    }

    .content-item {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin-bottom: 16px;

      &.content-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        padding-left: 78px;

        .content-tag {
          width: 110px;
          height: 32px;
          color: #fff;
          text-align: center;
          line-height: 32px;
          background-image: url("../../../../assets/images/img/tag-bg.svg");
          background-repeat: no-repeat;
        }
      }

      &-label {
        width: 78px;
        color: rgba(255, 255, 255, 0.65);
      }

      &-input {
        flex: 1;
        border-color: #0080fe;
        border-radius: 2px;

        :deep(.ant-select-selector) {
          border-color: #0080fe;
          background: transparent;
          border-radius: 2px;
        }

        :deep(.ant-select-arrow) {
          color: #97a3b7;
        }
      }
    }

    .content-footer {
      position: absolute;
      bottom: 20px;
      right: 20px;

      :deep(.ant-btn) {
        margin-left: 10px;
      }
    }
  }
}
</style>
