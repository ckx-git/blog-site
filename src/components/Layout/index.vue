<template>
  <div class="layout-container">
    <div class="layout-left">
      <slot name="left" />
    </div>
    <div class="layout-main">
      <slot />
    </div>
    <div class="layout-right">
      <slot name="right" />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.layout-container {
  width: 100%;
  height: 100%;
  display: flex;

  .layout-left,
  .layout-right {
    flex: 0 0 auto;
    overflow: hidden;
  }

  .layout-main {
    flex: 1 1 auto;
    overflow: hidden;
  }
}
</style>