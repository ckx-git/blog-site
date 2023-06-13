<template>
  <div class="app">
    <div class="app-container">
      <Layout>
        <template #left>
          <div class="aside">
            <SiteAside />
          </div>
        </template>
        <template #default>
          <RouterView />
        </template>
      </Layout>
    </div>
  </div>
</template>

<script>
import Layout from '@/components/Layout'
import SiteAside from '@/components/SiteAside'


export default {
  name: 'App',
  components: {
    Layout,
    SiteAside
  }
}
</script>

<style lang="less" scoped>
@import url('~@/styles/mixin.less');  

.app-container {
  .self-fill(fixed)
}

.aside {
  width: 250px;
  height: 100%;
}
</style>