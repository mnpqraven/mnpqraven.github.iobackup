<template>
  <main>
    <NuxtLink to="/">Home page</NuxtLink><br />
    <NuxtLink to="/about">About</NuxtLink><br />
    <NuxtLink to="/blog/my-first-blog-post">Blog</NuxtLink>
    <a href="https://nuxtjs.org">normal href link</a>
    <div class="flex flex-col items-center justify-center">
      <h1 class="bg-green-700 text-blue-200 font-mono text-4xl">
        Hello world!
      </h1>
      <button
        class="border-red-900 rounded-md border bg-red-300"
        @click="count++"
      >
        count is {{ count }}
      </button>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      count: 0,
    }
  },
})
</script>
