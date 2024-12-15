<template>
  <div>
    <Avatar :size="50" url="https://img0.baidu.com/it/u=3555674527,3811220504&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1734282000&t=daee528913638de8ff6d314753ea9fb7" />
    <h1>Hello {{ fullName }}</h1>
    <Icon type="arrowDown" />
    <a href="https://www.baidu.com">3222</a>
    <!-- <Pager :current="10" :visibleNumber="20" :total="506" /> -->
    <Pager :current="current" :total="total" @pageChange="handlePageChange" />
  </div>
</template>

<script>

import Avatar from './components/Avatar';
import Icon from './components/Icon';
import Pager from './components/Pager';

export default {
  name: 'App',
  components: {
    Avatar,
    Icon,
    Pager
  },
  data() {
    return {
      firstName: 'Gou',
      lastName: 'XianGuo',
      current: 3,
      total: 506
    }
  },
  computed: {
    fullName() {
      return this.firstName +'' + this.lastName;
    }
  },
  methods: {
    handlePageChange(page) {
      console.log("page:", page);
      this.current = page;
    }
  }
}
</script>
<style scoped>
.iconfont {
  font-size: 20px;
  color: red;
}
</style>
