<template>
  <nav class="menu-container">
    <a 
      v-for="item in items"
      :key="item.link"
      :href="item.link"
      :class="{
        selected: isSelected(item)
      }"
    >
      <div class="icon">
        <Icon :type="item.icon" />
      </div>
      <span>{{ item.title }}</span>
    </a>
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
        { link: "/", title: "首页", icon: "home" },
        { link: "/blog", title: "文章", icon: "blog" },
        { link: "/about", title: "关于我们", icon: "about" },
        { link: "/project", title: "效果", icon: "code" },
        { link: "/message", title: "留言板", icon: "chat" },
      ],
    };
  },
  methods: {
    isSelected(item) {
      let link = item.link.toLowerCase()
      let curPathname = location.pathname.toLowerCase()
      if (item.startWith) {
        return curPathname.startsWith(link)
      }
      return curPathname === link
    }
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