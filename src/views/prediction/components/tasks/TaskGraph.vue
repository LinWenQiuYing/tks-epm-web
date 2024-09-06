<template>
  <div class="task-graph">
    <div class="task-graph-content">
      <a-input-search
        v-model:value="searchValue"
        placeholder="请输入节点查询"
        class="task-graph-search"
        @search="onSearch"
      />
      <div class="task-graph-container" ref="graphRef" id="container"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import G6 from "@antv/g6";
import NodeDefaultIcon from "@assets/images/img/node-default.svg";
import NodeRootIcon from "@assets/images/img/node-root.svg";
import { onMounted, reactive, ref } from "vue";

const searchValue = ref<string>("");

const onSearch = () => {
  console.log("onSearch", searchValue.value);
  // todo
};

const graphRef = ref();

const graphData = reactive({
  id: "海南巧易科技有限公司海南巧易科技有限公司",
  name: "海南巧易科技有限公司",
  hasChildren: true,
  status: "good",
  img: NodeRootIcon,
  depth: 0,
  collapsed: false,
  children: [
    {
      id: "c1",
      name: "海南巧易科",
      hasChildren: true,
      collapsed: false,
      depth: 1,
      status: "good",
      children: [
        {
          id: "c1-1",
          name: "测试测试测试测试",
          hasChildren: true,
          depth: 2,
          collapsed: false,
          status: "good",
          children: [
            {
              id: "GqM_r5m_dZVWqZBEqYUSX",
              name: "测试测试测试",
              hasChildren: true,
              status: "invalid",
              depth: 3,
              collapsed: false,
              children: [],
            },
            {
              id: "c1-1-2",
              name: "测试测试测试",
              hasChildren: true,
              status: "useful",
              depth: 3,
              collapsed: false,
              children: [],
            },
            {
              id: "c1-1-3",
              name: "测试测试测试",
              hasChildren: true,
              status: "healthy",
              depth: 3,
              collapsed: false,
              children: [],
            },
          ],
        },
        {
          id: "c1-2",
          name: "测试测试测试",
          hasChildren: true,
          status: "healthy",
          depth: 2,
          collapsed: false,
          children: [],
        },
        {
          id: "c1-3",
          name: "测试测试测试",
          hasChildren: true,
          status: "useful",
          depth: 2,
          collapsed: false,
          children: [],
        },
      ],
    },
    {
      id: "c3",
      name: "测试测试测试",
      hasChildren: true,
      status: "invalid",
      depth: 1,
      collapsed: false,
      children: [],
    },
    {
      id: "c4",
      name: "测试测试测试",
      hasChildren: true,
      status: "useful",
      depth: 1,
      collapsed: false,
      children: [],
    },
    {
      id: "c5",
      name: "测试测试测试",
      hasChildren: true,
      collapsed: false,
      depth: 1,
      status: "useful",
      children: [],
    },
    {
      id: "c2",
      name: "测试测试测试",
      hasChildren: true,
      collapsed: false,
      depth: 1,
      status: "good",
      children: [
        {
          id: "c2-1",
          name: "测试测试测试",
          hasChildren: true,
          collapsed: false,
          depth: 2,
          status: "useful",
          children: [
            {
              id: "fdsfasfd",
              name: "测试测试测试测试测试测",
              hasChildren: true,
              status: "invalid",
              depth: 3,
              collapsed: false,
              children: [],
            },
            {
              id: "c2-1-2",
              name: "测试测试测试测",
              hasChildren: true,
              collapsed: false,
              depth: 3,
              status: "healthy",
              children: [],
            },
            {
              id: "c2-1-3",
              name: "测试测试测试测试测试测试",
              hasChildren: true,
              collapsed: false,
              depth: 3,
              status: "healthy",
              children: [],
            },
          ],
        },
        {
          id: "c2-2",
          name: "测试测试测试测试",
          hasChildren: true,
          collapsed: false,
          depth: 2,
          status: "useful",
          children: [],
        },
        {
          id: "c2-3",
          name: "测试测试测试测试测",
          hasChildren: true,
          depth: 2,
          collapsed: false,
          status: "healthy",
          children: [],
        },
      ],
    },
  ],
});

let graph: any = null;
const initGraph = () => {
  const dom = graphRef.value;
  if (graph) {
    graph.destroy();
  }

  const width = dom.clientWidth;
  const height = dom.clientHeight;
  graph = new G6.TreeGraph({
    container: dom,
    width,
    height,
    linkCenter: true,
    modes: {
      default: [
        {
          type: "collapse-expand",
          onChange: function onChange(item, collapsed) {
            const data = item.getModel();
            data.collapsed = collapsed;
            return true;
          },
        },
        "drag-canvas",
        "zoom-canvas",
      ],
    },
    defaultNode: {
      type: "image",
      anchorPoints: [
        [0, 0.5],
        [1, 0.5],
      ],
      img: NodeDefaultIcon,
      style: {
        fill: "#fff",
        stroke: "#0A84FF",
        lineWidth: 1,
      },
      labelCfg: {
        position: "bottom",
        offset: 5,
        style: {
          fill: "#fff",
          textAlign: "center",
        },
      },
    },
    defaultEdge: {
      type: "cubic-vertical",
      style: {
        stroke: "#0A84FF",
        lineAppendWidth: 5,
      },
    },
    layout: {
      type: "compactBox",
      direction: "TB",
      getId: function getId(d) {
        return d.id;
      },
      getHeight: function getHeight() {
        return 16;
      },
      getWidth: function getWidth() {
        return 16;
      },
      getVGap: function getVGap() {
        return 60;
      },
      getHGap: function getHGap() {
        return 60;
      },
    },
  });

  graph.node(function (node) {
    return {
      label: node.id,
      size: 100 - node.depth * 20,
    };
  });

  graph.data(graphData);
  graph.render();
  graph.fitView();

  // 监听窗口大小变化，动态修改画布大小
  if (typeof window !== "undefined") {
    window.onresize = () => {
      if (!graph || graph.get("destroyed")) return;
      if (!dom || !dom.scrollWidth || !dom.scrollHeight) return;
      const width = dom.clientWidth;
      const height = dom.clientHeight;
      graph.changeSize(width, height);
    };
  }
};

onMounted(() => {
  initGraph();
});
</script>

<style scoped lang="less">
.task-graph {
  width: 100%;
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;

  &-content {
    height: 100%;
    color: #fff;
    padding: 20px;
    border: 1px solid #0a84ff80;
    overflow: hidden;
    position: relative;

    .task-graph-container {
      width: 100%;
      height: 100%;
    }

    .task-graph-search {
      width: 200px;
      position: absolute;
      top: auto;
      right: 20px;

      :deep(.ant-input-wrapper) {
        input {
          height: 32px;
          border-top-left-radius: 2px;
          border-bottom-left-radius: 2px;
          border-color: #0a84ff;
        }

        .ant-btn {
          background: none;
          border-top-right-radius: 2px;
          border-bottom-right-radius: 2px;
          border: 1px solid #0a84ff;

          .anticon-search {
            color: #0a84ff;
          }
        }
      }
    }
  }
}
</style>
