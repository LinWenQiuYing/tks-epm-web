<template>
  <div class="header-title">
    <div class="header-title-text">
      <img src="@assets/images/img/title-img.svg" alt="" />
      {{ title }}
    </div>
    <div class="header-title-slot">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>

<style scoped lang="less">
.header-title {
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin-bottom: 10px;
  background: rgba(10, 132, 255, 0.2);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px 0 5px;
  background-image: url("../assets/images/img/title-bg-corner.svg");
  background-position: right bottom;
  background-repeat: no-repeat;

  &-text {
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 16px;

    img {
      margin-right: 4px;
    }
  }

  &-slot {
    color: #0a84ff;
    cursor: pointer;
  }

  &::before {
    content: "";
    display: inline-block;
    width: 2px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #0a84ff;
  }
}
</style>
