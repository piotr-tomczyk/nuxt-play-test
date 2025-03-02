<template>
    <div>
       <button @click="incrementCounter">
            Add
       </button>
       {{ counter }}
    </div>
</template>
<script setup lang="ts">
    import { useCounter } from '~/composables/useCounter';
    const { counter, incrementCounter } = useCounter();
    setPageLayout('custom');
</script>
