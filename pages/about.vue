<template>
    <article>
        <nuxt-content :document="article" />
        <NuxtLink to="/">Home page</NuxtLink><br>
        <p>{{article.title}} - you can grab preamble info in the content files with this</p>
        <p>{{article.description}}</p>
    </article>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'AboutPage',
    async asyncData({$content}) {
        const article = await $content('about').fetch()
        return {article}
    }
})
</script>
