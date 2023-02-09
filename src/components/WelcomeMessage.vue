<template>
  <div>
    <h3>Hello {{ name }} from my Vue.js page</h3>
  </div>
</template>

<script setup>
const { name } = defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>
