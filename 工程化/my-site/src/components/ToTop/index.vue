<template>
  <div v-show="show" @click="handleSetScroll" class="to-top-container">
    Top
  </div>
</template>

<script>
export default {
    data() {
        return {
            show: false
        }
    },
    created() {
        this.$bus.$on('mainScroll', this.handleScroll)
    },
    methods: {
        handleScroll(dom) {
            if (!dom) {
                this.show = false
                return
            }
            this.show = dom.scrollTop > 800
        },
        handleSetScroll() {
            this.$bus.$emit('mainSetScroll', 0)
        }
    }

}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.to-top-container {
    position: fixed;
    right: 50px;
    bottom: 50px;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 25px;
    background-color: @primary;
    color: #fff;
    cursor: pointer;
}

</style>