<template>
    <div>
        Hello World!
        <div v-if="isLoading">
            Loading...
        </div>
        <div v-if="helloData">
            {{ helloData }}
        </div>
        <div v-else>
            No data
        </div>
        <div>
            Meta from server: {{ metaData }}
        </div>
        {{ JSON.stringify(helloData) }}
    </div>
</template>
<script setup lang="ts">
    const isLoading = ref(false);
    const helloData = ref<string | null>(null);
    const metaData = ref<string | null>(null);
    onMounted(async () => {
        await loadApi(); 
        metaData.value = document.querySelector('meta[name="serverData"]')?.content ?? null;

    })

    async function loadApi() {
        isLoading.value = true;
        try {
            const data = await $fetch('/api/hello');
            helloData.value = data ?? null;
        } catch (error) {
            console.error('Failed to get data');
        }
        isLoading.value = false;
    }
</script>
