<template>
  <div>
    <Pager :currentPage="currentPage" :pageSize="pageSize" :total="total" @pageChange="onPageChange" />
  </div>
</template>

<script>
import Pager from './'

export default {
  components: {
    Pager
  },
  data() {
    return {
      currentPage: 1,
      pageSize: 5,
      total: 28
    }
  },
  methods: {
    onPageChange(newPage) {
      console.log('onPageChange', newPage)
      this.currentPage = newPage
    }
  }
}
</script>

<style>

</style>