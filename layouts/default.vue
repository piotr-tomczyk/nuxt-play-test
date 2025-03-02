<template>
    <DefaultHeader />
        <main>
            <slot />
        </main>
    <DefaultFooter />
</template>

<script setup lang="ts">
import DefaultHeader from "~/components/layout/defaultHeader.vue";
import DefaultFooter from "~/components/layout/defaultFooter.vue";
</script>

<style scoped>

</style>
