<template>
  <div class="fault-stat">
    <HeaderTitle title="故障统计">
      <template #default>
        <span class="title-more" @click="showMore">更多 <DoubleRightOutlined /> </span>
      </template>
    </HeaderTitle>
    <div class="fault-stat-content">
      <div class="echats-content" ref="echatsRef"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { DoubleRightOutlined } from "@ant-design/icons-vue";
import * as echarts from "echarts";
import { onBeforeUnmount, onMounted, ref } from "vue";

const showMore = () => {};

type EChartsOption = echarts.EChartsOption;
type EChartsType = echarts.EChartsType;

const option: EChartsOption = {
  tooltip: {
    trigger: "axis",
  },
  legend: {
    data: ["致命", "严重", "一般", "轻微"],
    textStyle: {
      color: "#fff",
    },
  },
  grid: {
    top: "25%",
    left: "1%",
    right: "1%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
  },
  yAxis: {
    type: "value",
    name: "数量",
    nameTextStyle: {
      color: "#fff",
      fontSize: 12,
      align: "right",
    },
    axisLine: {
      show: false,
      lineStyle: {
        color: "rgba(255, 255, 255, 0.65)",
      },
    },
    axisTick: {
      show: true,
      lineStyle: {
        color: "#A6ADB3",
      },
    },
    splitLine: {
      lineStyle: {
        color: ["rgba(255, 255, 255, 0.1)"],
        type: "dashed",
      },
    },
  },
  series: [
    {
      name: "致命",
      type: "bar",
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: "严重",
      type: "bar",
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: "一般",
      type: "bar",
      data: [150, 232, 201, 154, 190, 330, 410],
    },
    {
      name: "轻微",
      type: "bar",
      data: [200, 132, 156, 426, 187, 341, 201],
    },
  ],
};

const echatsRef = ref();
// 注意：不要使用ref或reactive包装 echarts 实例。使用公共变量或shallowRef避免对 echarts 实例进行深度监视。
let myChart: EChartsType | null = null;
const initEcharts = () => {
  const chartDom = echatsRef.value;
  myChart = echarts.init(chartDom);
  myChart.setOption(option);
};

const resize = () => {
  if (myChart) myChart.resize();
};

onMounted(() => {
  initEcharts();
  window.addEventListener("resize", resize);
});

onBeforeUnmount(() => {
  myChart?.dispose();
  myChart = null;
  window.removeEventListener("resize", resize);
});
</script>

<style scoped lang="less">
.fault-stat {
  width: 100%;
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 3;

  &-content {
    height: calc(100% - 50px);
    color: #fff;
    padding: 20px;
    border: 1px solid #0a84ff80;
    overflow: hidden;

    .echats-content {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
