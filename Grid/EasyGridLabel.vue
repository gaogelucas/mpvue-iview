<template>
<view class="i-class i-grid-label"><slot></slot></view>
</template>

<script>
export default {
  name: "EasyGridLabel",
  data() {
    return {};
  }
};
</script>

<style>
.i-grid-label {
  margin-top: 5px;
  display: block;
  text-align: center;
  color: #1c2438;
  font-size: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
