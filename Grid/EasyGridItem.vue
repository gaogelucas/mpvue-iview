<template>
<view class="i-class i-grid-item" :style="{'width': width}"><slot></slot></view>
</template>

<script>
export default {
  name: "EasyGridItem",
  data() {
    return {
      width: "33.33%"
    };
  }
};
</script>

<style>
.i-grid-item {
  position: relative;
  float: left;
  padding: 20px 10px;
  width: 33.33333333%;
  box-sizing: border-box;
  border-right: 1rpx solid #e9eaec;
  border-bottom: 1rpx solid #e9eaec;
}
</style>
