<template>
  <div class="epm-detail">
    <HeaderTitle title="设备详情" />
    <div class="epm-detail-content">
      <a-date-picker
        v-model:value="dateValue"
        @change="onChange"
        valueFormat="YYYY-MM-DD"
        class="epm-detail-date"
        :allow-clear="false"
      />
      <div class="epm-detail-header">
        <div class="epm-detail-header-item">
          <span class="item-label">健康状态：</span>
          <span class="item-value">{{ healthStatus }}</span>
        </div>
        <div class="epm-detail-header-item">
          <span class="item-label">综合评分：</span>
          <span class="item-value">{{ score }}</span>
        </div>
      </div>
      <div class="epm-detail-footer">
        <div class="epm-detail-footer-item" v-for="item in statusList" :key="item.label">
          <span class="item-label" :style="{ backgroundImage: item.color }"></span>
          <span class="item-value">{{ item.label }}</span>
        </div>
      </div>
      <div class="epm-detail-container" ref="graphRef" id="container"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import G6 from "@antv/g6";
import { message } from "ant-design-vue";
import { onMounted, reactive, ref } from "vue";

const dateValue = ref<undefined | string>(undefined);
const healthStatus = ref<string>("良好");
const score = ref<number>(98);
const statusList = [
  {
    label: "健康",
    key: "healthy",
    color: "linear-gradient(180deg, #32D74B 0%, #0EBE7F 100%)",
    stroke: "l(90) 0:#32D74B 1:#0EBE7F",
    fill: "l(90) 0:rgba(50, 215, 75, 0.2) 1:rgba(14, 190, 127, 0.2)",
  },
  {
    label: "良好",
    key: "good",
    color: "linear-gradient(180deg, #0A84FF 0%, #64D2FF 100%)",
    stroke: "l(90) 0:#0A84FF 1:#64D2FF",
    fill: "l(90) 0:rgba(10, 132, 255, 0.2) 1:rgba(100, 210, 255, 0.2)",
  },
  {
    label: "堪用",
    key: "useful",
    color: "linear-gradient(180deg, #FF9F0A 0%, #FF6D00 100%)",
    stroke: "l(90) 0:#FF9F0A 1:#FF6D00",
    fill: "l(90) 0:rgba(255, 159, 10, 0.2) 1:rgba(255, 109, 0, 0.2)",
  },
  {
    label: "失效",
    key: "invalid",
    color: "linear-gradient(180deg, #FF453A 0%, #C51162 100%)",
    stroke: "l(90) 0:#FF453A 1:#C51162",
    fill: "l(90) 0:rgba(255, 69, 58, 0.2) 1:rgba(197, 17, 98, 0.2)",
  },
];

const graphData = reactive({
  id: "海南巧易科技有限公司海南巧易科技有限公司",
  name: "海南巧易科技有限公司",
  hasChildren: true,
  status: "good",
  collapsed: false,
  children: [
    {
      id: "c1",
      name: "海南巧易科",
      hasChildren: true,
      collapsed: false,
      status: "good",
      children: [
        {
          id: "c1-1",
          name: "测试测试测试测试",
          hasChildren: true,
          collapsed: false,
          status: "good",
          children: [
            {
              id: "GqM_r5m_dZVWqZBEqYUSX",
              name: "测试测试测试",
              hasChildren: true,
              status: "invalid",
              collapsed: false,
              children: [],
            },
            {
              id: "c1-1-2",
              name: "测试测试测试",
              hasChildren: true,
              status: "useful",
              collapsed: false,
              children: [],
            },
            {
              id: "c1-1-3",
              name: "测试测试测试",
              hasChildren: true,
              status: "healthy",
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
          collapsed: false,
          children: [],
        },
        {
          id: "c1-3",
          name: "测试测试测试",
          hasChildren: true,
          status: "useful",
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
      collapsed: false,
      children: [],
    },
    {
      id: "c4",
      name: "测试测试测试",
      hasChildren: true,
      status: "useful",
      collapsed: false,
      children: [],
    },
    {
      id: "c5",
      name: "测试测试测试",
      hasChildren: true,
      collapsed: false,
      status: "useful",
      children: [],
    },
    {
      id: "c2",
      name: "测试测试测试",
      hasChildren: true,
      collapsed: false,
      status: "good",
      children: [
        {
          id: "c2-1",
          name: "测试测试测试",
          hasChildren: true,
          collapsed: false,
          status: "useful",
          children: [
            {
              id: "fdsfasfd",
              name: "测试测试测试测试测试测",
              hasChildren: true,
              status: "invalid",
              collapsed: false,
              children: [],
            },
            {
              id: "c2-1-2",
              name: "测试测试测试测",
              hasChildren: true,
              collapsed: false,
              status: "healthy",
              children: [],
            },
            {
              id: "c2-1-3",
              name: "测试测试测试测试测试测试",
              hasChildren: true,
              collapsed: false,
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
          status: "useful",
          children: [],
        },
        {
          id: "c2-3",
          name: "测试测试测试测试测",
          hasChildren: true,
          collapsed: false,
          status: "healthy",
          children: [],
        },
      ],
    },
  ],
});

const onChange = () => {
  console.log(dateValue.value);
  // todo
  // initGraph();
};

const graphRef = ref();

const COLLAPSE_ICON = function COLLAPSE_ICON(x: number, y: number, r: number) {
  return [
    ["M", x - r, y],
    ["a", r, r, 0, 1, 0, r * 2, 0],
    ["a", r, r, 0, 1, 0, -r * 2, 0],
    ["M", x + 3 - r, y],
    ["L", x + r - 3, y],
  ];
};
const EXPAND_ICON = function EXPAND_ICON(x: number, y: number, r: number) {
  return [
    ["M", x - r, y],
    ["a", r, r, 0, 1, 0, r * 2, 0],
    ["a", r, r, 0, 1, 0, -r * 2, 0],
    ["M", x + 3 - r, y],
    ["L", x + r - 3, y],
    ["M", x, y - r + 3],
    ["L", x, y + r - 3],
  ];
};
const getIcon = function getIcon(cfg: any) {
  if (cfg.hasChildren && cfg.collapsed === undefined) {
    return EXPAND_ICON;
  } else {
    return cfg.collapsed ? EXPAND_ICON : COLLAPSE_ICON;
  }
};

let graph: any = null;
const initGraph = () => {
  const dom = graphRef.value;
  if (graph) {
    graph.destroy();
  }

  // 注册节点
  G6.registerNode(
    "default-node",
    {
      draw(cfg, group) {
        const styles = this.getShapeStyle(cfg);
        const { labelCfg = {} } = cfg;

        const keyShape = group.addShape("rect", {
          attrs: {
            ...styles,
            fill:
              statusList.find((e) => e.key === cfg.status)?.fill ||
              "l(90) 0:rgba(10, 132, 255, 0.2) 1:rgba(100, 210, 255, 0.2)",
            stroke:
              statusList.find((e) => e.key === cfg.status)?.stroke || "l(90) 0:#0A84FF 1:#64D2FF",
            x: 0,
            y: 0,
            width: 120,
            height: 40,
          },
        });

        if (cfg.name) {
          /** 判断文字位置，折行等 **/
          const wrapNum = 7;
          let content = cfg.name;
          if (cfg.name.length > wrapNum) {
            content = content.slice(0, wrapNum - 1) + "...";
          }
          /**添加节点名称**/
          group.addShape("text", {
            attrs: {
              ...labelCfg.style,
              fill: "#fff",
              fontSize: 14,
              text: content,
              lineHeight: 40,
              textAlign: "center",
              x: 60, // 调试出来的距离
              y: 28, // 调试出来的距离
              width: 120,
              height: 40,
            },
          });
        }
        if (cfg.hasChildren) {
          const bbox = keyShape.getBBox();
          group.addShape("marker", {
            attrs: {
              x: bbox.width + 10,
              y: bbox.height / 2 - 0.5,
              r: 6,
              lineWidth: 1,
              stroke:
                statusList.find((e) => e.key === cfg.status)?.stroke || "l(90) 0:#0A84FF 1:#64D2FF",
              fill: "transparent",
              cursor: "pointer",
              symbol: getIcon(cfg),
            },
            name: "collapse-icon",
          });
        }

        return keyShape;
      },
      update: (cfg, item) => {
        const group = item.getContainer();
        const icon = group.find((e) => e.get("name") === "collapse-icon");
        icon.attr("symbol", getIcon(cfg));
      },
    },
    "rect"
  );

  // 注册折线边
  G6.registerEdge("flow-line", {
    draw(cfg, group) {
      const startPoint = cfg.startPoint;
      const endPoint = cfg.endPoint;
      //out代表对外投资
      let shape = group.addShape("path", {
        attrs: {
          stroke: "#0A84FF",
          endArrow: {
            path: "",
            d: 0,
          },
          path: [
            ["M", cfg.sourceNode.getBBox().maxX + 16, startPoint.y],
            ["L", (cfg.sourceNode.getBBox().maxX + cfg.targetNode.getBBox().x) / 2, startPoint.y],
            ["L", (cfg.sourceNode.getBBox().maxX + cfg.targetNode.getBBox().x) / 2, endPoint.y],
            ["L", cfg.targetNode.getBBox().minX, endPoint.y],
          ],
        },
      });
      return shape;
    },
  });

  const defaultNodeStyle = {
    fill: "#fff",
    stroke: "#1776FF",
    radius: 4,
    lineWidth: 1,
  };

  const defaultEdgeStyle = {
    stroke: "#E3E6EB",
    endArrow: {
      path: "M 0,0 L 0, -3 L -9,0 L 0, 3 Z",
      fill: "#1776FF",
      stroke: "#1776FF",
      d: -40,
    },
    reverseArrow: {
      path: "M 0,0 L 0, -3 L 9,0 L 0, 3 Z",
      fill: "#1776FF",
      stroke: "#1776FF",
      d: -50,
    },
  };

  const defaultLayout = {
    type: "compactBox",
    direction: "H", //V 垂直分布  H 水平分布
    getId: function getId(d) {
      return d.id;
    },
    getVGap: function getVGap() {
      return 7;
    },
    getHGap: function getHGap() {
      return 90;
    },
    getSide: () => {
      /**上下布局，此处判断在节点上还是下**/
      return "right";
    },
  };

  const defaultLabelCfg = {
    style: {
      fill: "#3C485C",
      fontSize: 14,
      fontFamily: "PingFang SC",
    },
  };

  const width = dom.clientWidth;
  const height = dom.clientHeight;
  graph = new G6.TreeGraph({
    container: dom,
    width,
    height,
    linkCenter: true,
    modes: {
      default: ["drag-canvas", "zoom-canvas"],
    },
    defaultNode: {
      type: "default-node",
      size: [140, 72],
      style: defaultNodeStyle,
      labelCfg: defaultLabelCfg,
    },
    defaultEdge: {
      type: "flow-line",
      style: defaultEdgeStyle,
    },
    layout: defaultLayout,
  });

  // 监听事件
  graph.on("mousemove", () => {
    graph.get("canvas").set("localRefresh", false); // gitee上查到的避免拖动出现重影的方法
  });

  graph.on("node:click", handleClickNode);
  graph.on("node:touchend", handleClickNode);

  graph.data(graphData);
  graph.render();
  graph.fitCenter();

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

// 点击展开节点
const handleClickNode = async (evt) => {
  let { item, target } = evt;
  let targetType = target.get("type");
  const model = item.getModel();
  if (targetType === "marker" && model.depth < 10) {
    if (target.attr("symbol") === EXPAND_ICON) {
      //判断点击为'+'号--展开
      let result = [];
      if (model.copyChildren.length) {
        result = model.copyChildren;
      } else {
        const loading = message.loading("正在查询", 0);
        // todo
        loading();
      }
      model.children = result;
      const icon = item.get("group").find((element) => element.get("name") === "collapse-icon");
      icon.attr("symbol", COLLAPSE_ICON);
      model.collapsed = false;
      graph.updateChild(model, model.id);
      if (!result.length) {
        // 实际没有children数据，则置hasChildren为false
        model.hasChildren = false;
        return false;
      }
      graph.focusItem(model.id);
    } else if (target.attr("symbol") === COLLAPSE_ICON) {
      model.copyChildren = model.children;
      model.children = [];
      const icon = item.get("group").find((element) => element.get("name") === "collapse-icon");
      icon.attr("symbol", EXPAND_ICON);
      model.collapsed = true;
      graph.updateChild(model, model.id);
      if (!model.hasChildren) {
        return false;
      }
      graph.focusItem(model.id);
    }
  } else if (targetType === "marker" && model.depth >= 10) {
    message.info("当前已达到最大层级！");
  }
};

onMounted(() => {
  initGraph();
});
</script>

<style scoped lang="less">
.epm-detail {
  width: 100%;
  grid-column-start: 4;
  grid-column-end: 10;
  grid-row-start: 1;
  grid-row-end: 2;

  &-content {
    height: calc(100% - 50px);
    color: #fff;
    padding: 20px;
    border: 1px solid #0a84ff80;
    overflow: hidden;
    position: relative;

    .epm-detail-container {
      width: 100%;
      height: 100%;
    }

    .epm-detail-date {
      position: absolute;
      top: 20px;
      left: 20px;
      width: 200px;
      border-radius: 2px;
      border: 1px solid #0a84ff;
      background-color: transparent;

      :deep(.ant-picker-input) {
        .ant-picker-suffix {
          color: #ffffff99;
        }
      }
    }

    .epm-detail-header {
      position: absolute;
      top: 20px;
      right: 20px;
      width: 118px;
      height: 68px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      &-item {
        display: flex;
        align-items: center;

        .item-value {
          font-family: "YouSheBiaoTiHei";
          background: linear-gradient(180deg, #32d74b 0%, #0ebe7f 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-size: 20px;
        }
      }
    }

    .epm-detail-footer {
      position: absolute;
      right: 20px;
      bottom: 20px;
      height: 136px;
      padding: 12px 16px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border: 1px solid #0a84ff59;
      border-radius: 4px;

      &-item {
        width: 100%;
        height: 22px;
        display: flex;
        align-items: center;

        .item-label {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 6px;
          margin: 2px 6px 0 4px;
        }
      }
    }
  }
}
</style>
