<script setup lang="ts">
useHead({
  title: "My App",
  meta: [{ name: "description", content: "My amazing site." }],
});
</script>

<template>
  <div class="min-h-screen bg-slate-50">
    <AppHeader />
    <main>
      <slot />
    </main>
  </div>
</template>
