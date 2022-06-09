<template>
<main>
  <h1>Hello world!</h1>
  <NuxtLink to="/">Home page</NuxtLink><br>
  <NuxtLink to="/about">About</NuxtLink><br>
  <NuxtLink to="/blog/my-first-blog-post">Blog</NuxtLink>
  <a href="https://nuxtjs.org">normal href link</a>
  <h1 class="bg-green-700 text-blue-200 font-mono text-4xl">Hello world!</h1>
  <button @click="count++" class="bg-red-300">count is {{count}} </button>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data() {
  return {
  count:0
  }
  }
})
</script>
