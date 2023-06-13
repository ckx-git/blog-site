<template>
  <nav class="menu-container">
    <RouterLink 
      v-for="item in items"
      :key="item.name"
      :to="{ name: item.name }"
      :exact="item.exact"
      active-class="selected"
      exact-active-class=""
    >
      <div class="icon">
        <Icon :type="item.icon" />
      </div>
      <span>{{ item.title }}</span>
    </RouterLink>
  </nav>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  components: {
    Icon,
  },
  data() {
    return {
      items: [
        { name: "Home", title: "首页", icon: "home", exact: true },
        { name: "Blog", title: "文章", icon: "blog", exact: false },
        { name: "About", title: "关于我们", icon: "about", exact: true },
        { name: "Project", title: "效果", icon: "code", exact: true },
        { name: "Message", title: "留言板", icon: "chat", exact: true },
      ],
    };
  },
  methods: {
    // isSelected(item) {
    //   let link = item.link.toLowerCase()
    //   let curPathname = location.pathname.toLowerCase()
    //   if (item.startWith) {
    //     return curPathname.startsWith(link)
    //   }
    //   return curPathname === link
    // }
  }
};
</script>

<style lang="less" scoped>
@import url("~@/styles/var.less");

.menu-container {
  // border: 1px solid;
  color: @gray;

  a {
    padding: 0 50px;
    display: flex;
    align-items: center;
    height: 45px;

    &.selected {
      background: darken(@words, 3%);
    }
    .icon {
      width: 24px;
    }
    &:hover {
      color: #fff;
    }

  }
}
</style>