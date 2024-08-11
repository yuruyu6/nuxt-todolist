<script setup lang="ts">
import { useProduct } from "~/api/product";

const { params } = useRoute();

const { data, suspense } = useProduct(params.id as string);

await suspense();
</script>

<template>
  <div class="mt-8 container">
    <div>Product ID: {{ params.id }}</div>
    <div v-if="data">
      <h2>{{ data.title }}</h2>
      <p>{{ data.description }}</p>
      <img :src="data.images[0]" alt="Product image" class="w-full h-48 object-cover rounded-lg" />
      <div class="mt-4 flex justify-between items-center">
        <span class="text-lg font-semibold">{{ data.price }}</span>
        <button class="btn btn-primary">Add to cart</button>
      </div>
    </div>
  </div>
</template>
