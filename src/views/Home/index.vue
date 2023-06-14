<template>
  <div>
    <button @click="showMessage">show</button>
  </div>
</template>

<script>
export default {
  methods: {
    showMessage() {
      this.$message({
        content: '添加成功',
        type: 'success'
      })
    }
  }
};
</script>

<style></style>
