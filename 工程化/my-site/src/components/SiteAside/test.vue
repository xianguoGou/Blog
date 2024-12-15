<template>
  <div class="test-container">
    <SiteAside />
  </div>
</template>

<script>
import SiteAside from "@/components/SiteAside"
import "@/styles/global.less"
export default {
    components: {
        SiteAside
    }
}
</script>

<style scoped lang="less">
.test-container {
    width: 250px;
    height: 600px;
    border: 2px solid #ccc;
    background-color: #666;
}

</style>