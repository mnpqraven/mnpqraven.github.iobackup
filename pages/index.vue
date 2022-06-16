<template>
  <div class="flex-row sm:flex">
    <NavBar></NavBar>
    <div class="navInnerContent">
      <h1 class="bg-green-700 text-blue-900 font-mono text-4xl">Othi DB!</h1>
      <div class="test">
        Get CSS working <span class="test_red">faster and smarter</span> with
        <span class="test_working">PostCSS</span>
      </div>
      <div>
        <button class="border-2 border-gray-900 bg-red-300" @click="count++">
          count is {{ count }}
        </button>
        <button class="border-2 border-gray-900" @click="count = 0">
          reset count
        </button>
        <HoverImage></HoverImage>
      </div>
      <nuxt-content :document="index"></nuxt-content>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({ $content }) {
    const index = await $content('index').fetch()
    return { index }
  },
  data() {
    return {
      title: 'Index Page',
      count: 0,
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
}
</script>

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
