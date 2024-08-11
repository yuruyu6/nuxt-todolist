import { useQuery } from "@tanstack/vue-query";
import { api } from ".";
import type { Product } from "~/types/product";
import type { PaginatedResponse } from "~/types";

export const useProducts = () => {
  return useQuery<PaginatedResponse<Product>>({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await api.get("/products");
      return data;
    },
  });
};

export const useProduct = (id: number | string) => {
  return useQuery<Product>({
    queryKey: ["product", id],
    queryFn: async () => {
      const { data } = await api.get(`/products/${id}`);
      return data;
    },
  });
};
