<template>
  <img class="avatar-container" :src="url" :style="{
    width: size + 'px',
    height: size + 'px'
  }" />
</template>

<script>
export default {
    name: 'Avatar',
    props: {
      url: {
        type: String,
        required: true
      },
      size: {
        type: Number,
        default: 50
      }
    }
}
</script>

<style>
.avatar-container {
  border-radius: 50%;
  object-fit: cover;
}

</style>