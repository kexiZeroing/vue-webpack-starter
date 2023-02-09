<template>
  <div>
    <h3>Hello {{ props.name }} from my Vue.js page</h3>
    <div class="container">
      <p class="text">
        give me some style
      </p>
      <button @click="increaseCounter">
        Click Me: {{ counter }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  name: {
    type: String,
    required: true
  }
})

const counter = ref(0)

const increaseCounter = () => {
  counter.value++
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 10px;
  
  .text {
    color: blue;
    font-style: italic;
  }
}
</style>
