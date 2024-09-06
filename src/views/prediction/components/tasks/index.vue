<template>
  <div class="prediction-tasks">
    <div class="epm-tree">
      <EpmList type="prediction" />
    </div>
    <TaskGraph />
    <AnalysisConfig />
    <AnalysisList />
  </div>
</template>

<script lang="ts" setup>
import EpmList from "@views/situation/components/EpmList.vue";
import AnalysisConfig from "./AnalysisConfig.vue";
import AnalysisList from "./AnalysisList.vue";
import TaskGraph from "./TaskGraph.vue";
</script>

<style scoped lang="less">
.prediction-tasks {
  display: grid;
  grid-template-columns: repeat(4, minmax(402px, 1fr));
  grid-template-rows: calc(69% - 24px) 31%;
  gap: 24px;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;

  .epm-tree {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 3;
  }
}
</style>
