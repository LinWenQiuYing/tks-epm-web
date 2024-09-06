<template>
  <div class="epm-list">
    <HeaderTitle title="设备列表" v-show="type === 'situation'" />
    <div class="epm-list-content">
      <a-tree
        v-if="treeData?.length"
        class="epm-list-tree"
        show-icon
        default-expand-all
        v-model:selectedKeys="selectedKeys"
        :tree-data="treeData"
      >
        <template #switcherIcon="{ switcherCls }"
          ><CaretDownOutlined :class="switcherCls"
        /></template>
        <template #icon="{ isLeaf }">
          <template v-if="isLeaf">
            <img src="@assets/images/img/epm-leaf.svg" alt="" />
          </template>
          <template v-else>
            <img src="@assets/images/img/epm-tree.svg" alt="" />
          </template>
        </template>
        <template #title="{ title }">
          <span class="tree-title">{{ title }}</span>
        </template>
      </a-tree>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CaretDownOutlined } from "@ant-design/icons-vue";
import { getEpmTree } from "@shared/api/situation";
import type { TreeProps } from "ant-design-vue";
import { onMounted, ref } from "vue";

defineProps({
  type: {
    type: String,
    default: "situation",
  },
});
const treeData = ref<TreeProps["treeData"]>([]);
const selectedKeys = ref(["0-0-0-0"]);

const getTree: (arr: any[]) => TreeProps["treeData"] = (arr: any[]) => {
  const tree: TreeProps["treeData"] = arr.map((item: any) => {
    return {
      title: item.cgName,
      key: item.id,
      isLeaf: item.child && item.child.length ? false : true,
      selectable: item.child && item.child.length ? false : true,
      children: item.child && item.child.length ? getTree(item.child) : [],
    };
  });
  return tree;
};

const getTreeData = async () => {
  const res = await getEpmTree(-1);
  if (!res) return;
  treeData.value = getTree(res.child);
};

onMounted(() => {
  getTreeData();
});
</script>

<style scoped lang="less">
.epm-list {
  width: 100%;
  height: 100%;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  display: flex;
  flex-direction: column;

  &-content {
    border: 1px solid #0a84ff80;
    padding: 10px;
    height: calc(100% - 50px);
    flex: auto;
  }

  :deep(.epm-list-tree) {
    width: 100%;
    height: 100%;
    color: #fff;
    overflow: auto;
    border-radius: 0;
    background: transparent;

    .ant-tree-treenode {
      padding: 0;
      width: 100%;
      height: 32px;
      display: flex;
      align-items: center;
      background: linear-gradient(
        270deg,
        rgba(10, 132, 255, 0) 0%,
        rgba(10, 132, 255, 0.15) 50%,
        rgba(10, 132, 255, 0) 100%
      );
      margin-bottom: 4px;

      .ant-tree-switcher {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .ant-tree-node-content-wrapper {
        flex: auto;
        display: flex;
        align-items: center;

        .ant-tree-iconEle {
          display: flex;
          align-items: center;
        }
      }

      &:hover {
        background: linear-gradient(
          270deg,
          rgba(10, 132, 255, 0) 0%,
          rgba(10, 132, 255, 0.4) 50%,
          rgba(10, 132, 255, 0) 100%
        );
      }

      &.ant-tree-treenode-selected {
        border: 1px solid;
        border-image: linear-gradient(
            to right,
            rgba(10, 132, 255, 0),
            rgba(10, 132, 255, 0.75),
            rgba(10, 132, 255, 0)
          )
          1;

        background: linear-gradient(
          270deg,
          rgba(10, 132, 255, 0) 0%,
          rgba(10, 132, 255, 0.4) 50%,
          rgba(10, 132, 255, 0) 100%
        );
        .ant-tree-node-selected {
          background-color: transparent;
        }
      }
    }
  }
}
</style>
