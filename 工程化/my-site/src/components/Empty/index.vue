<template>
  <div class="empty-container">
    <Icon type="empty" />
    <p>{{ text }}</p>
  </div>
</template>

<script>
import Icon from "@/components/Icon"
export default {
    name: 'Empty',
    components: {
        Icon
    },
    props: {
        text: {
            type: String,
            default: '暂无数据'
        }
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/mixins.less";
@import "~@/styles/var.less";
.empty-container {
    .self-center();
    text-align: center;
    color: @gray;
}
.icon-container {
    font-size: 60px;
}

</style>