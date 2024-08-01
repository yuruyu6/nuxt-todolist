<script setup lang="ts">
interface Todo {
  title: string;
  checked: boolean;
}

import { CircleX } from "lucide-vue-next";
import { Checkbox } from "~/components/ui/checkbox";

const todos = ref<Todo[]>([]);
const input = ref<string>("");

const addTodo = () => {
  if (!input.value) return;

  todos.value.push({ checked: false, title: input.value });
  input.value = "";
};

const removeTodo = (index: number) => {
  todos.value.splice(index, 1);
};

onMounted(() => {
  const storedTodos = useLocalStorage<Todo[]>("todos", []);
  todos.value = storedTodos.value;
  storedTodos.value = todos.value;
});
</script>

<template>
  <div class="mt-8 container">
    <form @submit.prevent="addTodo">
      <Input placeholder="Meet with friend" v-model.trim="input" />
    </form>
    <div class="text-center mt-6 text-xl" v-if="todos.length === 0">
      No todos. Please add some todo using input above.
    </div>
    <div v-else class="flex justify-end text-neutral-400 mt-4 text-sm" v-if="todos.length > 0">
      You have {{ todos.length }} todos.
    </div>
    <div class="grid gap-y-2 mt-4" v-auto-animate>
      <div class="flex justify-between gap-2.5" v-for="(todo, index) in todos" :key="todo.title">
        <div class="flex gap-2 5 items-center">
          <Checkbox v-model:checked="todo.checked" />
          {{ todo.title }}
        </div>
        <button
          class="hover:text-red-500 transition-all opacity-50 hover:opacity-100"
          @click="removeTodo(index)"
        >
          <CircleX />
        </button>
      </div>
    </div>
  </div>
</template>
