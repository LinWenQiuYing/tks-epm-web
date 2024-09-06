<template>
  <div class="fault-list">
    <HeaderTitle title="故障列表">
      <template #default>
        <span class="title-more" @click="showMore">更多 <DoubleRightOutlined /> </span>
      </template>
    </HeaderTitle>
    <div class="fault-list-content">
      <a-table
        ref="tableRef"
        :columns="columns"
        :data-source="data"
        :pagination="false"
        size="small"
        class="fault-list-table"
        :scroll="{ y: 'calc(100% - 44px)' }"
      ></a-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { DoubleRightOutlined } from "@ant-design/icons-vue";
import { onMounted, ref } from "vue";

const showMore = () => {};

const tableRef = ref();

const columns = [
  {
    title: "时间",
    dataIndex: "time",
    key: "time",
    width: 160,
  },
  {
    title: "异常名称",
    dataIndex: "name",
    key: "name",
    width: 140,
  },
  {
    title: "参数",
    dataIndex: "params",
    key: "params",
    width: 120,
  },
  {
    title: "描述",
    key: "desc",
    dataIndex: "desc",
    width: 144,
    ellipsis: true,
  },
];

const data = [
  {
    key: "1",
    time: "2023-01-01 10:00:00",
    name: "温度异常",
    params: "TN19",
    desc: "testtesttesttesttesttesttesttest",
  },
  {
    key: "2",
    time: "2023-01-01 10:00:00",
    name: "温度异常",
    params: "TN19",
    desc: "testtesttesttesttesttesttesttest",
  },
  {
    key: "3",
    time: "2023-01-01 10:00:00",
    name: "温度异常",
    params: "TN19",
    desc: "testtesttesttesttesttesttesttest",
  },
  {
    key: "4",
    time: "2023-01-01 10:00:00",
    name: "温度异常",
    params: "TN19",
    desc: "testtesttesttesttesttesttesttest",
  },
  {
    key: "5",
    time: "2023-01-01 10:00:00",
    name: "温度异常",
    params: "TN19",
    desc: "testtesttesttesttesttesttesttest",
  },
];

onMounted(() => {});
</script>

<style scoped lang="less">
.fault-list {
  width: 100%;
  grid-column-start: 5;
  grid-column-end: 9;
  grid-row-start: 2;
  grid-row-end: 3;

  &-content {
    height: calc(100% - 50px);
    color: #fff;
    padding: 20px;
    border: 1px solid #0a84ff80;
    overflow: hidden;

    .fault-list-table {
      height: 100%;

      :deep(.ant-spin-nested-loading) {
        height: 100%;

        .ant-spin-container {
          height: 100%;

          .ant-table {
            height: 100%;
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
                  background: url("../../../assets/images/img/item-bg-active1.svg");
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
