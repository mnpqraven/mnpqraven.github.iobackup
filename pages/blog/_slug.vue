<template>
  <div class="flex-row sm:flex">
    <NavBar></NavBar>
    <div class="navInnerContent">
      <nuxt-content :document="article" />
      <p>Post created at: {{ formatDate(article.createdAt) }}</p>
      <p>Post last updated: {{ formatDate(article.updatedAt) }}</p>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    // fetch our article here
    // url is /blog/{{name}} where {{name}} is the filename in the content folder
    // $content('path',params).fetch() produces content in 'path' as params links
    const article = await $content('articles', params.slug).fetch()
    // remember curly braces
    return { article }
  },
  head() {
    return {
      title: this.article.title,
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>
