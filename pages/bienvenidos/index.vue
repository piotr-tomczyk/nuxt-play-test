<template>
    <div>
        <div v-if="bienvenidosData">
            {{ bienvenidosData }}
        </div>
        <div v-else>
            No data
        </div>
    </div>
</template>
<script setup lang="ts">
const { data: bienvenidosData } = useFetch('/api/bienvenidos');
setPageLayout('custom')
</script>
