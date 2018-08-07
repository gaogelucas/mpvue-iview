<template>
    <view class="i-class i-grid-icon">
        <slot></slot>
    </view>
</template>

<script>
export default {
  name: "EasyGridIcon",
  data() {
    return {};
  }
};
</script>

<style>
.i-grid-icon {
  display: block;
  width: 28px;
  height: 28px;
  margin: 0 auto;
}
.i-grid-icon easy-icon {
  width: 100%;
  height: 100%;
}

.i-grid-icon image {
  width: 100%;
  height: 100%;
}
</style>
