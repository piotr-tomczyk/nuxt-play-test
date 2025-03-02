<template>
    <div>
        <button @click="fetchMessage">
            Fetch message
        </button>
        <div>
            <div v-if="sent">
                Sent
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    setPageLayout('custom');
    const sent = ref(false);
    async function fetchMessage() {
        await $fetch('https://piotrdev.eu.ngrok.io/plugin/notifier/postmessage', {
        method: 'POST',
        headers: {
                'Content-Type': 'text/plain'
        },
        body: { hello: 'world '}
     });
        sent.value = true;
        setTimeout(() => {
            sent.value = false;
        }, 5000);
    }
</script>
