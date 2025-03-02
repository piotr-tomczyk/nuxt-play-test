<template>
    <DefaultHeader />
        <main>
            <slot />
        </main>
    <footer>
        Footer especial
    </footer>
</template>

<script setup lang="ts">
import DefaultHeader from "~/components/layout/defaultHeader.vue";
</script>

<style scoped>

</style>
