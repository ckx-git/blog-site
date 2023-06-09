<template>
  <div class="test-container">
    <div v-for="type in types" :key="type" class="item">
      <Icon :type="type" />
      <label>{{ type }}</label>
    </div>
  </div>
</template>

<script>
import Icon, { types } from './'

export default {
  components: {
    Icon
  },
  data() {
    return {
      types
    }
  }
}
</script>

<style lang="less" scoped>
.test-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  width: 500px;

  .item {
    margin: 1rem;
    text-align: center;
    font-size: 1.2rem;
  }

  .icon-container {
    display: block;
  }
}
</style>