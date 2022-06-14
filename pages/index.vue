<template>
  <main>
    <NavBar></NavBar>
    <div class="ml-16">
      <h1 class="bg-green-700 text-blue-200 font-mono text-4xl">Othi DB!</h1>
      <p>{inserts content here}</p>
      <div class="test">
        Get CSS working <span class="test_red">faster and smarter</span> with <span class="test_working">PostCSS</span>
      </div>
      <div>
        <button @click="count++" class="bg-red-300">count is {{ count }} </button>
        <button @click="count = 0">reset count</button>
      </div>
    </div>

  </main>
</template>

<style lang="postcss">
.test {
  color: rgb(40, 176, 218);
  @apply p-4;

  &_working {
    @apply text-green-500;
    @apply font-bold;
  }

  &_red {
    @apply text-red-600;
    @apply font-mono; 
    @apply font-bold;
  }
}
</style>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      count: 0
    }
  }
})
</script>
