<template>
  <div class="about-container" v-loading="loading">
    <iframe v-if="src" :src="src" frameborder="0" class="about-content"></iframe>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'About',
    computed: mapState('about', {
      src: 'data',
      loading: 'loading'
    }),
    created() {
      this.$store.dispatch('about/fetchAbout')
    }
}
</script>

<style scoped lang="less">
.about-container {
  width: 100%;
  height: 100%;
  position: relative;
}
.about-content {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
}

</style>