<template>
  <div class="image-loader-container">
    <img v-if="!everythingDone" class="placeholder" :src="placeholder">
    <img
     :src="src"
     :style="{
      opacity: originOpacity,
      transition: `${duration}ms`
     }"
     @load="handleLoad"
    >
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      default: 500
    }
  },
  data() {
    return {
      originLoaded: false, // 原图是否加载完成
      everythingDone: false // 是否一切准备就绪
    }
  },
  computed: {
    originOpacity() {
      return this.originLoaded ? 1 : 0
    }
  },
  methods: {
    handleLoad() {
      this.originLoaded = true;
      setTimeout(() => {
        this.everythingDone = true;
        this.$emit('load')
      }, this.duration)
    }
  }
}
</script>

<style lang="less" scoped>
@import url("~@/styles/mixin.less");

.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  
  img {
    .self-fill();
    object-fit: cover;
  }

  .placeholder {
    filter: blur(0.2vw);
  }
}
</style>