<template>
  <div class="site-aside-container">
    <template v-if="data">
      <Avatar
        :size="100"
        url="https://img0.baidu.com/it/u=3555674527,3811220504&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1734282000&t=daee528913638de8ff6d314753ea9fb7"
      />
      <h2 class="title">{{ data.siteTitle }}</h2>
      <Menu />
      <Contact />
      <p class="footer">{{ data.icp }}</p>
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Avatar from "@/components/Avatar";
import Menu from "@/components/SiteAside/Menu";
import Contact from "@/components/SiteAside/Contact";
export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
  computed: mapState("setting", ["data"]),
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.site-aside-container {
  width: 100%;
  height: 100%;
  padding: 20px 0;
  background: @dark;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
}
.avatar-container {
  display: block;
  margin: 0 auto;
}
.footer {
  text-align: center;
  font-size: 12px;
  color: #fff;
}
.title {
  font-size: 1.2em;
  color: #fff;
  text-align: center;
}
</style>
