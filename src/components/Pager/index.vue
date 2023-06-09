<template>
  <div class="pager-container">
    <a @click="handleClick(1)" :class="{ disabled: currentPage === 1 }">|&lt;&lt;</a>
    <a @click="handleClick(currentPage - 1)" :class="{ disabled: currentPage === 1 }">&lt;</a>
    <a v-for="(n, i) in numbers" :key="i" @click="handleClick(n)" :class="{ active: n === currentPage }">{{ n }}</a>
    <a @click="handleClick(currentPage + 1)" :class="{ disabled: currentPage === pageNumber }">&gt;</a>
    <a @click="handleClick(pageNumber)" :class="{ disabled: currentPage === pageNumber }">&gt;&gt;|</a>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 10
    },
    visibleNumber: {
      type: Number,
      default: 10
    }
  },
  computed: {
    // 总页数
    pageNumber() {
      return Math.ceil(this.total / this.pageSize)
    },
    // 显示的最小页数
    visibleMin() {
      let min = this.currentPage - Math.floor(this.visibleNumber / 2)
      if (min < 1) {
        min = 1
      }
      return min
    },
    visibleMax() {
      let max = this.visibleMin + this.visibleNumber -1
      if (max > this.pageNumber) {
        max = this.pageNumber
      }
      return max
    },
    numbers() {
      let nums = []
      for (let i = this.visibleMin; i <= this.visibleMax; i++) {
        nums.push(i)
      }
      return nums
    }
  },
  methods: {
    handleClick(newPage) {
      console.log('newPage', newPage)

      if (newPage < 1) {
        newPage = 1
      }
      if (newPage > this.pageNumber) {
        newPage = this.pageNumber
      }
      if (newPage === this.currentPage) {
        return
      }
      this.$emit('pageChange', newPage)
    }
  }
}
</script>

<style lang="less" scoped>
@import url('~@/styles/var.less');

.pager-container {
  margin: 20px 0;

  a {
    color: @primary;
    width: 10px;
    padding: 0 5px;
    cursor: pointer;

    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }
    &.active {
      color: @words;
      font-weight: bold;
      cursor: text;
    }
  }
}
</style>