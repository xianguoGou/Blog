<template>
  <i class="du-icon" :class="{ [`du-icon--${type}`]: type }">
    <font-awesome-icon v-bind="restProps"></font-awesome-icon>
  </i>
</template>

<script setup>
import { computed } from 'vue'
import { omit } from 'lodash-es'
import propObj from './props'

defineOptions({
  name: 'DuIcon',
})
const props = defineProps(propObj)

const restProps = computed(() => omit(props, ['type']))
</script>

<style scoped></style>
