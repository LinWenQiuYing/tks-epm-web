<template>
  <div class="warning-detail">
    <HeaderTitle title="报警详情" />
    <div class="warning-detail-content">
      <div class="detail-item">
        <div class="detail-item-left">
          <span class="detail-item-label">报警时间：</span>
          <span class="detail-item-value">2022-11-11 11:11:11</span>
        </div>
      </div>
      <div class="detail-item">
        <div class="detail-item-left">
          <span class="detail-item-label">卫星型号：</span>
          <span class="detail-item-value">0B星</span>
        </div>
      </div>
      <div class="detail-item">
        <div class="detail-item-left">
          <span class="detail-item-label">卫星类型：</span>
          <span class="detail-item-value">中继卫星</span>
        </div>
      </div>
      <div class="detail-item long-item">
        <div class="detail-item-left">
          <span class="detail-item-label">报警说明：</span>
          <span class="detail-item-value">0B星北斗分流敏感器B主分温度异常升高</span>
        </div>
      </div>
      <div class="detail-item long-item">
        <div class="detail-item-left">
          <span class="detail-item-label">现象分析：</span>
        </div>
        <div class="detail-item-right">
          <img src="@assets/images/img/analysis-icon.svg" alt="" />
          <span class="detail-item-label">进行故障诊断</span>
        </div>
      </div>

      <div class="box-item">
        <img src="@assets/images/img/box-icon-obj.svg" alt="" />
        <div class="box-item-content">
          <span class="box-item-label">对象</span>
          <span class="box-item-content">北分流器</span>
        </div>
      </div>
      <div class="box-item">
        <img src="@assets/images/img/box-icon-params.svg" alt="" />
        <div class="box-item-content">
          <span class="box-item-label">参数及约束</span>
          <span class="box-item-content">地球敏感器B主分温度 / 阈值：[10，50]</span>
        </div>
      </div>
      <div class="box-item long-item">
        <img src="@assets/images/img/box-icon-result.svg" alt="" />
        <div class="box-item-content">
          <span class="box-item-label">预测结论</span>
          <span class="box-item-content"
            >2015/02/04 12:00:00 0B星
            xx分系统，北分流器，地球敏感器B主份温度将超过阈值，达到150</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="less">
.warning-detail {
  width: 100%;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;

  &-content {
    height: calc(100% - 50px);
    color: #fff;
    padding: 20px;
    border: 1px solid #0a84ff80;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    overflow-y: auto;

    .detail-item {
      width: calc((100% - 20px) / 3);
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 32px;

      &.long-item {
        width: 100%;
      }

      &-left {
        .detail-item-label {
          color: rgba(255, 255, 255, 0.65);
        }

        .detail-item-value {
          color: #fff;
        }
      }

      &-right {
        display: flex;
        color: #0a84ff;

        img {
          margin-right: 4px;
        }
      }
    }

    .box-item {
      width: calc((100% - 24px) / 2);
      display: flex;
      align-items: center;
      height: 80px;
      margin-bottom: 24px;
      padding: 10px;
      border-radius: 6px;
      background: rgba(10, 132, 255, 0.1);

      &:first-child {
        margin-right: 24px;
      }

      &:last-child {
        margin-bottom: 0;
      }

      &.long-item {
        width: 100%;
      }

      &-content {
        display: flex;
        flex-direction: column;
        font-size: 14px;
        line-height: 22px;

        .box-item-label {
          margin-bottom: 2px;
        }

        .box-item-content {
          color: #64d2ff;
        }
      }
    }
  }
}
</style>
