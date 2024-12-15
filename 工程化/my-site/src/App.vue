<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>
      <template #default>
        <RouterView />
      </template>
      <!-- <template #right>
        <div class="right">
        </div>
      </template> -->
    </Layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout"
import SiteAside from "@/components/SiteAside"
export default {
  name: 'App',
  components: {
    Layout,
    SiteAside,
  }
}
</script>
<style lang="less" scoped>
@import "~@/styles/mixins.less";

.app-container {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .self-full(fixed);
}
.aside {
  width: 300px;
  height: 100%;
  background-color: lightcyan;
}
.right {
  width: 200px;
  height: 100%;
  background-color: lightblue;
}
</style>
