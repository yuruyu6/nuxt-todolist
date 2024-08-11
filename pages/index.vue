<script setup lang="ts">
import { CircleX } from "lucide-vue-next";
import { Checkbox } from "~/components/ui/checkbox";

interface Todo {
  title: string;
  checked: boolean;
}

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
      <Input v-model.trim="input" placeholder="Meet with friend" />
    </form>
    <div v-if="todos.length === 0" class="text-center mt-6 text-xl">
      No todos. Please add some todo using input above.
    </div>
    <div v-else class="flex justify-end text-neutral-400 mt-4 text-sm">
      You have {{ todos.length }} todos.
    </div>
    <div v-auto-animate class="grid gap-y-2 mt-4">
      <div v-for="(todo, index) in todos" :key="todo.title" class="flex justify-between gap-2.5">
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
