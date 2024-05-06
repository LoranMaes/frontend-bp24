<script lang="ts" setup>
// Emit the event to parent component and make the parameter buttonPress required
const buttonPress = defineModel('buttonPress', { required: true })
</script>

<template>
  <button @click="buttonPress"><slot></slot></button>
</template>
