<template>
    <div>
        Hello World!
        <div v-if="data">
            {{ data }}
        </div>
        <div v-else>
            No data
        </div>
    </div>
</template>
<script setup lang="ts">
    const { data } = await useFetch('/api/hello');
</script>