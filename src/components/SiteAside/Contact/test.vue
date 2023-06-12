<template>
  <div class="test-contact-container">
    <Contact />
  </div>
</template>

<script>
import Contact from './'
export default {
  components: {
    Contact
  }
}
</script>

<style>
.test-contact-container {
  width: 400px;
  height: 400px;
  border: 2px solid;
  /* background: #000; */
  /* margin: 0 auto; */
  padding-top: 200px;
}
</style>