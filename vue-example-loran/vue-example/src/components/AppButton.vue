<script lang="ts" setup>
const buttonPress = defineModel('buttonPress', { required: true })
</script>

<template>
  <button @click="buttonPress"><slot></slot></button>
</template>
