<template>
  <div class="test-container">
    <ImageLoader
      src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
      placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
      :duration="5000"
      @load="handleLoad"
    />
  </div>
</template>

<script>
import ImageLoader from './'

export default {
  components: {
    ImageLoader
  },
  methods: {
    handleLoad() {
      console.log('load: ImageLoader')
    }
  }
}
</script>

<style>
.test-container {
  width: 150px;
  height: 150px;
  border: 2px solid gray;
  /* background: #000; */
  /* padding-top: 20px; */
}
</style>