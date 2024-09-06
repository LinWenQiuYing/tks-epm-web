<template>
  <div class="health-situation">
    <EpmList></EpmList>
    <EpmDetail></EpmDetail>
    <EpmScore></EpmScore>
    <FaultStat></FaultStat>
    <FaultList></FaultList>
    <HealthAnalysis></HealthAnalysis>
  </div>
</template>

<script lang="ts" setup>
import EpmDetail from "./components/EpmDetail.vue";
import EpmList from "./components/EpmList.vue";
import EpmScore from "./components/EpmScore.vue";
import FaultList from "./components/FaultList.vue";
import FaultStat from "./components/FaultStat.vue";
import HealthAnalysis from "./components/HealthAnalysis.vue";
</script>

<style scoped lang="less">
.health-situation {
  display: grid;
  grid-template-columns: repeat(12, minmax(134px, 1fr));
  grid-template-rows: calc(66% - 24px) 33%;
  gap: 24px;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
