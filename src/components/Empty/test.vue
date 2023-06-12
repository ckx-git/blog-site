<template>
  <div class="empty-test-container">
    <Empty />
  </div>
</template>

<script>
import Empty from './'

export default {
  components: {
    Empty
  }
}
</script>

<style>
.empty-test-container {
  position: relative;
  width: 100px;
  height: 200px;
  border: 1px solid gray;
  /* margin: 0 auto; */
}
</style>