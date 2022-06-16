<template>
  <div class="flex-row sm:flex">
    <NavBar></NavBar>
    <div class="navInnerContent">
      <nuxt-content :document="about"></nuxt-content>
      <nuxt-content :document="about"></nuxt-content>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About me',
  async asyncData({ $content }) {
    const about = await $content('about').fetch()
    // curly
    return { about }
  },
  head() {
    return {
      title: 'About me',
    }
  },
}
</script>
