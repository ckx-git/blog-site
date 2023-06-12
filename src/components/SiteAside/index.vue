<template>
  <div class="site-aside-container">
    <Avatar url="http://mdrs.yuanjin.tech/FgMwAPYq17So9nwVH44ltDHo7u3c" />
    <h3 class="title">乱世一条犬</h3>
    <Menu />
    <Contact />
    <div class="footer">
      川ICP备17001719号
    </div>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from '@/components/SiteAside/Menu'
import Contact from '@/components/SiteAside/Contact'

export default {
  components: {
    Menu,
    Contact,
    Avatar
  }
}
</script>

<style lang="less" scoped>
@import url('~@/styles/var.less');

.site-aside-container {
  width: 100%;
  height: 100%;
  background: @dark;
  padding: 20px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;

  .avatar-container {
    margin: 0 auto;
  }

  .footer {
    text-align: center;
    font-size: 12px;
  }
  .title {
    font-size: 1.2em;
    color: #fff;
    text-align: center;
  }
}
</style>