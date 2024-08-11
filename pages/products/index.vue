<script setup lang="ts">
import { useProducts } from "~/api/product";

const { data, isLoading, suspense } = useProducts();

await suspense();
</script>

<template>
  <div class="mt-8 container">
    <div v-if="isLoading">Loading...</div>
    <div v-auto-animate class="grid grid-cols-4 gap-4">
      <nuxt-link v-for="product in data?.products" :key="product.id" :to="`/products/${product.id}`">
        <product-card :product="product" />
      </nuxt-link>
    </div>
  </div>
</template>
