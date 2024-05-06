<script setup lang="ts">
import AppButton from '@/components/AppButton.vue'
import { ref } from 'vue'

const counter = ref(0)
</script>

<template>
  <div class="items">
    <h2>State</h2>
    <!-- Variable in HTML example -->
    <p>Current button size: {{ counter }}</p>
    <!-- Components example -->
    <AppButton :button-press="() => (counter < 100 ? counter++ : null)"
      >This is what comes in the slot</AppButton
    >
    <span id="loader" :style="{ width: counter + '%' }"></span>
    <!-- Conditional rendering -->
    <p v-if="counter >= 100">At maximum size</p>
  </div>
</template>

<style scoped lang="scss">
.items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  #loader {
    width: 0%;
    height: 1rem;
    background-color: pink;
    border-radius: 0.5rem;
    transition: width 250ms ease-in-out;
  }
}
</style>
