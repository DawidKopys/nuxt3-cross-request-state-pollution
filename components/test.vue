<template>
  <div>
    <div>counter: <span> {{ counter }}</span></div>
    <div><button @click="increment">increment</button></div>
  </div>
</template>

<script lang="ts" setup>
const { counter, increment } = useCrossRequestStatePollution()
counter.value++
</script>

