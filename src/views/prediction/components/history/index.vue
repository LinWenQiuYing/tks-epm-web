<template>
  <div class="prediction-history">
    <HistoryList />
    <WarningDetail />
    <WarningShow />
  </div>
</template>

<script lang="ts" setup>
import HistoryList from "./HistoryList.vue";
import WarningDetail from "./WarningDetail.vue";
import WarningShow from "./WarningShow.vue";
</script>

<style scoped lang="less">
.prediction-history {
  display: grid;
  grid-template-columns: 44.4% calc(55.6% - 24px);
  grid-template-rows: 44.7% calc(55.3% - 24px);
  gap: 24px;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
