<template>
  <div class="history-list">
    <div class="history-list-content">
      <div class="history-list-header">
        <span class="header-label">日期选择：</span>
        <a-range-picker v-model:value="timeValue" class="header-picker" :allow-clear="false" />
      </div>
      <a-table
        ref="tableRef"
        :columns="columns"
        :data-source="data"
        size="small"
        class="history-list-table"
        :scroll="{ y: 'calc(100% - 44px)' }"
      ></a-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Dayjs } from "dayjs";
import { onMounted, ref } from "vue";

type RangeValue = [Dayjs, Dayjs];

const timeValue = ref<RangeValue>();

const tableRef = ref();

const columns = [
  {
    title: "序号",
    dataIndex: "index",
    key: "index",
    width: 60,
  },
  {
    title: "预测时间",
    dataIndex: "time",
    key: "time",
    width: 160,
  },
  {
    title: "预测类型",
    dataIndex: "type",
    key: "type",
    width: 140,
  },
  {
    title: "卫星",
    dataIndex: "name",
    key: "name",
    width: 160,
  },
  {
    title: "说明",
    dataIndex: "desc",
    key: "desc",
    width: 270,
  },
];

const data = [
  {
    key: "1",
    index: "1",
    time: "2023-01-01 10:00:00",
    type: "识别字错误",
    name: "0a星",
    desc: "XWER类数据预处理执行流程报错",
  },
  {
    key: "2",
    index: "2",
    time: "2023-01-01 10:00:00",
    type: "识别字错误",
    name: "0a星",
    desc: "XWER类数据预处理执行流程报错",
  },
  {
    key: "3",
    index: "3",
    time: "2023-01-01 10:00:00",
    type: "识别字错误",
    name: "0a星",
    desc: "XWER类数据预处理执行流程报错",
  },
  {
    key: "4",
    index: "4",
    time: "2023-01-01 10:00:00",
    type: "识别字错误",
    name: "0a星",
    desc: "XWER类数据预处理执行流程报错",
  },
  {
    key: "5",
    index: "5",
    time: "2023-01-01 10:00:00",
    type: "识别字错误",
    name: "0a星",
    desc: "XWER类数据预处理执行流程报错",
  },
];

onMounted(() => {});
</script>

<style scoped lang="less">
.history-list {
  width: 100%;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;

  &-content {
    height: 100%;
    color: #fff;
    padding: 20px;
    border: 1px solid #0a84ff80;
    overflow: hidden;

    .history-list-header {
      display: flex;
      align-items: center;
      height: 32px;
      margin-bottom: 20px;

      .header-label {
        color: #ffffffa6;
        margin-right: 8px;
      }

      .header-picker {
        background-color: transparent;
        border-radius: 2px;
        border: 1px solid #0a84ff;

        :deep(.ant-picker-separator),
        :deep(.ant-picker-suffix) {
          color: #ffffff99;
        }
      }
    }

    .history-list-table {
      height: calc(100% - 52px);

      :deep(.ant-spin-nested-loading) {
        height: 100%;

        .ant-spin-container {
          height: 100%;

          .ant-table {
            height: calc(100% - 36px);
            background-color: transparent;

            .ant-table-container {
              height: 100%;

              .ant-table-header {
                border-radius: 0;
              }

              .ant-table-body {
                overflow-x: hidden;
                margin-top: 4px;

                table {
                  border-spacing: 0 4px;
                }
              }
            }

            .ant-table-thead {
              height: 40px;
              margin-bottom: 4px;

              .ant-table-cell {
                padding: 10px;
                line-height: 20px;
                border: 0;
                border-radius: 0;
                background: #022f5c;
                color: #fff;
                font-size: 14px;
                font-weight: 500;
                box-shadow: none !important;

                &::before {
                  content: none !important;
                }
              }
            }

            .ant-table-tbody {
              position: relative;
              bottom: 8px;

              .ant-table-row {
                background: linear-gradient(
                  270deg,
                  rgba(10, 132, 255, 0) 0%,
                  rgba(10, 132, 255, 0.1) 50%,
                  rgba(10, 132, 255, 0) 100%
                );
                color: rgba(255, 255, 255, 0.65);

                &:hover {
                  background: url("../../../../assets/images/img/item-bg-active3.svg");
                  background-repeat: no-repeat;
                  background-size: cover;

                  .ant-table-cell {
                    background: transparent;
                  }
                }

                .ant-table-cell {
                  border: 0;
                  padding: 5px 10px;
                  transition: none;

                  &.ant-table-cell-row-hover {
                    background-color: transparent;
                    transition: none !important;
                    padding: 5px 10px !important;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
