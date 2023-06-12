<template>
  <div class="site-aside-test-container">
    <SiteAside />
  </div>  
</template>

<script>
import SiteAside from './'

export default {
  components: {
    SiteAside
  }
}
</script>

<style lang="less" scoped>
.site-aside-test-container {
  width: 250px;
  height: 600px;
  border: 2px solid;
}
</style>