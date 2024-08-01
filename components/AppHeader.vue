<script setup lang="ts">
import { ListTodo } from "lucide-vue-next";
</script>

<template>
  <header
    class="bg-background/75 h-16 backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-50"
  >
    <div class="container flex items-center h-full">
      <NuxtLink to="/" class="text-[#00DC82] flex gap-2.5 font-mono font-bold">
        <ListTodo />
        Todo App
      </NuxtLink>
    </div>
  </header>
</template>
