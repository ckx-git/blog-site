<template>
  <div class="test-menu-container">
    <Menu />
  </div>
</template>

<script>
import Menu from './'

export default {
  components: {
    Menu
  }
}
</script>

<style lang="less" scoped>
  .test-menu-container {
    width: 400px;
    height: 500px;
    border: 2px solid;
    background: #000;
    margin: 0 auto;
  }
</style>