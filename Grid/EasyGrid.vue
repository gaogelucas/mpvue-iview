<template>
<view class="i-class i-grid"><slot></slot></view>
</template>

<script>
export default {
  name: "EasyGrid",
  data() {
    return {
      width: "33.33%"
    };
  }
};
</script>

<style>
.i-grid{border-top:1rpx solid #e9eaec;border-left:1rpx solid #e9eaec;overflow:hidden}
</style>
