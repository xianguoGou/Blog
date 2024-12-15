<template>
  <div class="site-aside-container">
    <Avatar
      :size="100"
      url="https://img0.baidu.com/it/u=3555674527,3811220504&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1734282000&t=daee528913638de8ff6d314753ea9fb7"
    />
    <h2 class="title">Virgo</h2>
    <Menu />
    <Contact />
    <p class="footer">© 2021 virgo. All rights reserved.</p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "@/components/SiteAside/Menu";
import Contact from "@/components/SiteAside/Contact";
export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
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
