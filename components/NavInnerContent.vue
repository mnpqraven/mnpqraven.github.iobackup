<template>
  <div class="mt-10 sm:ml-16 sm:mt-0">
    <h1 class="bg-green-700 text-blue-200 font-mono text-4xl">Othi DB!</h1>
    <p>{inserts content here}</p>
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
      <HoverImage />
    </div>
    <nuxt-content :document="index"></nuxt-content>
  </div>
</template>
