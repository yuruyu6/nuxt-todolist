<script setup lang="ts">
import type { Product } from "~/types/product";

const props = defineProps<{
  product: Product;
}>();
</script>

<template>
  <div class="flex flex-col h-full bg-white border rounded-t-lg">
    <img :src="props.product.images[0]" alt="Product image" class="w-full h-48 object-cover rounded-lg" />
    <div class="bg-white rounded-lg p-4 h-full">
      <h2 class="text-lg font-semibold">{{ props.product.title }}</h2>
      <p class="text-neutral-500">{{ props.product.description }}</p>
      <div class="mt-4 flex justify-between items-center">
        <span class="text-lg font-semibold">{{ props.product.price }}</span>
        <button class="btn btn-primary">Add to cart</button>
      </div>
    </div>
  </div>
</template>
