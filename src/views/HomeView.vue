<script setup>
</script>

<template>
  <main>
    Welcome!
    <div :class=" { active: isActive }">Test</div>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const isActive = ref(true)

</script>
