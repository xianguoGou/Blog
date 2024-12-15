<template>
  <div class="test">
    <Empty />
  </div>
</template>

<script>
import Empty from '@/components/Empty'
export default {
    components: {
        Empty
    }
}
</script>

<style>
.test {
    width: 500px;
    height: 500px;
    border: 2px solid #ccc;
    margin: 50px auto;
    position: relative;
}

</style>