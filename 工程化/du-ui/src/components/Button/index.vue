<template>
  <button
    ref="_ref"
    class="du-button"
    :class="{
      [`du-button--${type}`]: type,
      [`du-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled || loading,
    }"
    :disabled="disabled || loading"
  >
    <DuIcon icon="spinner" spin v-if="loading" />
    <DuIcon :icon="icon" v-if="icon" />
    <span v-if="$slots.default"><slot /></span>
  </button>
</template>

<script setup>
import { ref } from 'vue'
import propObj from './props'
defineOptions({
  name: 'DuButton',
})
const props = defineProps(propObj)
const _ref = ref(null)
defineExpose({
  ref: _ref,
})
</script>

<style scoped></style>
