<template>
    <div>
        <div>
            <span v-if="initialAIResponse">
                <strong> {{ initialAIResponse }}</strong>
            </span>
        </div>
        <div>
            <input v-model="chatMessage" type="text" />
            <button @click="sendMessage"> Send </button>
        </div>
        <div>
            <span v-if="botResponse">
                <strong> {{ botResponse }}</strong>
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
    const chatMessage = ref<string>('');
    const initialAIResponse = await useFetch('/api/ai', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: 'Hi, greet me, because it\'s the initial message :O' })
        });
    const botResponse = ref<string | null>(null);
    async function sendMessage() {
        const message = await $fetch<string | null>('/api/ai', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: chatMessage.value })
        });
        botResponse.value = message;
    }
</script>

<style scoped>

</style>
