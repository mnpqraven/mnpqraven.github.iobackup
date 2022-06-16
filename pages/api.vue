<template>
    <div class="flex-row sm:flex">
        <NavBar />
        <div class="navInnerContent">
            <p v-if="$fetchState.pending">fetching data</p>
            <p v-else-if="$fetchState.error">
                An error occured, if you're seeing this then you either:
                <ul>
                    <li>You might have not configured the correct API url</li>
                    <li>The Auth token is wrong</li>
                    <li>There's no internet connection</li>
                </ul>
            </p>
            <div v-else>
                <h1>List</h1>
                <ul>
                    <li v-for="item in items.result" :key="item.id">
                        {{ item.timestamp }} {{ $fetchState.timestamp }}
                    </li>
                </ul>
                <button @click="$fetch">refresh</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        Token: '',
    },
}

export default Vue.extend({
    name: 'ApiPage',
    // LIFECYCLE
    // data > fetch > mount
    data() {
        return {
            items: [],
        }
    },
    async fetch() {
        this.items = await fetch(
            // API URL, options
            '',
            options
        ).then((res) => res.json())
    },
})
</script>
