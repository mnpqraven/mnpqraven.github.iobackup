<template>
  <main>
    <NavBar></NavBar>
    <div class="ml-16">
      <nuxt-content :document="about"></nuxt-content>
    </div>
  </main>
</template>

<script>
export default ({
  async asyncData({ $content }) {
    const about = await $content('about').fetch()
    //curly
    return { about }
  }
})
</script>
