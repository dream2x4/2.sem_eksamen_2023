<script setup>
</script>

<template>
  <main>
    Welcome!
    <div :class=" { active: isActive }">Test</div>
  </main>

  <div class="box col-12">Hej</div>
</template>

<script setup>
import { ref } from 'vue'

const isActive = ref(true)

</script>

<style>
  .box {
    background-color: aqua;
  }
</style>
