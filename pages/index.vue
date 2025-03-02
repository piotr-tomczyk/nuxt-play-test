<template>
  <div>
    <button>
      <NuxtLink to="/hello">
        Hello
      </NuxtLink>
    </button>
    <button>
      <NuxtLink to="/bienvenidos">
          Bienvenidos
      </NuxtLink>
    </button>
    <button>
      <NuxtLink to="/ai">
          AI completion
      </NuxtLink>
    </button>
    <button>
      <NuxtLink to="/counter">
          Counter {{ counter }}
      </NuxtLink>
    </button>
    <button>
      <NuxtLink to="/nextup">
          Nextup
      </NuxtLink>
    </button>
  </div>
</template>
<script setup lang="ts">
  import { useCounter } from '~/composables/useCounter';
  const { counter } = useCounter();
</script>
